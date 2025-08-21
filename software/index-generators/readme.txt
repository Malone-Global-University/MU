4:38 PM 8/20/2025

cli tool adds cli support for index generator.

source code:

<pre>çode>

import os
import json
import html
import argparse
from datetime import datetime
from pathlib import Path

ICON_MAP = {
    ".md": "📄", ".txt": "📝", ".odt": "📝", ".pdf": "📚", ".csv": "📊",
    ".xls": "📊", ".xlsx": "📊", ".png": "🖼️", ".jpg": "🖼️", ".jpeg": "🖼️",
    ".gif": "🖼️", ".svg": "🖼️", ".zip": "🗜️", ".tar": "🗜️", ".gz": "🗜️",
    ".mp4": "🎞️", ".mp3": "🎧", ".py": "🐍", ".js": "🧩", ".css": "🎨", ".html": "🌐",
}

README_NAMES = ("meta.json", "README.md", "README.txt")

def file_icon(filename: str) -> str:
    return ICON_MAP.get(Path(filename).suffix.lower(), "📁")

def read_folder_metadata(folder_path: str):
    for name in README_NAMES:
        path = os.path.join(folder_path, name)
        if os.path.isfile(path):
            try:
                if name.endswith(".json"):
                    with open(path, "r", encoding="utf-8") as fh:
                        data = json.load(fh)
                        title = data.get("title") or data.get("name")
                        desc  = data.get("description") or data.get("desc") or data.get("summary")
                        return {"title": title, "description": desc, **{k:v for k,v in data.items() if k not in ("title","description","name","desc","summary")}}
                else:
                    with open(path, "r", encoding="utf-8") as fh:
                        text = fh.read().strip()
                        lines = text.splitlines()
                        title = next((ln.lstrip("# ").strip() for ln in lines if ln.startswith("#")), None)
                        paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]
                        description = paragraphs[1] if title and len(paragraphs) > 1 else paragraphs[0] if paragraphs else None
                        kv = {}
                        for ln in lines:
                            if ":" in ln:
                                k,v = ln.split(":",1)
                                kv[k.strip().lower()] = v.strip()
                        if "title" in kv: title = kv["title"]
                        if "description" in kv: description = kv["description"]
                        return {"title": title, "description": description, **kv}
            except Exception:
                pass
    return {"title": None, "description": None}

def make_breadcrumb(root_path: str, base_dir: str, output_filename: str):
    rel = os.path.relpath(root_path, base_dir)
    if rel == ".":
        return f'<nav class="breadcrumb"><a href="/index.html">Home</a> › {os.path.basename(base_dir).title()}</nav>'
    parts = rel.split(os.sep)
    crumbs = [f'<a href="/index.html">Home</a>', f'<a href="/{base_dir}/index.html">{os.path.basename(base_dir).title()}</a>']
    cumulative = base_dir
    for i, p in enumerate(parts):
        cumulative = os.path.join(cumulative, p)
        name = html.escape(p.replace("-", " ").title())
        href = "/" + os.path.join(cumulative, output_filename).replace(os.sep, "/")
        if i < len(parts) - 1:
            crumbs.append(f'<a href="{href}">{name}</a>')
        else:
            crumbs.append(f'{name}')
    return '<nav class="breadcrumb">' + " › ".join(crumbs) + '</nav>'

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="Malone University - Auto-generated index">
  <title>{title}</title>
  <link rel="icon" href="{favicon}" type="image/x-icon">
  <link rel="stylesheet" href="{css_path}">
  {extra_css_link}
