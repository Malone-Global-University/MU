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

    su
