import os
import re
from datetime import datetime
from collections import defaultdict

LOG_FILE = "conversion_log.txt"
README_FILE = "README.md"

# Global counters
conversion_count = 0
department_counts = defaultdict(int)  # Tracks conversions per department

def log_conversion(md_path, html_path):
    """Append a timestamped entry to the conversion log and update counters."""
    global conversion_count
    # Determine department based on folder structure
    parts = md_path.replace("\\", "/").split("/")
    department = parts[1] if len(parts) > 1 else "unknown"
    department_counts[department] += 1

    with open(LOG_FILE, "a", encoding="utf-8") as log:
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log.write(f"[{timestamp}] {md_path} → {html_path}\n")
    conversion_count += 1

def md_to_html(markdown_text):
    html = markdown_text
    html = re.sub(r"^# (.*)", r"<h1>\1</h1>", html, flags=re.MULTILINE)
    html = re.sub(r"^## (.*)", r"<h2>\1</h2>", html, flags=re.MULTILINE)
    html = re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", html)
    html = re.sub(r"\*(.*?)\*", r"<em>\1</em>", html)
    html = re.sub(r"\[(.*?)\]\((.*?)\)", r"<a href='\2'>\1</a>", html)
    return html

def convert_markdown_file(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()

    body_html = md_to_html(md_text)

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

    html_path = os.path.splitext(md_path)[0] + ".html"
    with open(html_path, "w", encoding="utf-8") as f:
        f.write(full_html)

    print(f"Converted: {md_path} → {html_path}")
    log_conversion(md_path, html_path)

def convert_all_markdown_recursive(base_dir="departments"):
    for root, _, files in os.walk(base_dir):
        for file in files:
            if file.endswith(".md"):
                convert_markdown_file(os.path.join(root, file))

def convert_all_markdown_single(base_dir="departments"):
    for file in os.listdir(base_dir):
        if file.endswith(".md"):
            convert_markdown_file(os.path.join(base_dir, file))

def update_readme_summary():
    """Update README.md with total and per-department conversion summary."""
    global conversion_count, department_counts
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    # Build summary string
    summary_lines = [f"**Conversion Summary ({timestamp}): {conversion_count} files converted**"]
    for dept, count in department_counts.items():
        summary_lines.append(f"- {dept}: {count} files")

    summary_text = "\n".join(summary_lines) + "\n\n"

    # Append to README
    if os.path.exists(README_FILE):
        with open(README_FILE, "a", encoding="utf-8") as readme:
            readme.write(summary_text)
    else:
        with open(README_FILE, "w", encoding="utf-8") as readme:
            readme.write(summary_text)

    print(f"README updated with per-department conversion summary.")

if __name__ == "__main__":
    # Default: recursive conversion
    convert_all_markdown_recursive("departments")
    
    # Update README with total and per-department summary
    update_readme_summary()