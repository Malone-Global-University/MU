import os
import json
import html
from datetime import datetime
from pathlib import Path

# ------------- Configuration -------------
BASE_DIR = "department"                         # root to walk
CSS_PATH = "/component/css/main.css"             # main css for generated pages
FAVICON_PATH = "/image/logo.png"                # favicon / logo path used in templates
EXTRA_CSS = "/component/css/py.css"             # optional extra css
EXTRA_JS = "/component/js/theme.js"             # optional theme/nav JS (deploy separately)
OUTPUT_FILENAME = "index.html"
README_NAMES = ("meta.json", "README.md", "README.txt")  # precedence
# -----------------------------------------

# simple icon map by extension
ICON_MAP = {
    ".md": "📄",
    ".txt": "📝",
    ".odt": "📝",
    ".pdf": "📚",
    ".csv": "📊",
    ".xls": "📊",
    ".xlsx": "📊",
    ".png": "🖼️",
    ".jpg": "🖼️",
    ".jpeg": "🖼️",
    ".gif": "🖼️",
    ".svg": "🖼️",
    ".zip": "🗜️",
    ".tar": "🗜️",
    ".gz": "🗜️",
    ".mp4": "🎞️",
    ".mp3": "🎧",
    ".py": "🐍",
    ".js": "🧩",
    ".css": "🎨",
    ".html": "🌐",
}

def file_icon(filename: str) -> str:
    ext = Path(filename).suffix.lower()
    return ICON_MAP.get(ext, "📁")

def read_folder_metadata(folder_path: str):
    """
    Look for meta.json first, then README.md or README.txt.
    Returns dict with keys: title, description and optional meta fields.
    """
    # try meta.json
    for name in README_NAMES:
        path = os.path.join(folder_path, name)
        if os.path.isfile(path):
            try:
                if name.lower().endswith(".json"):
                    with open(path, "r", encoding="utf-8") as fh:
                        data = json.load(fh)
                        title = data.get("title") or data.get("name")
                        desc  = data.get("description") or data.get("desc") or data.get("summary")
                        return {"title": title, "description": desc, **{k:v for k,v in data.items() if k not in ("title","description","name","desc","summary")}}
                else:
                    # parse simple markdown/plain readme:
                    with open(path, "r", encoding="utf-8") as fh:
                        text = fh.read().strip()
                        if not text:
                            break
                        # naive md parsing: first '# ' line as title, first paragraph as desc, then key: value lines
                        lines = [ln.rstrip() for ln in text.splitlines()]
                        title = None
                        description = None
                        # find header
                        for ln in lines:
                            if ln.startswith("#"):
                                title = ln.lstrip("# ").strip()
                                break
                        # find first non-empty paragraph after header (or from start)
                        joined = "\n".join(lines)
                        paragraphs = [p.strip() for p in joined.split("\n\n") if p.strip()]
                        if paragraphs:
                            # if header exists, use next paragraph as desc; else first paragraph
                            if title and paragraphs[0].startswith(title):
                                description = paragraphs[1] if len(paragraphs) > 1 else None
                            else:
                                description = paragraphs[0]
                        # also look for simple 'Key: value' lines
                        kv = {}
                        for ln in lines:
                            if ":" in ln:
                                k,v = ln.split(":",1)
                                kv[k.strip().lower()] = v.strip()
                        # prefer explicit fields if present
                        if "title" in kv:
                            title = kv["title"]
                        if "description" in kv:
                            description = kv["description"]
                        return {"title": title, "description": description, **kv}
            except Exception:
                # on parse error, keep going to next candidate
                pass
    return {"title": None, "description": None}

