# Malone University Departments Index Generator

`README.md` clearly explains the purpose, features, usage, and differences between **v1** and **v2**.  


This repository contains two Python scripts (`v1.py` and `v2.py`) for automatically generating `index.html` files
in the `departments` folder and all of its subfolders. These scripts are designed for prototyping and building a
navigable structure for the Malone University website.

---

## Version 1 (v1.py)

**Purpose:**  
Creates an `index.html` file in every folder and subfolder of `departments` using a fixed HTML template.

**Features:**
- Recursively traverses the `departments` directory.
- Writes a standard `index.html` template in each folder.
- Prints confirmation for each created file.

**Usage:**
1. Place `v1.py` in the root of your project (next to `departments` folder).
2. Run the script:

```bash
python v1.py

index.html will be generated in all folders and subfolders.

Notes:

All index.html files are identical.

No dynamic folder naming or customization is applied.

Version 2 (v2.py)

Purpose:
Improves upon v1 by dynamically customizing the <title> and <h1> in each index.html based on the folder name.

Features:

Recursively traverses the departments directory.

Writes a customized index.html template in each folder.

Automatically sets:

<title> as "Folder Name - Malone University"

Hero <h1> as the folder name.

Prints confirmation for each created file.

Capitalizes folder names and replaces dashes with spaces for readability.

Usage:

Place v2.py in the root of your project (next to departments folder).

Run the script:

python v2.py


Each index.html now reflects the folder name in the page title and hero heading.

Notes:

Ideal for making department pages individually identifiable.

Supports nested subfolders automatically.

Recommended Workflow

Use v1.py if you need a quick prototype with identical pages.

Use v2.py when you want unique titles and headings for each folder.

Both scripts are fully compatible with your existing Malone University HTML/CSS theme and are ready to run in any standard Python 3 environment.

Author: Joe Malone
Date: 08/16/2025




✅ What changed:

folder_name is extracted from each folder’s name.

<title> becomes "Folder Name - Malone University".

<h1> in the hero section becomes the folder name.

Spaces and capitalization are fixed automatically.