#!/usr/bin/env python3
"""MGU lessons catalog + Markdown prepublication validator (stdlib only).

Run from anywhere:
    py C:\\MGU\\lessons\\tools\\validate_lessons.py
Or against a working copy:
    py tools\\validate_lessons.py --root C:\\MGU\\lessons

Works in Python 3.8+ and Windows PowerShell 5.1.
"""

import argparse
import json
import re
import sys
from pathlib import Path
from urllib.parse import urlsplit

SLUG = re.compile(r"^[a-z0-9]+(?:-[a-z0-9]+)*$")
PATH_PATTERN = re.compile(r"^content/([a-z0-9]+(?:-[a-z0-9]+)*)/([a-z0-9]+(?:-[a-z0-9]+)*)/([a-z0-9]+(?:-[a-z0-9]+)*)\.md$")
TERM_USE = re.compile(r"\[\[([a-z0-9-]+)\|([^\]]+)\]\]")
HEADING = re.compile(r"^#{1,4}\s+(.+)$")
MARKDOWN_LINK = re.compile(r"(?<!!)\[([^\]]+)\]\(([^\s)]+)\)")
QUIZ_OPTION = re.compile(r"^- \[([ xX])\] (.+)$")
TABLE_SEP = re.compile(r"^:?-{3,}:?$", re.I)
LEVELS = {"Beginner", "Intermediate", "Advanced"}
DEPT_KEYS = {"id", "name", "description", "courses"}
COURSE_KEYS = {"id", "name", "description", "lessons"}
LESSON_KEYS = {"id", "title", "file", "minutes", "level"}
ROOT_KEYS = {"schemaVersion", "departments"}


class Audit:
    def __init__(self):
        self.errors = []
        self.warnings = []
        self.stats = {"departments": 0, "courses": 0, "lessons": 0, "answer_blocks": 0,
                      "quizzes": 0, "quiz_questions": 0, "term_definitions": 0, "tables": 0}

    def err(self, location, message):
        self.errors.append(f"ERROR  {location}: {message}")

    def warn(self, location, message):
        self.warnings.append(f"WARN   {location}: {message}")


def unknown_keys(obj, keys, location, audit):
    for key in sorted(set(obj) - keys):
        audit.err(location, f"unknown field '{key}'; schemaVersion 1 does not define this property")


def nonempty_text(obj, key, location, audit, maximum=160, required=True):
    if key not in obj and not required:
        return
    value = obj.get(key)
    if not isinstance(value, str) or not value.strip() or len(value) > maximum:
        audit.err(location, f"'{key}' must be nonempty text of at most {maximum} characters")


def id_check(obj, location, audit):
    value = obj.get("id")
    if not isinstance(value, str) or len(value) > 100 or not SLUG.fullmatch(value):
        audit.err(location, "'id' must be lowercase kebab-case (1–100 characters)")
        return None
    return value


