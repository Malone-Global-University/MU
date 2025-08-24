import os
import re

# ==== TEMPLATE ====
HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{title}</title>
  <link rel="stylesheet" href="/components/css/style.css">
</head>
<body>
  <header>
    <h1>{title}</h1>
  </header>
  <main>
    {content}
  </main>
  <footer>
    <p>&copy; 2025 Malone Global University</p>
  </footer>
</body>
</html>
"""

# ==== BASIC MARKDOWN RULES ====
def md_to_html(markdown_text):
    html = markdown_text

    # Headings
    html = re.sub(r"^###### (.*)", r"<h6>\1</h6>", html, flags=re.MULTILINE)
    html = re.sub(r"^##### (.*)", r"<h5>\1</h5>", html, flags=re.MULTILINE)
    html = re.sub(r"^#### (.*)", r"<h4>\1</h4>", html, flags=re.MULTILINE)
    html = re.sub(r"^### (.*)", r"<h3>\1</h3>", html, flags=re.MULTILINE)
    html = re.sub(r"^## (.*)", r"<h2>\1</h2>", html, flags=re.MULTILINE)
    html = re.sub(r"^# (.*)", r"<h1>\1</h1>", html, flags=re.MULTILINE)

    # Bold / Italics
    html = re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", html)
    html = re.sub(r"\*(.*?)\*", r"<em>\1</em>", html)

    # Links
    html = re.sub(r"\[(.*?)\]\((.*?)\)", r"<a href='\2'>\1</a>", html)

    # Unordered lists
    html = re.sub(r"^\s*-\s+(.*)", r"<li>\1</li>", html, flags=re.MULTILINE)
    html = re.sub(r"(<li>.*</li>\n?)+", lambda m: "<ul>\n" + m.group(0) + "</ul>", html, flags=re.MULTILINE)

    # Paragraphs (wrap text lines not already inside tags)
    html = re.sub(r"^(?!<h\d>|<ul>|<li>|<strong>|<em>|<a|<p>|</ul>|</li>)(.+)$", r"<p>\1</p>", html, flags=re.MULTILINE)

    return html


# ==== CONVERSION FUNCTION ====
def convert_markdown_file(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    # Use first heading as title, fallback = filename
    first_heading = re.search(r"^# (.*)", md_text, re.MULTILINE)
    title = first_heading.group(1) if first_heading else os.path.splitext(os.path.basename(md_path))[0]

    # Convert markdown to HTML
    body_html = md_to_html(md_text)

    # Wrap with template
    full_html = HTML_TEMPLATE.format(title=title, content=body_html)

    # Save HTML file next to markdown
    html_path = os.path.splitext(md_path)[0] + ".html"
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(full_html)

    print(f"Converted: {md_path} → {html_path}")


# ==== WALK THROUGH DEPARTMENTS ====
def convert_all_markdown(base_dir="department"):
    for root, _, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".md"):
                convert_markdown_file(os.path.join(root, file))


if __name__ == "__main__":
    convert_all_markdown()