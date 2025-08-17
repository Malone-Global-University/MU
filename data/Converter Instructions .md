📘 Instructions: Setting Up and Running the MGU Map System
1. Install Requirements

Before using the system, make sure you have:

Python 3.9+ installed (download from python.org)

The following Python libraries:

pip install markdown watchdog


(markdown → converts Markdown → HTML,
watchdog → watches files for changes and triggers auto-update)

2. Save the Script

Open any text editor (Notepad, VS Code, Sublime, etc.).

Copy the raw code for generate_mgu_map_final.py.

Save it into your MGU root folder, for example:

C:\mgu\generate_mgu_map_final.py


✅ Make sure the file ends in .py (not .txt).

3. Organize Your Content

Inside your C:\mgu\ folder, make sure your departments are structured like this:

C:\mgu
│   generate_mgu_map_final.py
│
├───departments
│   ├───law
│   │      intro.md
│   │      ethics.md
│   │
│   ├───political_science
│   │      democracy.md
│   │
│   ├───math
│   │      algebra.md
│   │      geometry.md
│   │
│   └───science
│          physics.md
│          chemistry.md


Each .md file will be converted and mapped into your HTML dashboard.

4. Run the System

Open a terminal / PowerShell.

Navigate to the project folder:

cd C:\mgu


Run the script:

python generate_mgu_map_final.py

5. Output Files

When the script runs:

All Markdown files are converted into HTML (.md → .html) inside the same folder.

A central map file is created:

C:\mgu\MGU_map.html


This is your interactive dashboard.
Open it in any web browser (Chrome, Firefox, Edge).

6. Auto-Update (Live Monitoring)

The script includes auto-update mode with watchdog.

If you edit or add a Markdown file in any department, the system automatically regenerates the map and HTML lessons.

The terminal will show:

[WATCHDOG] Change detected → Updating map...

7. Export to PDF

Inside the dashboard (MGU_map.html), click Download PDF to export a full offline copy of the map (with highlights, colors, and search).

✅ Quick Workflow Recap

Write lessons in Markdown (.md) inside department folders.

Run generate_mgu_map_final.py.

Open MGU_map.html in your browser to see the live, searchable dashboard.

Edit lessons anytime → system auto-updates.

Export to PDF if needed.