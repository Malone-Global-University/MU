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
