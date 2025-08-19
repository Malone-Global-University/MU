import os
import markdown
from pathlib import Path

LESSON_DIR = "lessons"
TEMPLATE_FILE = "templates/skeleton.html"
OUTPUT_DIR = "public"
INDEX_FILE = os.path.join(OUTPUT_DIR, "index.html")

# Load skeleton template
skeleton = Path(TEMPLATE_FILE).read_text()

# Dictionary to group lessons by subject
subjects = {}

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

            # Track lesson under its subject
            rel_path = f"{subject}/{f.replace('.md','.html')}"
            subjects.setdefault(subject, []).append((title, rel_path))

# Build hierarchical index
subject_sections = []
for subject, lessons in sorted(subjects.items()):
    lesson_links = "".join(f'<li><a href="{path}">{title}</a></li>' for title, path in lessons)
    section = f"""
    <details>
      <summary>{subject.title()}</summary>
      <ul>{lesson_links}</ul>
    </details>
    """
    subject_sections.append(section)

index_html = f"""
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Lesson Index</title>
  <link rel="stylesheet" href="/css/main.css">
  <style>
    body {{ font-family: Arial, sans-serif; padding: 20px; }}
    h1 {{ text-align: center; }}
    details {{ margin-bottom: 10px; }}
    summary {{ font-weight: bold; cursor: pointer; }}
    ul {{ margin-left: 20px; }}
  </style>
</head>
<body>
  <h1>📚 Lesson Index</h1>
  {"".join(subject_sections)}
</body>
</html>
"""
Path(INDEX_FILE).write_text(index_html, encoding="utf-8")

print("✅ Build complete! Lessons converted and index updated (hierarchical).")
