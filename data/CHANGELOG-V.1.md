# Changelog  
All notable changes to the Markdown → HTML Converter will be documented in this file.  

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),  
and this project adheres to [Semantic Versioning](https://semver.org/).  

---

## [1.0.0] – 2025-08-16
### Added
- Stable release of Markdown → HTML Converter.  
- Markdown in → HTML out with full audit trail.  
- Integration with modular partials (`head`, `header`, `footer`, `navbar`, `theme`).  
- Secure non-destructive output with backup-before-write.  
- Production-ready pipeline for dev-blog publication.  

---

## [0.7.0] – 2025-08-15
### Added
- Automation-ready execution (standalone or workflow integration).  
- Weekly cadence support (Markdown → HTML → Git commit → Netlify deploy).  
- Automatic journal-to-dev-blog conversion.  

---

## [0.6.0] – 2025-08-15
### Added
- Non-destructive output: converter saves backups with timestamps.  
- Prevents overwriting homepage or live content.  

---

## [0.5.0] – 2025-08-15
### Added
- Error handling for missing/invalid Markdown files.  
- Error handling for missing metadata.  
- Logging with timestamps for auditability.  

---

## [0.4.0] – 2025-08-15
### Added
- Modular partials system.  
  - `/components/partials/head/`  
  - `/components/partials/header/`  
  - `/components/partials/footer/`  
  - `/components/partials/navbar/`  
  - `/components/partials/theme/`  
- Standardized layout across dev-blog pages.  

---

## [0.3.0] – 2025-08-15
### Added
- Metadata parsing with **GrayMatter**.  
- Title/date/tags injected into `<head>` for SEO + indexing.  

---

## [0.2.0] – 2025-08-14
### Added
- Basic template wrapper for HTML output.  
- Introduced `<head>`, `<body>`, `<title>` shell.  

---

## [0.1.0] – 2025-08-14
### Added
- Prototype build.  
- Markdown parsed with **Marked** → plain HTML output.  
- No metadata, no template, raw conversion only.  

---
