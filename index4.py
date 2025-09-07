#!/usr/bin/env python3
"""
Unified Index Generator
- Walks community/, library/, and department/ roots
- Generates index.html for each folder
- Uses metadata from meta.json / README
- Rich template: head, CSS, header, navbar, footer, JS, metadata
"""

import os
import json
import html
from datetime import datetime
from pathlib import Path

# ------------- Configuration -------------
ROOTS = ["community", "library", "department"]   # all bases to walk
CSS_PATH = "/component/css/pyc.css"
FAVICON_PATH = "/image/logo.png"
EXTRA_CSS = "/component/css/py.css"
EXTRA_JS = "/component/js/theme.js"
OUTPUT_FILENAME = "index.html"
README_NAMES = ("meta.json", "README.md", "README.txt")
# -----------------------------------------

ICON_MAP = {
    ".md": "📄", ".odt": "📝",".txt": "📝", ".pdf": "📚",
    ".csv": "📊", ".xls": "📊", ".xlsx": "📊",
    ".png": "🖼️", ".jpg": "🖼️", ".jpeg": "🖼️", ".gif": "🖼️", ".svg": "🖼️",
    ".zip": "🗜️", ".tar": "🗜️", ".gz": "🗜️",
    ".mp4": "🎞️", ".mp3": "🎧",
    ".py": "🐍", ".js": "🧩", ".css": "🎨", ".html": "🌐",
}

def file_icon(filename: str) -> str:
    return ICON_MAP.get(Path(filename).suffix.lower(), "📁")

def read_folder_metadata(folder_path: str):
    """Look for meta.json first, then README.md/txt. Return dict of metadata."""
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
                        # header as title
                        for ln in lines:
                            if ln.startswith("#"):
                                title = ln.lstrip("# ").strip()
                                break
                        # description from first paragraph
                        paragraphs = [p.strip() for p in text.split("\n\n") if p.strip()]
                        if paragraphs:
                            description = paragraphs[1] if title and paragraphs[0].startswith(title) else paragraphs[0]
                        # key: value parsing
                        for ln in lines:
                            if ":" in ln:
                                k, v = ln.split(":", 1)
                                kv[k.strip().lower()] = v.strip()
                        if "title" in kv: title = kv["title"]
                        if "description" in kv: description = kv["description"]
                        if "tags" in kv:
                            kv["tags"] = [t.strip() for t in kv["tags"].split(",")]
                        return {"title": title, "description": description, **kv}
            except Exception:
                continue
    return {}

def make_breadcrumb(root_path: str, base_root: str):
    rel = os.path.relpath(root_path, base_root)
    if rel == ".":
        return f'<nav class="breadcrumb"><a href="/index.html">Home</a> › {base_root.title()}</nav>'
    parts = rel.split(os.sep)
    crumbs = [f'<a href="/index.html">Home</a>', f'<a href="/{base_root}/index.html">{base_root.title()}</a>']
    cumulative = base_root
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
  <meta name="description" content="{meta_description}">
  <meta name="author" content="{meta_author}">
  <meta name="keywords" content="{meta_keywords}">
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
    <nav class="top-links">
      <a href="/department/index.html">Departments</a> |
      <a href="/library/index.html">Library</a> |
      <a href="/community/index.html">Community</a>
    </nav>
    <div class="nav-actions">
      <button id="theme-toggle" title="Toggle theme">💻</button>
    </div>
  </header>

  <main id="main-content">
    {breadcrumb}
    <div class="hero">
      {thumbnail_html}
      <h1>{h1}</h1>
      <p>{hero_p}</p>
      {tags_html}
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
  <script>
    (function() {{
      const input = document.getElementById('file-search');
      const fileList = document.getElementById('file-list');
      const tags = document.querySelectorAll('.tag');
      function applyFilter(q) {{
        const items = fileList.querySelectorAll('li[data-fname]');
        items.forEach(li => {{
          const name = li.getAttribute('data-fname').toLowerCase();
          const ftype = li.getAttribute('data-ftype').toLowerCase();
          const show = !q || name.includes(q) || ftype.includes(q);
          li.style.display = show ? '' : 'none';
        }});
      }}
      if(input) {{
        input.addEventListener('input', function() {{
          applyFilter(this.value.toLowerCase().trim());
        }});
      }}
      tags.forEach(tag => {{
        tag.addEventListener('click', () => {{
          const active = tag.classList.contains('active');
          tags.forEach(t => t.classList.remove('active'));
          if (!active) {{
            tag.classList.add('active');
            const q = tag.textContent.toLowerCase().trim();
            applyFilter(q);
            if(input) input.value = q;
          }} else {{
            applyFilter('');
            if(input) input.value = '';
          }}
        }});
      }});
    }})();
  </script>
</body>
</html>
"""

def generate_index_for_folder(root, dirs, files, base_root):
    meta = read_folder_metadata(root)
    folder_basename = os.path.basename(root) or root
    title = meta.get("title") or folder_basename.replace("-", " ").title()
    hero_p = meta.get("description") or f"Index of {title}."

    thumbnail_html = f'<img src="{html.escape(meta["thumbnail"])}" alt="{title} thumbnail" class="hero-thumb">' if "thumbnail" in meta else ""
    tags_html = ""
    if "tags" in meta and isinstance(meta["tags"], list):
        tags_html = '<div class="tags">' + " ".join(
            f'<span class="tag">{html.escape(tag)}</span>' for tag in meta["tags"]
        ) + "</div>"

    sub_html = "<ul>\n" + "\n".join(f'  <li><a href="{d}/{OUTPUT_FILENAME}">{d.replace("-", " ").title()}</a></li>' for d in sorted(dirs, key=str.lower)) + "\n</ul>" if dirs else "<p>No subfolders.</p>"

    file_items = [
        f'<li data-fname="{f}" data-ftype="{Path(f).suffix.lstrip(".").lower()}">{file_icon(f)} <a href="{f}">{f}</a></li>'
        for f in sorted(files, key=str.lower) if f != OUTPUT_FILENAME
    ]
    files_html = "<ul>\n" + "\n".join("  " + it for it in file_items) + "\n</ul>" if file_items else "<p>No files.</p>"

    breadcrumb = make_breadcrumb(root, base_root)
    now = datetime.utcnow().strftime("%Y-%m-%d %H:%M (UTC)")

    footer_meta = ""
    if "author" in meta: footer_meta += f"<p>Author: {html.escape(meta['author'])}</p>"
    if "updated" in meta: footer_meta += f"<p>Updated (declared): {html.escape(meta['updated'])}</p>"

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
        tags_html=tags_html,
        subfolders_links=sub_html,
        file_links=files_html,
        year=datetime.utcnow().year,
        updated=now,
        footer_meta=footer_meta,
        meta_description=html.escape(hero_p),
        meta_author=html.escape(meta.get("author","")),
        meta_keywords=",".join(meta.get("tags", []))
    )

    index_path = os.path.join(root, OUTPUT_FILENAME)
    with open(index_path, "w", encoding="utf-8") as fh:
        fh.write(rendered)
    print(f"Created {index_path}")

def main():
    for base_root in ROOTS:
        for root, dirs, files in os.walk(base_root):
            dirs[:] = sorted(dirs, key=str.lower)
            files = sorted(files, key=str.lower)
            generate_index_for_folder(root, dirs, files, base_root)

if __name__ == "__main__":
    main()