</head>
<body>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="navbar" role="navigation">
    <div class="logo-container">
      <a href="/index.html"><img src="{favicon}" alt="Malone University" class="logo-img"></a>
      <span class="school-name">Malone University</span>
    </div>
    <div class="top-links">
      <a href="/department/directory">Department</a> |
      <a href="/library/directory">Library</a> |
      <a href="/devblog/live-journal">DevBlog</a>
    </div>
    <div class="nav-actions">
      <button id="theme-toggle" title="Toggle theme">💻</button>
    </div>
  </header>
  <main id="main-content">
    {breadcrumb}
    <div class="hero">
      <h1>{h1}</h1>
      <p>{hero_p}</p>
    </div>
    <section class="listing">
      <h2>Subfolders</h2>
      {subfolders_links}
    </section>
    <section class="listing files-section">
      <h2>Files <small>(search below)</small></h2>
      <input id="file-search" placeholder="Filter files..." aria-label="Filter files">
      <div id="file-list">{file_links}</div>
    </section>
  </main>
  <footer><p>© {year} Malone University. Generated {updated}.</p></footer>
  <script src="{extra_js}"></script>
  <script>
    (function() {{
      const input = document.getElementById('file-search');
      const fileList = document.getElementById('file-list');
      if(!input || !fileList) return;
      input.addEventListener('input', function() {{
        const q = this.value.toLowerCase().trim();
        const items = fileList.querySelectorAll('li[data-fname]');
        items.forEach(li => {{
          const name = li.getAttribute('data-fname').toLowerCase();
          const ftype = li.getAttribute('data-ftype').toLowerCase();
          li.style.display = (!q || name.includes(q) || ftype.includes(q)) ? '' : 'none';
        }});
      }});
    }})();
  </script>
