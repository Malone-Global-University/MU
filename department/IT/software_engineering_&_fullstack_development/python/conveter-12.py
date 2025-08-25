import os

BASE_DIRS = ["scripts", "departments", "components", "images", "MGU-DOCS"]
LOGS = ["conversion_log.txt", "README.md"]
HTML_FILE = "mgu_system_map.html"

def scan_folder(folder_path):
    """Recursively scan a folder and return nested structure as dict."""
    structure = {}
    if os.path.exists(folder_path):
        for item in sorted(os.listdir(folder_path)):
            full_path = os.path.join(folder_path, item)
            if os.path.isdir(full_path):
                structure[item] = scan_folder(full_path)
            else:
                structure[item] = None
    return structure

def build_html_list(structure):
    """Recursively build HTML list with collapsible sections."""
    html = "<ul>"
    for key, value in structure.items():
        if isinstance(value, dict) and value:
            html += f"""
            <li>
                <span class="caret">{key}</span>
                {build_html_list(value)}
            </li>"""
        else:
            html += f"<li>{key}</li>"
    html += "</ul>"
    return html

# Scan folders
mgu_structure = {}
for base in BASE_DIRS:
    mgu_structure[base] = scan_folder(base)

# Add logs
mgu_structure["Logs & Summaries"] = {log: None for log in LOGS}

# HTML template with collapsible JS
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
ul {{ list-style-type: none; padding-left: 20px; display: none; }}
.caret {{
  cursor: pointer;
  user-select: none;
  font-weight: bold;
  color: #004080;
}}
.caret::before {{
  content: "\\25B6"; /* triangle */
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
{build_html_list(mgu_structure)}
</div>

<script>
// Make collapsible lists interactive
var togglers = document.getElementsByClassName("caret");
for (var i = 0; i < togglers.length; i++) {{
  togglers[i].addEventListener("click", function() {{
    this.parentElement.querySelector("ul").classList.toggle("active");
    this.classList.toggle("caret-down");
    var ul = this.parentElement.querySelector("ul");
    if (ul.style.display === "block") {{
        ul.style.display = "none";
    }} else {{
        ul.style.display = "block";
    }}
  }});
}}

// Show top-level lists by default
var topUl = document.querySelectorAll(".container > ul");
topUl.forEach(ul => ul.style.display = "block");
</script>
</body>
</html>
"""

# Write HTML file
with open(HTML_FILE, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Interactive MGU system map generated: {HTML_FILE}")