def validate_catalog(catalog, root, audit):
    if not isinstance(catalog, dict):
        audit.err("catalog.json", "root must be an object")
        return []
    unknown_keys(catalog, ROOT_KEYS, "catalog.json", audit)
    if type(catalog.get("schemaVersion")) is not int or catalog.get("schemaVersion") != 1:
        audit.err("catalog.json", "'schemaVersion' must be the integer 1; do not bump it for content additions")
    departments = catalog.get("departments")
    if not isinstance(departments, list):
        audit.err("catalog.json", "'departments' must be an array")
        return []
    paths = []
    dep_ids = set()
    lesson_ids = set()
    for di, dept in enumerate(departments):
        loc = f"departments[{di}]"
        if not isinstance(dept, dict):
            audit.err(loc, "department must be a JSON object")
            continue
        unknown_keys(dept, DEPT_KEYS, loc, audit)
        dep_id = id_check(dept, loc, audit)
        if dep_id in dep_ids and dep_id is not None:
            audit.err(loc, f"duplicate department id '{dep_id}'")
        if dep_id: dep_ids.add(dep_id)
        nonempty_text(dept, "name", loc, audit)
        nonempty_text(dept, "description", loc, audit, maximum=500, required=False)
        courses = dept.get("courses")
        if not isinstance(courses, list):
            audit.err(loc, "'courses' must be an array")
            continue
        audit.stats["departments"] += 1
        course_ids = set()
        for ci, course in enumerate(courses):
            cloc = f"{loc}.courses[{ci}]"
            if not isinstance(course, dict):
                audit.err(cloc, "course must be a JSON object")
                continue
            unknown_keys(course, COURSE_KEYS, cloc, audit)
            course_id = id_check(course, cloc, audit)
            if course_id in course_ids and course_id is not None:
                audit.err(cloc, f"duplicate course id '{course_id}' within department '{dep_id}'")
            if course_id: course_ids.add(course_id)
            nonempty_text(course, "name", cloc, audit)
            nonempty_text(course, "description", cloc, audit, maximum=500, required=False)
            lessons = course.get("lessons")
            if not isinstance(lessons, list):
                audit.err(cloc, "'lessons' must be an array")
                continue
            audit.stats["courses"] += 1
            for li, lesson in enumerate(lessons):
                lloc = f"{cloc}.lessons[{li}]"
                if not isinstance(lesson, dict):
                    audit.err(lloc, "lesson must be a JSON object")
                    continue
                unknown_keys(lesson, LESSON_KEYS, lloc, audit)
                lesson_id = id_check(lesson, lloc, audit)
                if lesson_id in lesson_ids and lesson_id is not None:
                    audit.err(lloc, f"duplicate sitewide lesson id '{lesson_id}'")
                if lesson_id: lesson_ids.add(lesson_id)
                nonempty_text(lesson, "title", lloc, audit)
                if "minutes" in lesson and (type(lesson["minutes"]) is not int or not 1 <= lesson["minutes"] <= 600):
                    audit.err(lloc, "'minutes' must be an integer between 1 and 600")
                if "level" in lesson and lesson["level"] not in LEVELS:
                    audit.err(lloc, "'level' must be Beginner, Intermediate, or Advanced")
                file_string = lesson.get("file")
                match = PATH_PATTERN.fullmatch(file_string) if isinstance(file_string, str) else None
                if not match:
                    audit.err(lloc, "'file' must have format content/department-id/course-id/lesson-id.md")
                    continue
                if (dep_id, course_id, lesson_id) != match.groups():
                    audit.err(lloc, f"file path '{file_string}' does not match its department/course/lesson IDs")
                    continue
                candidate = root.joinpath(*file_string.split('/'))
                try:
                    candidate.resolve(strict=False).relative_to(root.resolve())
                except ValueError:
                    audit.err(lloc, "file path escapes the lessons root")
                    continue
                if not candidate.is_file():
                    audit.err(lloc, f"Markdown file not found: {file_string}")
                    continue
                paths.append((candidate, file_string))
                audit.stats["lessons"] += 1
    return paths


def heading_slug(text):
    # Exact algorithm used by the current dashboard.js heading renderer.
    return (re.sub(r"\s+", "-", re.sub(r"[^a-z0-9\s-]", "", text.lower()).strip())[:70]) or "section"


def cells(line):
    return [cell.strip().replace(r"\|", "|") for cell in re.split(r"(?<!\\)\|", line.strip().strip('|'))]


def safe_href(href):
    # Mirrors dashboard.js safeHref; disallows protocol-relative and non-http schemes.
    return bool(re.match(r"^(https?://|/(?!/)|\.\.?/|#)", href, re.I))


