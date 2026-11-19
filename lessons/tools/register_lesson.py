#!/usr/bin/env python3
"""Safely register an already-authored Markdown lesson in the MGU v1 catalog.

Example:
  py tools\\register_lesson.py --department mathematics --department-name Mathematics \\
    --course arithmetic --course-name Arithmetic --lesson place-value \\
    --title "Understanding Place Value" --minutes 25 --level Beginner

The Markdown file must exist before invoking this command. Nothing is written
unless the resulting catalog and all published Markdown files validate.
"""
import argparse
import copy
import datetime
import json
import os
from pathlib import Path
import sys
import tempfile

from validate_lessons import Audit, SLUG, validate_catalog, validate_markdown


def slug(value):
    return bool(value and SLUG.fullmatch(value) and len(value) <= 100)


def main(argv=None):
    p = argparse.ArgumentParser(description="Register an authored Markdown lesson in MGU catalog.json")
    p.add_argument('--root', type=Path, default=Path(__file__).resolve().parent.parent)
    p.add_argument('--department', required=True, help='Existing/new department slug')
    p.add_argument('--department-name', help='Required for a NEW department')
    p.add_argument('--course', required=True, help='Existing/new course slug')
    p.add_argument('--course-name', help='Required for a NEW course')
    p.add_argument('--lesson', required=True, help='Globally unique lesson slug')
    p.add_argument('--title', required=True, help='Public lesson title')
    p.add_argument('--minutes', type=int, default=30)
    p.add_argument('--level', choices=['Beginner','Intermediate','Advanced'], default='Beginner')
    p.add_argument('--dry-run', action='store_true', help='Check only; write nothing')
    args = p.parse_args(argv)
    root = args.root.expanduser().resolve()
    if not all(slug(value) for value in [args.department, args.course, args.lesson]):
        p.error('Department/course/lesson IDs must be lowercase kebab-case')
    target = f'content/{args.department}/{args.course}/{args.lesson}.md'
    markdown = root.joinpath(*target.split('/'))
    if not markdown.is_file():
        p.error(f'Write the Markdown file before registering it: {markdown}')
    catalog_file = root / 'catalog.json'
    try:
        current = json.loads(catalog_file.read_text(encoding='utf-8-sig'))
    except (OSError, ValueError) as exc:
        p.error(f'Cannot read catalog.json: {exc}')
    if not isinstance(current, dict) or current.get('schemaVersion') != 1 or not isinstance(current.get('departments'), list):
        p.error('Catalog must have schemaVersion 1 and a departments array')
    catalog = copy.deepcopy(current)
    for department in catalog['departments']:
        for course in department.get('courses', []):
            for lesson in course.get('lessons', []):
                if lesson.get('id') == args.lesson:
                    p.error(f'Lesson ID is already registered: {args.lesson}; edit the existing record instead')
    department = next((entry for entry in catalog['departments'] if entry.get('id') == args.department), None)
    if department is None:
        if not args.department_name:
            p.error('New departments require --department-name')
        department = {'id': args.department, 'name': args.department_name, 'courses': []}
        catalog['departments'].append(department)
    elif args.department_name and department.get('name') != args.department_name:
        p.error(f'Existing department name is {department.get("name")!r}; do not silently rename it')
    course = next((entry for entry in department['courses'] if entry.get('id') == args.course), None)
    if course is None:
        if not args.course_name:
            p.error('New courses require --course-name')
        course = {'id': args.course, 'name': args.course_name, 'lessons': []}
        department['courses'].append(course)
    elif args.course_name and course.get('name') != args.course_name:
        p.error(f'Existing course name is {course.get("name")!r}; do not silently rename it')
    course['lessons'].append({'id': args.lesson, 'title': args.title, 'file': target,
                              'minutes': args.minutes, 'level': args.level})
    audit = Audit()
    entries = validate_catalog(catalog, root, audit)
    for path, relative in entries:
        validate_markdown(path, relative, audit)
    for error in audit.errors:
        print(error, file=sys.stderr)
    if audit.errors:
        p.error(f'Validation failed with {len(audit.errors)} error(s); nothing changed')
    for warning in audit.warnings:
        print(warning)
    if args.dry_run:
        print(f'DRY RUN PASS: would register {target}; no files changed')
        return 0
    timestamp = datetime.datetime.now().strftime('%Y%m%d-%H%M%S')
    backup = catalog_file.with_name(f'catalog.json.bak-{timestamp}')
    candidate = backup
    counter = 2
    while candidate.exists():
        candidate = backup.with_name(f'{backup.name}-{counter}')
        counter += 1
    candidate.write_bytes(catalog_file.read_bytes())
    # Write via same-directory temp file and replace to avoid partially written JSON.
    fd, name = tempfile.mkstemp(prefix='catalog-new-', suffix='.json', dir=str(root))
    try:
        with os.fdopen(fd, 'w', encoding='utf-8', newline='\n') as handle:
            json.dump(catalog, handle, ensure_ascii=False, indent=2)
            handle.write('\n')
        os.replace(name, catalog_file)
    finally:
        if os.path.exists(name):
            os.unlink(name)
    print(f'REGISTERED: {args.title} -> {target}')
    print(f'Backup: {candidate.name}')
    print('Next: review the diff, run validate_lessons.py, test the dashboard, then publish catalog.json and Markdown.')
    return 0


if __name__ == '__main__':
    sys.exit(main())
