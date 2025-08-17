# Markdown → HTML Converter

## Overview
This module provides a reliable pipeline to convert Markdown (`.md`) files into branded HTML pages for the Malone Global University (MGU) ecosystem.  

It powers the **dev-blog**, changelogs, journals, and other Markdown-based documentation, ensuring that every record is published with consistency, auditability, and transparency.

---

## Features
- **Markdown Parsing**: Converts `.md` files to HTML using [Marked](https://www.npmjs.com/package/marked).  
- **Metadata Support**: Extracts YAML frontmatter with [GrayMatter](https://www.npmjs.com/package/gray-matter).  
- **Template Integration**: Automatically stitches in partials:
  - `head/`
  - `header/`
  - `footer/`
  - `navbar/`
  - `theme/`
- **Auditability**: Logs conversion activity with timestamps.  
- **Non-Destructive**: Backs up existing files before overwriting.  
- **Automation Ready**: Designed for weekly push/deploy cycles with GitHub + Netlify.  

---

## Requirements
- Node.js (LTS recommended)  
- Dependencies installed via `npm install`:  
  - `gray-matter`  
  - `marked`  

---

## Usage
1. Place your Markdown source file (e.g., `journal.md`) in the designated folder.  
2. Run the converter script:  

   ```powershell
   node md-to-html.js journal.md dev-blog.html


First argument = input Markdown file

Second argument = output HTML file

The converter will:

Parse metadata and Markdown content.

Inject it into the MGU HTML template.

Save the new HTML page to the specified location.

Backup any pre-existing file before overwriting.

File Structure
/components/scripts/md-html-converters/
│
├── md-to-html.js        # Core converter script
├── CHANGELOG.md         # Version history
└── README.md            # This documentation


Templates are pulled from /components/partials/.

Versioning

This project uses Semantic Versioning.
See CHANGELOG.md for full version history.

Roadmap

Add CLI options for bulk conversion of multiple Markdown files.

Extend support for department-specific journals.

Integrate directly into weekly mgu_auto_update pipeline.

Optional CSS injection for department-level styling.

License

© 2025 Malone Global University – All rights reserved.
Proprietary system developed under Malone Reserve Equity LLC.


---

This README establishes **identity, usage, requirements, and roadmap**.  

Do you want me to also scaffold a **starter CLI interface** (`md-to-html.js`) so you don’t have to keep passing raw args, but instead can call something like:  

```powershell
node md-to-html.js --input journal.md --output dev-blog.html


That would make the converter friendlier for scale.