def validate_quiz(block, label, audit):
    question_count = 0
    current = None

    def finish_question(q):
        if q is None:
            return
        if q['choices'] < 2:
            audit.err(label, f"quiz question {q['index']} needs at least two answer options")
        if q['correct'] != 1:
            audit.err(label, f"quiz question {q['index']} needs exactly one marked [- x] correct option")
        if not q['explanation']:
            audit.err(label, f"quiz question {q['index']} needs an '! explanation' line")

    for rownum, line in block:
        line = line.strip()
        if not line:
            continue
        if line.startswith('? '):
            finish_question(current)
            question_count += 1
            current = {'index': question_count, 'choices': 0, 'correct': 0, 'explanation': False}
            if not line[2:].strip():
                audit.err(f"{label}:{rownum}", "question prompt cannot be empty")
        elif QUIZ_OPTION.fullmatch(line):
            if current is None:
                audit.err(f"{label}:{rownum}", "quiz choice appears before a question")
            else:
                m = QUIZ_OPTION.fullmatch(line)
                current['choices'] += 1
                current['correct'] += int(m.group(1).lower() == 'x')
                if not m.group(2).strip():
                    audit.err(f"{label}:{rownum}", "quiz option cannot be empty")
        elif line.startswith('! '):
            if current is None:
                audit.err(f"{label}:{rownum}", "explanation appears before a question")
            elif current['explanation']:
                audit.err(f"{label}:{rownum}", "more than one explanation in the same question")
            elif not line[2:].strip():
                audit.err(f"{label}:{rownum}", "explanation cannot be blank")
            else:
                current['explanation'] = True
        else:
            audit.err(f"{label}:{rownum}", f"unsupported quiz syntax: {line[:65]}")
    finish_question(current)
    if question_count == 0:
        audit.err(label, "quiz directive has no questions")
    audit.stats['quiz_questions'] += question_count


def validate_markdown(path, relative, audit):
    try:
        data = path.read_text(encoding="utf-8-sig")
    except (OSError, UnicodeDecodeError) as exc:
        audit.err(relative, f"cannot read UTF-8 Markdown: {exc}")
        return
    if not data.strip():
        audit.err(relative, "Markdown file is empty")
        return
    lines = data.replace('\r\n', '\n').replace('\r', '\n').split('\n')
    defined_terms = {}
    mentioned_terms = []
    anchors = set()
    anchors_requested = []
    directive = None
    directive_start = None
    directive_body = []
    answer_count = 0
    term_blocks = 0
    fenced = False
    first_section = False
    i = 0

    while i < len(lines):
        rownum = i + 1
        line = lines[i]
        stripped = line.strip()
        label = f"{relative}:{rownum}"
        if directive is not None:
            if stripped == ':::':
                if directive == 'terms':
                    term_blocks += 1
                    for rowid, term in directive_body:
                        value = term.strip()
                        if not value or value.startswith('#'):
                            continue
                        parts = [part.strip() for part in value.split('|')]
                        if len(parts) not in (3, 4):
                            audit.err(f"{relative}:{rowid}", "term must be 'id | label | definition | optional-url'")
                            continue
                        tid, display, meaning = parts[:3]
                        href = parts[3] if len(parts) == 4 else ''
                        if not SLUG.fullmatch(tid):
                            audit.err(f"{relative}:{rowid}", "invalid term ID (use lowercase kebab-case)")
                        elif tid in defined_terms:
                            audit.err(f"{relative}:{rowid}", f"duplicate term ID '{tid}'")
                        else:
                            defined_terms[tid] = rowid
                        if not display or not meaning:
                            audit.err(f"{relative}:{rowid}", "term label and definition must be nonempty")
                        if href and not safe_href(href):
                            audit.err(f"{relative}:{rowid}", f"unsafe term link '{href}'")
                    audit.stats['term_definitions'] += len([r for r in directive_body if r[1].strip() and not r[1].strip().startswith('#')])
                elif directive == 'quiz':
                    audit.stats['quizzes'] += 1
                    validate_quiz(directive_body, f"{relative}:{directive_start}", audit)
                elif directive == 'answer':
                    audit.stats['answer_blocks'] += 1
                    answer_count += 1
                    if not any(row.strip() for _, row in directive_body):
                        audit.err(f"{relative}:{directive_start}", "answer block cannot be empty")
                directive = None
                directive_body = []
                directive_start = None
            elif stripped.startswith(':::'):
                audit.err(label, "nested or unexpected directive; close the current directive with ::: first")
            else:
                directive_body.append((rownum, line))
            i += 1
            continue

        if line.startswith('```'):
            fenced = not fenced
            i += 1
            continue
        if fenced:
            i += 1
            continue

        if line.startswith(':::'):
            opening = re.fullmatch(r':::(answer(?:\s+.+)?|quiz|terms)\s*', line)
            if not opening:
                audit.err(label, "unrecognized or misplaced directive; supported: :::answer, :::quiz, :::terms")
            else:
                name = opening.group(1).split()[0]
                directive = name
                directive_start = rownum
                directive_body = []
            i += 1
            continue

        if stripped.startswith('!['):
            audit.err(label, "Markdown images are not implemented in the current renderer")

        head = HEADING.fullmatch(line)
        if head:
            first_section = True
            if line.startswith('# ') and not line.startswith('## '):
                audit.warn(label, "avoid H1 in Markdown; dashboard displays the catalog title already")
            slug = heading_slug(head.group(1))
            used_slug = slug
            index = 2
            while used_slug in anchors:
                used_slug = f"{slug}-{index}"
                index += 1
            anchors.add(used_slug)

        if line.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].startswith('|'):
                rows.append((i + 1, cells(lines[i])))
                i += 1
            if len(rows) < 2 or not all(TABLE_SEP.fullmatch(c) for c in rows[1][1]):
                audit.err(label, "Markdown table needs a header row and | --- | separator")
            elif any(len(row) != len(rows[0][1]) for _, row in rows):
                audit.err(label, "Markdown table rows have inconsistent column counts")
            else:
                audit.stats['tables'] += 1
            for rowid, row in rows:
                for cell in row:
                    mentioned_terms.extend((rowid, tid) for tid, _ in TERM_USE.findall(cell))
                    anchors_requested.extend((rowid, url[1:]) for _, url in MARKDOWN_LINK.findall(cell) if url.startswith('#'))
            continue

        for tid, _ in TERM_USE.findall(line):
            mentioned_terms.append((rownum, tid))
        for _, href in MARKDOWN_LINK.findall(line):
            if not safe_href(href):
                audit.err(label, f"unsafe or unsupported Markdown link: '{href}'")
            if href.startswith('#'):
                anchors_requested.append((rownum, href[1:]))
        i += 1

    if directive:
        audit.err(f"{relative}:{directive_start}", f"unclosed ::: {directive} directive")
    if fenced:
        audit.err(relative, "unclosed triple-backtick code fence")
    if term_blocks > 1:
        audit.err(relative, "define vocabulary in exactly one :::terms block per file")
    for rowid, tid in mentioned_terms:
        if tid not in defined_terms:
            audit.err(f"{relative}:{rowid}", f"vocabulary trigger [[{tid}|...]] has no matching :::terms definition")
    for rowid, anchor in anchors_requested:
        if anchor not in anchors:
            audit.err(f"{relative}:{rowid}", f"internal link '#{anchor}' has no matching generated heading ID")
    if not first_section:
        audit.warn(relative, "no Markdown heading found; recommend sections starting with ##")
    if not answer_count:
        audit.warn(relative, "no :::answer disclosure found; MGU recommends a practice answer key")


