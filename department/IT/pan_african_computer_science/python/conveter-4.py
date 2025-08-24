import os
import re

# ==== Basic Markdown → HTML function ====
def md_to_html(markdown_text):
    html = markdown_text

    # Headings
    html = re.sub(r"^# (.*)", r"<h1>\1</h1>", html, flags=re.MULTILINE)
    html = re.sub(r"^## (.*)", r"<h2>\1</h2>", html, flags=re.MULTILINE)

    # Bold and Italics
    html = re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", html)
    html = re.sub(r"\*(.*?)\*", r"<em>\1</em>", html)

    # Links
    html = re.sub(r"\[(.*?)\]\((.*?)\)", r"<a href='\2'>\1</a>", html)

    return html


# ==== Convert single file ====
def convert_markdown_file(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    body_html = md_to_html(md_text)

    # Wrap in minimal HTML structure
    full_html = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>{os.path.basename(md_path)}</title>
</head>
<body>
{body_html}
</body>
</html>"""

    # Save alongside source
    html_path = os.path.splitext(md_path)[0] + ".html"
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(full_html)

    print(f"Converted: {md_path} → {html_path}")


# ==== Recursive conversion (includes subfolders) ====
def convert_all_markdown_recursive(base_dir="departments"):
    for root, _, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".md"):
                convert_markdown_file(os.path.join(root, file))


# ==== Single-folder conversion (no subfolders) ====
def convert_all_markdown_single(base_dir="departments"):
    for file in os.listdir(base_dir):
        if file.endswith(".md"):
            convert_markdown_file(os.path.join(base_dir, file))


# ==== Main entry point ====
if __name__ == "__main__":
    # Default: recursive conversion of all .md files in "departments"
    convert_all_markdown_recursive("departments")

    # Example usage for single-folder conversion:
    # convert_all_markdown_single("departments/law")
