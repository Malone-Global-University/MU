# MGU Scripts Version History

This folder contains all Markdown → HTML converter scripts and other automation tools for Malone Global University.  
Each script has a **version number**, **date**, and **description of changes/features**.  

---

## Version Tracking Template

| Version | Script Name           | Date       | Description / Features                             | Notes |
|---------|----------------------|------------|---------------------------------------------------|-------|
| 1.0     | md_to_html_v1.0.py   | 2025-08-16 | Minimal working base. Converts headings, bold/italic, links. Recursive and single-folder modes. | Stable base. Do not overwrite. |
| 1.1     | md_to_html_v1.1.py   | YYYY-MM-DD | Example: adds support for lists and images.       | Experimental; derived from v1.0. |
| 1.2     | md_to_html_v1.2.py   | YYYY-MM-DD | Example: adds templating with CSS wrappers.       | Experimental. |
| 2.0     | md_to_html_v2.0.py   | YYYY-MM-DD | Example: major rewrite using parser-based approach. | Experimental, larger redesign. |

---

## Guidelines for New Versions
1. **Do not overwrite previous versions.**  
2. **Increment version numbers logically:**  
   - Patch/minor change → x.y (e.g., 1.0 → 1.1)  
   - Major redesign → x.0 (e.g., 1.2 → 2.0)  
3. **Update README** whenever a new script is added. Include date, description, and notes.  
4. **Keep v1.0 as stable reference** for all future AI-fed experiments.  

---

## Notes
- All scripts should include a **version header** inside the file for traceability.  
- Scripts may be placed in subfolders if necessary, but track them in this README.  
- Use this README as a **single source of truth** for your scripts and version history.
