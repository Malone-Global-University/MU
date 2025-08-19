#!/usr/bin/env python3
"""
Index Generator — Beta 3.1
Hybrid metadata support:
- meta.json (structured)
- README.md / README.txt (fallback, narrative)
Adds optional thumbnail, author, and updated fields from metadata.
"""

import os
import json
import html
from datetime import datetime
from pathlib import Path

# ------------- Configuration -------------
BASE_DIR = "departments"
CSS_PATH = "/components/css/pyc.css"
FAVICON_PATH = "/images/logo.png"
EXTRA_CSS = "/components/css/py.css"
EXTRA_JS = "/components/js/theme.js"
OUTPUT_FILENAME = "index.html"
README_NAMES = ("meta.json", "README.md", "README.txt")  # priority order
# -----------------------------------------

ICON_MAP = {
    ".md": "📄", ".txt": "📝", ".pdf": "📚",
    ".csv": "📊", ".xls": "📊", ".xlsx": "📊",
    ".png": "🖼️", ".jpg": "🖼️", ".jpeg": "🖼️", ".gif": "🖼️", ".svg": "🖼️",
    ".zip": "🗜️", ".tar": "🗜️", ".gz": "🗜️",
    ".mp4": "🎞️", ".mp3": "🎧",
    ".py": "🐍", ".js": "🧩", ".css": "🎨", ".html": "🌐",
}

def file_icon(filename: str) -> str:
    return ICON_MAP.get(Path(filename).suffix.lower(), "📁")

def read_folder_metadata(folder_path: str):
    """Look for meta.json first, then README.md/txt."""
    for name in README_NAMES:
        path = os.path.join(folder_path, name)
        if os.path.isfile(path):
            try:
                if name.lower().endswith(".json"):
                    with open(path, "r", encoding="utf-8") as fh:
                        return json.load(fh)
                else:
                    with open(path, "r", encoding="utf-8") as fh:
                        text = fh.read().strip()
                        if not text:
                            break
                        lines = [ln.rstrip() for ln in text.splitlines()]
                        title, description, kv = None, None, {}
                        # header = title
                        for ln in lines:
                            if ln.startswith("#"):
                                title = ln.lstrip("# ").strip()
                                break
                        # first paragraph = description
                        paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]
                        if paragraphs:
                            description = paragraphs[1] if title and paragraphs[0].startswith(title) else paragraphs[0]
                        # key: value pairs
                        for ln in lines:
                            if ":" in ln:
                                k, v = ln.split(":", 1)
                                kv[k.strip().lower()] = v.strip()
                        if "title" in kv: title = kv["title"]
                        if "description" in kv: description = kv["description"]
                        return {"title": title, "description": description, **kv}
            except Exception:
                continue
    return {}

def make_breadcrumb(root_path: str):
    rel = os.path.relpath(root_path, BASE_DIR)
    if rel == ".":
        return '<nav class="breadcrumb"><a href="/index.html">Home</a> › Departments</nav>'
    parts = rel.split(os.sep)
    crumbs = ['<a href="/index.html">Home</a>', f'<a href="/{BASE_DIR}/index.html">Departments</a>']
    cumulative = BASE_DIR
    for i, p in enumerate(parts):
        cumulative = os.path.join(cumulative, p)
        name = html.escape(p.replace("-", " ").title())
        href = "/" + os.path.join(cumulative, OUTPUT_FILENAME).replace(os.sep, "/")
        crumbs.append(f'<a href="{href}">{name}</a>' if i < len(parts) - 1 else name)
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
  <header class="navbar">
    <div class="logo-container">
      <a href="/index.html"><img src="{favicon}" alt="Malone University" class="logo-img"></a>
      <span class="school-name">Malone University</span>
    </div>
  </header>

  <main id="main-content">
    {breadcrumb}
    <div class="hero">
      {thumbnail_html}
      <h1>{h1}</h1>
      <p>{hero_p}</p>
    </div>

    <section class="listing">
      <h2>Subfolders</h2>
      {subfolders_links}
    </section>

    <section class="listing files-section">
      <h2>Files</h2>
      <input id="file-search" placeholder="Filter files..." aria-label="Filter files">
      <div id="file-list">{file_links}</div>
    </section>
  </main>

  <footer>
    <p>© {year} Malone University. Generated {updated}.</p>
    {footer_meta}
  </footer>

  <script src="{extra_js}"></script>
</body>
</html>
"""

def generate_index_for_folder(root, dirs, files):
    meta = read_folder_metadata(root)
    folder_basename = os.path.basename(root) or root
    title = meta.get("title") or folder_basename.replace("-", " ").title()
    hero_p = meta.get("description") or f"Index of {title}."

    # optional thumbnail
    thumbnail_html = f'<img src="{html.escape(meta["thumbnail"])}" alt="{title} thumbnail" class="hero-thumb">' if "thumbnail" in meta else ""

    # subfolders
    sub_html = "<ul>\n" + "\n".join(f'  <li><a href="{d}/{OUTPUT_FILENAME}">{d.replace("-", " ").title()}</a></li>' for d in sorted(dirs, key=str.lower)) + "\n</ul>" if dirs else "<p>No subfolders.</p>"

    # files
    file_items = [
        f'<li data-fname="{f}" data-ftype="{Path(f).suffix.lstrip(".").lower()}">{file_icon(f)} <a href="{f}">{f}</a></li>'
        for f in sorted(files, key=str.lower) if f != OUTPUT_FILENAME
    ]
    files_html = "<ul>\n" + "\n".join("  " + it for it in file_items) + "\n</ul>" if file_items else "<p>No files.</p>"

    breadcrumb = make_breadcrumb(root)
    now = datetime.utcnow().strftime("%Y-%m-%d %H:%M (UTC)")
    footer_meta = ""
    if "author" in meta:
        footer_meta += f"<p>Author: {html.escape(meta['author'])}</p>"
    if "updated" in meta:
        footer_meta += f"<p>Updated (declared): {html.escape(meta['updated'])}</p>"

    rendered = HTML_TEMPLATE.format(
        title=f"{title} - Malone University",
        favicon=FAVICON_PATH,
        css_path=CSS_PATH,
        extra_css_link=f'<link rel="stylesheet" href="{EXTRA_CSS}">' if EXTRA_CSS else "",
        extra_js=EXTRA_JS or "",
        breadcrumb=breadcrumb,
        thumbnail_html=thumbnail_html,
        h1=html.escape(title),
        hero_p=html.escape(hero_p),
        subfolders_links=sub_html,
        file_links=files_html,
        year=datetime.utcnow().year,
        updated=now,
        footer_meta=footer_meta
    )

    index_path = os.path.join(root, OUTPUT_FILENAME)
    with open(index_path, "w", encoding="utf-8") as fh:
        fh.write(rendered)
    print(f"Created {index_path}")

def main():
    for root, dirs, files in os.walk(BASE_DIR):
        dirs[:] = sorted(dirs, key=str.lower)
        files = sorted(files, key=str.lower)
        generate_index_for_folder(root, dirs, files)

if __name__ == "__main__":
    main()
