# White Paper: Evolution of the Markdown-to-HTML Converter

## Introduction

This white paper documents the evolution of the Markdown-to-HTML converter created for Malone Global University (MGU). The tool was designed to convert Markdown-based lesson content into HTML for deployment across the university’s website. Over the course of development, three distinct versions of the converter were produced, each building on the previous iteration with enhanced functionality. This document outlines the features of each version, their limitations, the improvements introduced in subsequent versions, and provides instructions for installation, usage, and troubleshooting.

---

## Version 1.0 — Minimal Base Script

**Release Date:** 2025-08-16
**Purpose:** Establish a stable, auditable base version.

### Features

* **Markdown to HTML conversion** for:

  * Headings (# → `<h1>`, ## → `<h2>`)
  * Bold (`**bold**` → `<strong>`)
  * Italics (`*italic*` → `<em>`)
  * Links (`[text](url)` → `<a href="url">text</a>`)
* **Two conversion modes:**

  * Recursive: processes `.md` files in a folder and all subfolders.
  * Single-folder: processes only `.md` files directly inside a folder.
* **Minimal HTML template** wrapping output.
* **Conversion log:** `conversion_log.txt` records each converted file with timestamp.

### Limitations

* Limited Markdown support (no lists, images, blockquotes, or code blocks).
* No templating or styling integration.
* Flat audit trail (only lists conversions, no summaries).

### Significance

Version 1.0 served as the **baseline** for all future versions. It was intentionally minimal, designed to remain untouched so later scripts could branch from a stable foundation.

---

## Version 2.0 — Feature Expansion

**Release Date:** Documented later in 2025-08-16
**Purpose:** Add functionality beyond the minimal base.

### New Features

* **Expanded Markdown rules:** added support for more formatting elements (e.g., lists, possibly images depending on context).
* **Improved templating system:** allowed lessons to be wrapped in a consistent global site design (integration with `style.css`).
* **Logging retained:** continued the timestamped conversion log from Version 1.0.

### Improvements Over 1.0

* Broader Markdown coverage for professional-looking lessons.
* Consistency across departments via templating.
* Maintained full auditability.

### Limitations

* Still lacked automation for navigation linking between lessons and folders.
* Conversion logs only showed individual files, not higher-level summaries.

---

## Version 3.0 — Automated Navigation & Summaries

**Release Date:** Documented in subsequent discussions
**Purpose:** Enhance automation and provide high-level audit summaries.

### New Features

* **Automatic subfolder link generation:** script created links to subfolders, simplifying navigation between department lessons.
* **Per-department conversion summaries:** tracked how many files were converted in each department.
* **README integration:** appended run summaries directly to `README.md`, creating a human-readable audit trail.
* **Dashboard-style logging:** combined `conversion_log.txt` (detailed file-level log) with summary counts for quick analysis.

### Improvements Over 2.0

* Introduced **navigation automation**, reducing manual linking effort.
* Enhanced audit trail with both detailed and summarized records.
* Improved transparency by embedding summaries into the README file.

### Limitations

* Still regex-based (not yet parser-based like advanced Markdown libraries).
* Styling, media handling, and interactivity not yet integrated.

---

## Evolutionary Trajectory

* **Version 1.0** — Minimal, stable base. Established core conversion functions and logging.
* **Version 2.0** — Expanded Markdown support and introduced templating for professional consistency.
* **Version 3.0** — Automated navigation and per-department summaries, transforming the tool into both a converter and a content management aid.

Each version reflects a deliberate step in software evolution:

* **Stability → Functionality → Automation.**

---

## Installation and Usage Instructions

### 1. Prerequisites

* **Python 3.8+** installed on your system.
* A project directory structured as follows:

  ```
  C:/MGU/
  ├── scripts/
  │   ├── md_to_html_v1.0.py
  │   ├── md_to_html_v2.0.py
  │   └── md_to_html_v3.0.py
  ├── departments/
  │   ├── law/
  │   │   └── lesson1.md
  │   └── science/
  │       └── lesson1.md
  └── components/css/style.css
  ```

### 2. Installation

1. Download the script(s) and place them in the `scripts/` folder.
2. Ensure your Markdown files are inside the `departments/` folder, organized by department.

### 3. Running the Script

* Open a terminal or PowerShell window.
* Navigate to the `scripts/` folder:

  ```bash
  cd C:/MGU/scripts
  ```
* Run the script of your choice:

  ```bash
  python md_to_html_v1.0.py
  ```

  or

  ```bash
  python md_to_html_v2.0.py
  ```

  or

  ```bash
  python md_to_html_v3.0.py
  ```

### 4. Using the Converter

* **Version 1.0:**

  * Converts Markdown to basic HTML.
  * Outputs `.html` files next to `.md` files.
  * Logs conversions in `conversion_log.txt`.

* **Version 2.0:**

  * Same as above, with additional Markdown features.
  * Wraps output in site-wide CSS template.

* **Version 3.0:**

  * Adds automatic navigation links.
  * Updates `README.md` with summaries of conversions per department.
  * Maintains `conversion_log.txt` for detailed tracking.

### 5. Output

* Converted `.html` files are placed in the same department folders as their `.md` sources.
* Logs (`conversion_log.txt` and `README.md` summaries) provide an auditable record of all conversions.

---

## Troubleshooting

### 1. Python Not Found

**Error:** `python: command not found` or `'python' is not recognized as an internal or external command`
**Fix:** Ensure Python 3.8+ is installed and added to your system PATH. Test with:

```bash
python --version
```

### 2. Script Does Not Run

**Error:** `ModuleNotFoundError` or indentation errors.
**Fix:**

* Ensure you copied the script exactly without breaking indentation.
* Use a proper text editor like VS Code or Sublime Text.

### 3. No `.html` Files Generated

**Possible Causes:**

* You ran the script in the wrong directory.
* No `.md` files exist in the `departments/` folder.
  **Fix:** Verify file locations and rerun:

```bash
cd C:/MGU/scripts
python md_to_html_v1.0.py
```

### 4. Conversion Log Not Updating

**Cause:** The script may not have permission to write logs.
**Fix:** Ensure you have write access to the folder. On Windows, run PowerShell as administrator if needed.

### 5. Styling Not Applied (Version 2.0 and 3.0)

**Cause:** The `style.css` file is missing or path is incorrect.
**Fix:** Place `style.css` in `C:/MGU/components/css/` and ensure the script references the correct location.

### 6. README Not Updating (Version 3.0)

**Cause:** `README.md` not found or write-protected.
**Fix:** Ensure `README.md` exists in `scripts/` folder or allow the script to create one automatically.

---

## Conclusion

The Markdown-to-HTML converter’s development demonstrates a structured approach to software evolution: starting with a minimal, auditable baseline, gradually expanding functionality, and then automating key processes to reduce human workload. By documenting these three versions, MGU ensures future upgrades can build upon a clear lineage of improvements.

Future directions may include:

* Migrating from regex-based parsing to parser-based libraries for accuracy.
* Expanding Markdown support (blockquotes, code blocks, images, tables).
* Integrating dynamic site components (search, filters, cross-department navigation).

This evolutionary roadmap highlights MGU’s commitment to both technical rigor and educational accessibility.
