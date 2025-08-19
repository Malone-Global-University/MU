import os
from datetime import datetime, timedelta

BASE_DIRS = ["scripts", "departments", "components", "images", "MGU-DOCS"]
LOGS = ["conversion_log.txt", "README.md"]
HTML_FILE = "mgu_system_map.html"

RECENT_DELTA = timedelta(days=1)
now = datetime.now()

department_summary = {}  # dept -> {"total": int, "recent": int}

def scan_folder(folder_path, dept=None):
    """Recursively scan folder and return structure with file info."""
    structure = {}
    if os.path.exists(folder_path):
        for item in sorted(os.listdir(folder_path)):
            full_path = os.path.join(folder_path, item)
            if os.path.isdir(full_path):
                # If inside departments folder, set department name
                new_dept = dept
                if folder_path.startswith("departments") and dept is None:
                    new_dept = item
                    department_summary[new_dept] = {"total": 0, "recent": 0}
                structure[item] = scan_folder(full_path, new_dept)
            else:
                mtime = datetime.fromtimestamp(os.path.getmtime(full_path))
                recent = (now - mtime) <= RECENT_DELTA
                info = {"path": full_path.replace("\\", "/"), "mtime": mtime.strftime("%Y-%m-%d %H:%M:%S"), "recent": recent}

                # Update department summary if applicable
                if dept and dept in department_summary:
                    department_summary[dept]["total"] += 1
                    if recent:
                        department_summary[dept]["recent"] += 1
                structure[item] = info
    return structure

def build_html_list(structure):
    """Recursively build HTML <ul> with collapsible folders and recent highlights."""
    html = "<ul>"
    for key, value in structure.items():
        if isinstance(value, dict) and "path" in value:
            style = "background-color: yellow;" if value["recent"] else ""
            html += f'<li title="Last Modified: {value["mtime"]}" style="{style}">'
            html += f'<a href="{value["path"]}" target="_blank">{key}</a></li>'
        elif isinstance(value, dict):
            html += f"""
            <li>
                <span class="caret">{key}</span>
                {build_html_list(value)}
            </li>"""
        else:
            html += f"<li>{key}</li>"
    html += "</ul>"
    return html

# Scan base directories
mgu_structure = {}
for base in BASE_DIRS:
    mgu_structure[base] = scan_folder(base)

# Add logs
log_info = {log: {"path": log, "mtime": now.strftime("%Y-%m-%d %H:%M:%S"), "recent": True} for log in LOGS}
mgu_structure["Logs & Summaries"] = log_info

# Build department dashboard
dashboard_html = "<h2>Department Summary</h2><ul>"
for dept, data in department_summary.items():
    dashboard_html += f"<li>{dept}: {data['total']} files, {data['recent']} recently updated</li>"
dashboard_html += "</ul>"

# HTML template
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
h2 {{ color: #004080; }}
ul {{ list-style-type: none; padding-left: 20px; display: none; }}
li {{ margin: 5px 0; }}
li > ul {{ padding-left: 20px; }}
a {{ text-decoration: none; color: #0066cc; }}
a:hover {{ text-decoration: underline; }}
.caret {{
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  color: #004080;
}}
.caret::before {{
  content: "\\25B6"; 
  color: #004080;
  display: inline-block;
  margin-right: 6px;
}}
.caret-down::before {{
  transform: rotate(90deg);
}}
</style>
</head>
<body>
<div class="container">
<h1>MGU Content System Map</h1>
{dashboard_html}
{build_html_list(mgu_structure)}
</div>

<script>
// Collapsible folders
var togglers = document.getElementsByClassName("caret");
for (var i = 0; i < togglers.length; i++) {{
  togglers[i].addEventListener("click", function() {{
    this.parentElement.querySelector("ul").classList.toggle("active");
    this.classList.toggle("caret-down");
    var ul = this.parentElement.querySelector("ul");
    ul.style.display = (ul.style.display === "block") ? "none" : "block";
  }});
}}

// Show top-level lists by default
var topUl = document.querySelectorAll(".container > ul");
topUl.forEach(ul => ul.style.display = "block");
</script>
</body>
</html>
"""

# Write HTML
with open(HTML_FILE, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Interactive MGU system map with dashboard generated: {HTML_FILE}")