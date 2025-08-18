import os

HTML_FILE = "mgu_system_map.html"

# Define the structure of the MGU system
mgu_structure = {
    "scripts": ["md_to_html_v1.0.py", "md_to_html_v1.1.py", "md_to_html_v2.0.py", "README.md"],
    "departments": ["law", "science", "math"],
    "components": ["css/", "js/"],
    "images": ["lesson images"],
    "MGU-DOCS": ["journals", "black papers"],
    "logs": ["conversion_log.txt", "per-department summaries in README.md"]
}

# HTML template
html_content = f"""
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>MGU Content System Map</title>
<style>
body {{ font-family: Arial, sans-serif; background-color: #f5f5f5; }}
.container {{ max-width: 900px; margin: auto; padding: 20px; }}
h1 {{ text-align: center; color: #002147; }}
ul {{ list-style-type: none; padding-left: 20px; }}
li {{ margin: 5px 0; }}
.department {{ color: #004080; font-weight: bold; }}
.script {{ color: #0066cc; }}
.component {{ color: #0099cc; }}
.images {{ color: #cc6600; }}
.docs {{ color: #660099; }}
.logs {{ color: #990000; font-style: italic; }}
</style>
</head>
<body>
<div class="container">
<h1>MGU Content System Map</h1>
<ul>
    <li class="script">Scripts
        <ul>
            {''.join(f'<li>{item}</li>' for item in mgu_structure["scripts"])}
        </ul>
    </li>
    <li class="department">Departments
        <ul>
            {''.join(f'<li>{item}</li>' for item in mgu_structure["departments"])}
        </ul>
    </li>
    <li class="component">Components
        <ul>
            {''.join(f'<li>{item}</li>' for item in mgu_structure["components"])}
        </ul>
    </li>
    <li class="images">Images
        <ul>
            {''.join(f'<li>{item}</li>' for item in mgu_structure["images"])}
        </ul>
    </li>
    <li class="docs">MGU-DOCS
        <ul>
            {''.join(f'<li>{item}</li>' for item in mgu_structure["MGU-DOCS"])}
        </ul>
    </li>
    <li class="logs">Logs & Summaries
        <ul>
            {''.join(f'<li>{item}</li>' for item in mgu_structure["logs"])}
        </ul>
    </li>
</ul>
</div>
</body>
</html>
"""

# Write HTML file
with open(HTML_FILE, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"MGU system map generated: {HTML_FILE}")