def make_breadcrumb(root_path: str):
    """
    Build breadcrumb HTML from BASE_DIR to the current folder.
    Each segment links to its index.html (except the last).
    """
    rel = os.path.relpath(root_path, BASE_DIR)
    if rel == ".":
        # top level
        return '<nav class="breadcrumb"><a href="/index.html">Home</a> › Department</nav>'
    parts = rel.split(os.sep)
    crumbs = ['<a href="/index.html">Home</a>', '<a href="/{}/index.html">Departments</a>'.format(BASE_DIR)]
    cumulative = BASE_DIR
    for i, p in enumerate(parts):
        cumulative = os.path.join(cumulative, p)
        name = html.escape(p.replace("-", " ").title())
        href = "/" + os.path.join(cumulative, OUTPUT_FILENAME).replace(os.sep, "/")
        if i < len(parts) - 1:
            crumbs.append(f'<a href="{href}">{name}</a>')
        else:
            crumbs.append(f'{name}')
    return '<nav class="breadcrumb">' + " › ".join(crumbs) + '</nav>'

# HTML template (keeps layout minimal — CSS/JS external)
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
  <header class="navbar" role="navigation" aria-label="Main">
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

  <main id="main-content" role="main">
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
      <input id="file-search" placeholder="Filter files (type, name)..." aria-label="Filter files">
      <div id="file-list">{file_links}</div>
    </section>
  </main>

  <footer>
    <p>© {year} Malone University. Generated {updated}.</p>
  </footer>

  <script src="{extra_js}"></script>
  <script>
    // small client-side search/filter for files
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
          const show = !q || name.includes(q) || ftype.includes(q);
          li.style.display = show ? '' : 'none';
        }});
      }});
    }})();
  </script>
</body>
</html>
"""

def generate_index_for_folder(root, dirs, files):
    # read metadata
    meta = read_folder_metadata(root)
    folder_basename = os.path.basename(root) or root
    title = meta.get("title") or folder_basename.replace("-", " ").title()
    hero_p = meta.get("description") or f"Index of {title}."

    # subfolders list
    if dirs:
        sub_html = "<ul>\n"
        for d in sorted(dirs, key=str.lower):
            name = html.escape(d.replace("-", " ").title())
            link = f'{d}/{OUTPUT_FILENAME}'
            sub_html += f'  <li><a href="{html.escape(link)}">{name}</a></li>\n'
        sub_html += "</ul>"
    else:
        sub_html = "<p>No subfolders.</p>"

    # files list (exclude the output index if present)
    file_items = []
    for f in sorted(files, key=str.lower):
        if f == OUTPUT_FILENAME:
            continue
        safe_name = html.escape(f)
        icon = file_icon(f)
        ext = Path(f).suffix.lstrip(".").lower()
        file_items.append(f'<li data-fname="{safe_name}" data-ftype="{ext}">{icon} <a href="{html.escape(f)}">{safe_name}</a></li>')

    if file_items:
        files_html = "<ul>\n" + "\n".join("  " + it for it in file_items) + "\n</ul>"
    else:
        files_html = "<p>No files in this folder.</p>"

    breadcrumb = make_breadcrumb(root)
    now = datetime.utcnow().strftime("%Y-%m-%d %H:%M (UTC)")

    rendered = HTML_TEMPLATE.format(
        title=f"{title} - Malone University",
        favicon=FAVICON_PATH,
        css_path=CSS_PATH,
        extra_css_link=f'<link rel="stylesheet" href="{EXTRA_CSS}">' if EXTRA_CSS else "",
        extra_js=f'{EXTRA_JS}' if EXTRA_JS else "",
        breadcrumb=breadcrumb,
        h1=html.escape(title),
        hero_p=html.escape(hero_p),
        subfolders_links=sub_html,
        file_links=files_html,
        year=datetime.utcnow().year,
        updated=now
    )

    index_path = os.path.join(root, OUTPUT_FILENAME)
    with open(index_path, "w", encoding="utf-8") as fh:
        fh.write(rendered)
    print(f"Created {index_path}")

def main():
    for root, dirs, files in os.walk(BASE_DIR):
        # ensure deterministic order and no unintended hidden files interference
        dirs[:] = sorted(dirs, key=str.lower)
        files = sorted(files, key=str.lower)

        # create index for each folder
        generate_index_for_folder(root, dirs, files)

if __name__ == "__main__":
    main()