</body>
</html>
"""

def generate_index_for_folder(root, dirs, files, config):
    meta = read_folder_metadata(root)
    base_dir = config['base_dir']
    output_filename = config['output_filename']
    title = meta.get("title") or os.path.basename(root).replace("-", " ").title()
    hero_p = meta.get("description") or f"Index of {title}"

    sub_html = "<ul>\n" + "\n".join(f'  <li><a href="{d}/{output_filename}">{html.escape(d.title().replace("-", " "))}</a></li>' for d in sorted(dirs)) + "\n</ul>" if dirs else "<p>No subfolders.</p>"

    file_items = []
    for f in files:
        if f == output_filename: continue
        safe_name = html.escape(f)
        icon = file_icon(f)
        ext = Path(f).suffix.lstrip(".").lower()
        file_items.append(f'<li data-fname="{safe_name}" data-ftype="{ext}">{icon} <a href="{safe_name}">{safe_name}</a></li>')

    files_html = "<ul>\n" + "\n".join("  " + it for it in file_items) + "\n</ul>" if file_items else "<p>No files in this folder.</p>"

    breadcrumb = make_breadcrumb(root, base_dir, output_filename)
    now = datetime.utcnow().strftime("%Y-%m-%d %H:%M (UTC)")

    html_output = HTML_TEMPLATE.format(
        title=f"{title} - Malone University",
        favicon=config['favicon'],
        css_path=config['css_path'],
        extra_css_link=f'<link rel="stylesheet" href="{config["extra_css"]}">' if config["extra_css"] else "",
        extra_js=config["extra_js"] or "",
        breadcrumb=breadcrumb,
        h1=html.escape(title),
        hero_p=html.escape(hero_p),
        subfolders_links=sub_html,
        file_links=files_html,
        year=datetime.utcnow().year,
        updated=now
    )

    output_path = os.path.join(root, output_filename)
    with open(output_path, "w", encoding="utf-8") as fh:
        fh.write(html_output)
    print(f"✔ Created: {output_path}")

def main():
    parser = argparse.ArgumentParser(description="Generate HTML index pages for directory trees.")
    parser.add_argument("--base", required=True, action="append", help="Base directory to scan. Use multiple times for more than one.")
    parser.add_argument("--css", default="/component/css/pyc.css", help="Main CSS file path.")
    parser.add_argument("--extra-css", default="", help="Optional extra CSS file.")
    parser.add_argument("--extra-js", default="", help="Optional JS file.")
    parser.add_argument("--favicon", default="/image/logo.png", help="Path to favicon image.")
    parser.add_argument("--output", default="index.html", help="Name of the index file to write.")
    parser.add_argument("--ignore-files", nargs="*", default=[], help="List of file names to ignore (e.g. index.html .DS_Store)")
    parser.add_argument("--ignore-dirs", nargs="*", default=[], help="List of directory names to ignore (e.g. __pycache__ .git)")
    args = parser.parse_args()

    config = {
        'css_path': args.css,
        'extra_css': args.extra_css,
        'extra_js': args.extra_js,
        'favicon': args.favicon,
        'output_filename': args.output,

    }

    for base_dir in args.base:
        config['base_dir'] = base_dir
        for root, dirs, files in os.walk(base_dir):
            dirs[:] = sorted(dirs, key=str.lower)
            files = sorted(files, key=str.lower)
            generate_index_for_folder(root, dirs, files, config)

if __name__ == "__main__":
    main()


</code><pre>

Example usage:


python generate_index.py \
  --base community \
  --base department \
  --css /component/css/pyc.css \
  --extra-css /component/css/py.css \
  --extra-js /component/js/theme.js \
  --favicon /image/logo.png


4:51 PM 8/20/2025

✅ --ignore-files and --ignore-dirs

These optional CLI flags will allow users to ignore specific files or folders during index generation.

🔧 Implementation Plan

We'll:

Add --ignore-files and --ignore-dirs to the CLI using argparse

Pass them into the config dictionary

Apply the ignores when filtering files and dirs in os.walk

🛠 Updated Sections in Script
🔹 1. Update argparse block

Add the new arguments:

parser.add_argument("--ignore-files", nargs="*", default=[], help="List of file names to ignore (e.g. index.html .DS_Store)")
parser.add_argument("--ignore-dirs", nargs="*", default=[], help="List of directory names to ignore (e.g. __pycache__ .git)")

🔹 2. Pass them into config:
config = {
    'css_path': args.css,
    'extra_css': args.extra_css,
    'extra_js': args.extra_js,
    'favicon': args.favicon,
    'output_filename': args.output,
    'ignore_files': set(args.ignore_files),
    'ignore_dirs': set(args.ignore_dirs),
}

🔹 3. Filter dirs and files during walk

In your main() loop:

for base_dir in args.base:
    config['base_dir'] = base_dir
    for root, dirs, files in os.walk(base_dir):
        dirs[:] = [d for d in sorted(dirs, key=str.lower) if d not in config['ignore_dirs']]
        files = [f for f in sorted(files, key=str.lower) if f not in config['ignore_files']]
        generate_index_for_folder(root, dirs, files, config)

✅ Example CLI Usage
python generate_index.py \
  --base community \
  --ignore-files index.html .DS_Store \
  --ignore-dirs __pycache__ .git


This will:

Skip any index.html and .DS_Store files from listings

Skip folders like __pycache__ and .git from being indexed at all

📦 Summary of New Options
Option	Description
--ignore-files	List of filenames to skip
--ignore-dirs	List of directory names to skip
Accepts multiple values	Yes (space-separated or repeated)


4:52 PM 8/20/2025


Great! Let's implement .config file support so users can specify ignore patterns and other options from a local config file — making the CLI more flexible and user-friendly.

✅ Goals

Read from a .config (or .indexgen.json) file in the root project folder.

Allow users to set:

base directories

ignore_files

ignore_dirs

Any other CLI option as a fallback/default

Merge CLI arguments on top of config file values (CLI wins if both provided)

🔧 Step-by-Step Implementation
🗂️ 1. Example .indexgen.json Config File
{
  "base": ["community", "department"],
  "ignore_files": ["index.html", ".DS_Store"],
  "ignore_dirs": ["__pycache__", ".git"],
  "css": "/component/css/pyc.css",
  "extra_css": "/component/css/py.css",
  "extra_js": "/component/js/theme.js",
  "favicon": "/image/logo.png",
  "output": "index.html"
}


You can name it .indexgen.json or .config.json as preferred.

🧠 2. Update Script to Load Config File (optional)

Add at the top of main():

import json

def load_config_file(path=".indexgen.json"):
    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as fh:
            return json.load(fh)
    return {}

🧩 3. Merge Config with CLI Args

After parser.parse_args():

cli_args = vars(parser.parse_args())
file_config = load_config_file(cli_args.get("config_file", ".indexgen.json"))

# Merge: CLI takes priority
merged_config = {**file_config, **{k: v for k, v in cli_args.items() if v not in (None, [], '')}}


Use merged_config instead of args.

✏️ 4. Final argparse + CLI Override Structure

Update the parser:

parser = argparse.ArgumentParser(description="Generate HTML index pages for folders.")
parser.add_argument("--config-file", default=".indexgen.json", help="Path to config file (default: .indexgen.json)")
parser.add_argument("--base", nargs="+", help="Base directory to scan")
parser.add_argument("--css", help="Main CSS file path.")
parser.add_argument("--extra-css", help="Optional extra CSS file.")
parser.add_argument("--extra-js", help="Optional JS file.")
parser.add_argument("--favicon", help="Path to favicon image.")
parser.add_argument("--output", help="Name of the index file to write.")
parser.add_argument("--ignore-files", nargs="*", help="File names to ignore")
parser.add_argument("--ignore-dirs", nargs="*", help="Directory names to ignore")

🧪 5. Use merged_config in main()
config = {
    'css_path': merged_config.get("css", "/component/css/pyc.css"),
    'extra_css': merged_config.get("extra_css", ""),
    'extra_js': merged_config.get("extra_js", ""),
    'favicon': merged_config.get("favicon", "/image/logo.png"),
    'output_filename': merged_config.get("output", "index.html"),
    'ignore_files': set(merged_config.get("ignore_files", [])),
    'ignore_dirs': set(merged_config.get("ignore_dirs", [])),
}

for base_dir in merged_config.get("base", []):
    config['base_dir'] = base_dir
    for root, dirs, files in os.walk(base_dir):
        dirs[:] = [d for d in sorted(dirs, key=str.lower) if d not in config['ignore_dirs']]
        files = [f for f in sorted(files, key=str.lower) if f not in config['ignore_files']]
        generate_index_for_folder(root, dirs, files, config)

✅ Behavior Summary
Config Source	Priority	Example
CLI args	High	--css /new.css
.indexgen.json	Medium	css: /default.css
Defaults	Low	if neither set
✅ Example Run
python generate_index.py  # Uses `.indexgen.json`


Or override:

python generate_index.py --css /custom.css


4:53 PM 8/20/2025

✅ New Features
1. Wildcard ignore support (like .gitignore)

Allows patterns like:

"ignore_files": ["*.log", "debug*.txt"],
"ignore_dirs": ["__pycache__", ".git", "temp*"]

2. Auto-generate .indexgen.json stub

You can run a flag like:

python generate_index.py --init-config


This will create a default .indexgen.json file.

🧠 Libraries Used

We’ll use Python’s built-in fnmatch
 for wildcard pattern matching.

✅ Step-by-Step Implementation
🔹 1. Add --init-config CLI Option

In your argparse block:

parser.add_argument("--init-config", action="store_true", help="Generate a default .indexgen.json file and exit.")

🔹 2. Add Default Config Template
DEFAULT_CONFIG = {
    "base": ["community", "department"],
    "ignore_files": ["index.html", ".DS_Store", "*.log"],
    "ignore_dirs": ["__pycache__", ".git", "temp*"],
    "css": "/component/css/pyc.css",
    "extra_css": "/component/css/py.css",
    "extra_js": "/component/js/theme.js",
    "favicon": "/image/logo.png",
    "output": "index.html"
}

🔹 3. Implement --init-config Behavior

After args = parser.parse_args():

if args.init_config:
    config_file = args.config_file if hasattr(args, 'config_file') else ".indexgen.json"
    if os.path.exists(config_file):
        print(f"⚠️  Config file '{config_file}' already exists. Aborting.")
    else:
        with open(config_file, "w", encoding="utf-8") as fh:
            json.dump(DEFAULT_CONFIG, fh, indent=2)
        print(f"✅ Default config written to '{config_file}'.")
    exit(0)

🔹 4. Apply Wildcard Ignore Filtering Using fnmatch

Import at the top:

import fnmatch


Replace the folder/file filtering in your main() loop with:

ignore_dirs = config['ignore_dirs']
ignore_files = config['ignore_files']

def is_ignored(name, patterns):
    return any(fnmatch.fnmatch(name, pattern) for pattern in patterns)

for base_dir in merged_config.get("base", []):
    config['base_dir'] = base_dir
    for root, dirs, files in os.walk(base_dir):
        dirs[:] = [d for d in sorted(dirs, key=str.lower) if not is_ignored(d, ignore_dirs)]
        files = [f for f in sorted(files, key=str.lower) if not is_ignored(f, ignore_files)]
        generate_index_for_folder(root, dirs, files, config)

✅ Example Usage
Create a default .indexgen.json config:
python generate_index.py --init-config


Then modify the file as needed.

Run using config:
python generate_index.py

Override config values with CLI:
python generate_index.py --base docs --ignore-files *.tmp temp*

🧪 Sample .indexgen.json
{
  "base": ["community", "department"],
  "ignore_files": ["index.html", "*.log", "temp*"],
  "ignore_dirs": ["__pycache__", ".git", "temp*"],
  "css": "/component/css/pyc.css",
  "extra_css": "/component/css/py.css",
  "extra_js": "/component/js/theme.js",
  "favicon": "/image/logo.png",
  "output": "index.html"
}

✅ Summary of New Capabilities
Feature	Syntax	Example
Wildcard ignore patterns	fnmatch-style (*, ?)	"temp*" ignores temp123
Config initialization	--init-config	Creates .indexgen.json
Config override	CLI flags override config	--css /alt.css


4:58 PM 8/20/2025

the script already supports reading custom metadata from files like meta.json, README.md, or README.txt — but here's how to use them effectively in your folders so the generated index.html pages show:

Custom <title>

Custom <h1>

Custom description paragraph

Custom breadcrumb names

✅ Supported Metadata Files (in order of precedence)

When generating the index for a folder, the script looks for these files (in order):

meta.json ✅

README.md ✅

README.txt ✅

If none are present, it falls back to using the folder name.

✅ Format Options
🔹 Option 1: meta.json (recommended)

Put this file in your folder (e.g. community/biology/meta.json):

{
  "title": "Department of Biology",
  "description": "Explore biology courses, labs, and research projects.",
  "tags": ["science", "biology", "academics"],
  "owner": "Dr. Jane Smith"
}


title → Becomes <title>, <h1>, and breadcrumb name.

description → Shown under the <h1>.

Extra fields like tags and owner can be used later if you extend the template.

🔹 Option 2: README.md (basic Markdown)

Create a README.md like this:

# Department of Chemistry

Explore our courses, faculty, and lab research in organic and inorganic chemistry.

Owner: Dr. Alan Green
Tags: science, chemistry


The first # line becomes the title.

The first paragraph becomes the description.

Key-value pairs (e.g. Owner: ...) are also parsed.

🔹 Option 3: README.txt (plain text)

Same as above, just in plain text format. Use this style:

Title: Department of History
Description: Explore courses in ancient, medieval, and modern history.
Tags: humanities, history

🔎 Where the Data Is Used
Metadata Field	Used In
title	<title>, <h1>, breadcrumb
description	Intro paragraph below <h1>
other fields (tags, etc.)	Currently unused, but available in meta dict
🧪 Example Folder Structure
community/
├── biology/
│   ├── meta.json
│   └── syllabus.pdf
├── chemistry/
│   ├── README.md
│   └── lab-rules.pdf


Each folder will get a unique index.html with the correct heading/title.

💡 Pro Tip

You can create a template file to copy into folders:

cat > community/template-meta.json <<EOF
{
  "title": "Department Title Here",
  "description": "Write a short description of this department."
}
EOF


Then rename and fill in as needed per department.

✅ Goals

Auto-generate placeholder meta.json in all subfolders.

Extend the index HTML template to display extra metadata like:

owner

tags

any other custom fields from meta.json or README.txt/md

🧰 Part 1: Auto-generate meta.json in All Subfolders
🔹 Add a New CLI Flag
--init-meta


This will scan --base directories and create a meta.json in each subfolder if it doesn’t already exist.

🧩 Step-by-Step Code
🔸 1. Add flag to argparse:
parser.add_argument("--init-meta", action="store_true", help="Generate meta.json in all folders under base.")

🔸 2. Define a default meta.json template:
DEFAULT_META = {
    "title": "",
    "description": "",
    "owner": "",
    "tags": []
}

🔸 3. Meta generation logic (before index generation):

Insert this before the generate_index_for_folder call:

def init_meta_files(base_dirs):
    for base in base_dirs:
        for root, dirs, _ in os.walk(base):
            for d in dirs:
                subfolder = os.path.join(root, d)
                meta_path = os.path.join(subfolder, "meta.json")
                if not os.path.exists(meta_path):
                    meta = DEFAULT_META.copy()
                    meta["title"] = d.replace("-", " ").title()
                    with open(meta_path, "w", encoding="utf-8") as f:
                        json.dump(meta, f, indent=2)
                    print(f"📝 Created placeholder: {meta_path}")


Then in main():

if args.init_meta:
    init_meta_files(args.base or [])
    return

🧰 Part 2: Extend HTML Output to Show Extra Metadata

We'll update your HTML_TEMPLATE and generate_index_for_folder() to insert custom metadata like owner, tags, etc.

🔸 1. Build extra metadata section

In generate_index_for_folder():

Add this after you read metadata:

# Extra metadata section
EXTRA_META_FIELDS = ("owner", "tags", "contact", "email", "phone")
meta_items = []

for key in EXTRA_META_FIELDS:
    val = meta.get(key)
    if val:
        display_key = key.replace("_", " ").capitalize()
        if isinstance(val, list):
            val = ", ".join(val)
        meta_items.append(f"<li><strong>{html.escape(display_key)}:</strong> {html.escape(str(val))}</li>")

if meta_items:
    extra_meta_html = "<section class='meta-info'><h3>Details</h3><ul>" + "\n".join(meta_items) + "</ul></section>"
else:
    extra_meta_html = ""


Then in the HTML_TEMPLATE, add this just before the <footer>:

{extra_meta}


Update your .format(...) call to include:

extra_meta=extra_meta_html,

✅ Final Output Example
Folder: community/biology/
meta.json:
{
  "title": "Department of Biology",
  "description": "Explore the natural sciences, from cells to ecosystems.",
  "owner": "Dr. Jane Smith",
  "tags": ["biology", "research", "science"]
}

📄 index.html will include:
<h1>Department of Biology</h1>
<p>Explore the natural sciences...</p>

<section class="meta-info">
  <h3>Details</h3>
  <ul>
    <li><strong>Owner:</strong> Dr. Jane Smith</li>
    <li><strong>Tags:</strong> biology, research, science</li>
  </ul>
</section>

✅ How to Use It
1. Generate placeholder metadata files:
python generate_index.py --base community --init-meta

2. Edit the meta.json files as needed.
3. Generate index pages:
python generate_index.py

8:05 PM 8/20/2025


✅ 1. Clickable Tags in meta.json
✅ 2. JSON Schema Validation for meta.json
🔧 Summary of What You’ll Get
Feature	Description
✅ Clickable tags	["biology", "research"] become links (e.g. ?tag=biology)
✅ Schema validation	Warns if meta.json is missing required fields or has bad types
🧩 Step-by-Step Changes
✅ 1. Clickable Tags (HTML output)
🔸 Update this section in generate_index_for_folder():

Replace this:

if isinstance(val, list):
    val = ", ".join(val)


With this:

if isinstance(val, list):
    if key == "tags":
        val = ", ".join(f'<a href="?tag={html.escape(tag)}">{html.escape(tag)}</a>' for tag in val)
    else:
        val = ", ".join(html.escape(str(v)) for v in val)


Tags like:

"tags": ["biology", "research"]


Will render as:

Tags: <a href="?tag=biology">biology</a>, <a href="?tag=research">research</a>

✅ 2. JSON Schema Validation
🔸 Add dependency (if not installed):
pip install jsonschema

🔸 Import:
from jsonschema import validate, ValidationError

🔸 Add schema (near top of script):
META_SCHEMA = {
    "type": "object",
    "properties": {
        "title": {"type": "string"},
        "description": {"type": "string"},
        "owner": {"type": "string"},
        "tags": {
            "type": "array",
            "items": {"type": "string"}
        },
        "contact": {"type": "string"},
        "email": {"type": "string", "format": "email"},
        "phone": {"type": "string"}
    },
    "required": ["title", "description"],
    "additionalProperties": True
}

🔸 Validate in read_folder_metadata():

Inside the if name.lower().endswith(".json"): block, add after loading data:

try:
    validate(instance=data, schema=META_SCHEMA)
except ValidationError as e:
    print(f"⚠️ Invalid meta.json in {folder_path}: {e.message}")


This will warn but not crash if validation fails.

🧪 Example Bad meta.json (will warn)
{
  "description": "Missing title",
  "tags": "biology"  // ← should be a list, will trigger warning
}


Console:

⚠️ Invalid meta.json in community/biology: 'title' is a required property

🟢 Optional: Show Warnings on Page?

If you'd like warnings shown in the HTML itself (not just console), I can help inject that too.

✅ Done! Usage Summary
Generate placeholder files:
python generate_index.py --init-meta --base community

Fill out meta.json:
{
  "title": "Department of History",
  "description": "Explore ancient to modern civilizations.",
  "owner": "Dr. Jones",
  "tags": ["history", "humanities"]
}

Generate index:
python generate_index.py

Output:

Title and <h1> = Department of History

Tags are clickable: ?tag=history, etc.

Schema issues trigger warnings