def main(argv=None):
    ap = argparse.ArgumentParser(description="Validate the MGU departmental lesson catalog and all registered Markdown lessons")
    ap.add_argument('--root', type=Path, default=Path(__file__).resolve().parent.parent,
                    help='Folder containing catalog.json and content/ (default: parent of tools/)')
    args = ap.parse_args(argv)
    root = args.root.expanduser().resolve()
    audit = Audit()
    catalog_path = root / 'catalog.json'
    if not catalog_path.is_file():
        audit.err(str(catalog_path), "catalog.json not found")
        paths = []
    else:
        try:
            catalog = json.loads(catalog_path.read_text(encoding='utf-8-sig'))
            paths = validate_catalog(catalog, root, audit)
        except (OSError, UnicodeDecodeError, json.JSONDecodeError) as exc:
            audit.err(str(catalog_path), f"cannot parse catalog JSON: {exc}")
            paths = []
    for path, relative in paths:
        validate_markdown(path, relative, audit)

    print("MGU Departmental Lesson Content Validator — catalog schemaVersion 1")
    print(f"Root: {root}")
    for warning in audit.warnings:
        print(warning)
    for error in audit.errors:
        print(error)
    print("Summary: " + ' | '.join(f"{key.replace('_', ' ')}: {value}" for key, value in audit.stats.items()))
    print(f"Result: {'PASS' if not audit.errors else 'FAIL'} ({len(audit.errors)} error(s), {len(audit.warnings)} warning(s))")
    return 1 if audit.errors else 0


if __name__ == '__main__':
    sys.exit(main())
