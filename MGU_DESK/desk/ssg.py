import os
import markdown
from pathlib import Path

LESSON_DIR = "lessons"
TEMPLATE_FILE = "templates/skeleton.html"
OUTPUT_DIR = "public"
INDEX_FILE = os.path.join(OUTPUT_DIR, "index.html")

# Load skeleton template
skeleton = Path(TEMPLATE_FILE).read_text()

# Store links for index
index_links = []

# Walk through lessons
for root, _, files in os.walk(LESSON_DIR):
    for f in files:
        if f.endswith(".md"):
            lesson_path = Path(root) / f
            subject = Path(root).name
            output_subject_dir = Path(OUTPUT_DIR) / subject
            output_subject_dir.mkdir(parents=True, exist_ok=True)

            # Read markdown
            md_text = lesson_path.read_text(encoding="utf-8")
            html_content = markdown.markdown(md_text, extensions=["fenced_code", "tables"])

            # Use first line as title
            title = md_text.splitlines()[0].replace("#", "").strip()

            # Insert into skeleton
            final_html = skeleton.replace("{{TITLE}}", title).replace("{{CONTENT}}", html_content)

            # Save file
            output_file = output_subject_dir / f.replace(".md", ".html")
            output_file.write_text(final_html, encoding="utf-8")

            # Track for index
            rel_path = f"{subject}/{f.replace('.md','.html')}"
            index_links.append(f'<li><a href="{rel_path}">{title}</a></li>')

# Build index page
index_html = f"""
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lesson Index</title>
  <link rel="stylesheet" href="/css/main.css">
</head>
<body>
  <h1>📚 Lesson Index</h1>
  <ul>
    {''.join(index_links)}
  </ul>
</body>
</html>
"""
Path(INDEX_FILE).write_text(index_html, encoding="utf-8")

print("✅ Build complete! Lessons converted and index updated.")
