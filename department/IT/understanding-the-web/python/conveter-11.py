import os

BASE_DIRS = ["scripts", "departments", "components", "images", "MGU-DOCS"]
LOGS = ["conversion_log.txt", "README.md"]  # For per-department summaries

HTML_FILE = "mgu_system_map.html"

def scan_folder(folder_path):
    """Recursively scan a folder and return nested structure as dict."""
    structure = {}
    if os.path.exists(folder_path):
        for item in os.listdir(folder_path):
            full_path = os.path.join(folder_path, item)
            if os.path.isdir(full_path):
                structure[item] = scan_folder(full_path)
            else:
                structure[item] = None
    return structure

def build_html_list(structure):
    """Recursively build HTML <ul> list from folder structure dictionary."""
    html = "<ul>"
    for key, value in structure.items():
        html += f"<li>{key}"
        if isinstance(value, dict) and value:
            html += build_html_list(value)
        html += "</li>"
    html += "</ul>"
    return html

# Scan all base directories
mgu_structure = {}
for base in BASE_DIRS:
    mgu_structure[base] = scan_folder(base)

# Add logs separately
mgu_structure["Logs & Summaries"] = {log: None for log in LOGS}

# Generate HTML
html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>MGU Content System Map</title>
<style>
body {{ font-family: Arial, sans-serif; background-color: #f5f5f5; }}
.container {{ max-width: 1000px; margin: auto; padding: 20px; }}
h1 {{ text-align: center; color: #002147; }}
ul {{ list-style-type: none; padding-left: 20px; }}
li {{ margin: 5px 0; }}
li > ul {{ padding-left: 20px; }}
</style>
</head>
<body>
<div class="container">
<h1>MGU Content System Map</h1>
{build_html_list(mgu_structure)}
</div>
</body>
</html>
"""

# Write HTML file
with open(HTML_FILE, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Dynamic MGU system map generated: {HTML_FILE}")
