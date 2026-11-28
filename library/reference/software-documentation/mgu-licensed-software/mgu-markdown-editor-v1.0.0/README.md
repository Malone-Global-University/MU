# MGU Markdown Editor and Rendering Engine — v1.0.0

Production release candidate (local acceptance pending) | November 27, 2026 | WA-008

See `mgu-markdown-editor-v1.0.0-release-notes.md` for exact install/build, PDF export and smoke-test instructions. See `technical-design.md` for architecture and boundaries. Build using the root C:\MGU npm dependencies from v0.6.0; no new npm dependencies.

## Reusable renderer API

After building, import `public/renderer.mjs` in a browser ESM consumer or Node. The editor UI and CodeMirror are not required. Existing interfaces remain available: `renderMarkdown(source,{inertLinks,sourceMap,outline,features,headingIds})`, `publicationCSS({preset,customCSS,fontSize,print})`, `validateCustomCSS`, `exportHTML(source,{format,title,preset,customCSS,fontSize,activeLinks,features})` and `htmlFilename`. `renderMarkdown` returns HTML and diagnostics, plus outline if requested. Optional headingIds adds generated unique IDs to heading tokens. Supported features flags: tables, fences, strikethrough, math, doubleRule. Raw HTML and images cannot be enabled. The renderer retains the 200,000 UTF-16 source limit. `:::mgu-page-break` is an MGU extension inherited from v0.6.0.

```javascript
import {exportPrintDocument, PDF_DEFAULTS, pdfFilename} from './public/renderer.mjs';
const result = exportPrintDocument('# Report\n\n$x^2$', {
  ...PDF_DEFAULTS, title: 'Report', preset: 'technical', paper: 'A4',
  cover: true, toc: true, header: 'MGU', footer: 'Technical documentation'
});
// Check result.valid and diagnostics before consuming result.html.
```

The API returns a script-free HTML print document, not binary PDF bytes. Use native browser print or `tools/export-pdf.mjs` for PDF generation. Print settings: paper Letter/A4/Legal; portrait/landscape; four margins 10–35 mm, print font 9–18 pt, title/author/institution/subject/keywords/header/footer, cover/toc/pageNumbers, preset/customCSS/activeLinks. Running text requires at least 15 mm at relevant page edge. Print CSS requests pagination; browser limitations apply. Integration example remains available in examples/. Use `examples/pdf-settings.json` with the direct PDF command. See the release notes for limits and actual verification status.

Preserve source, generated bundles, tests, root npm manifests and docs after acceptance. Keep earlier versions unchanged.

## Local workspace

Recovery is enabled by default and stores local copies in this browser, not on disk. Use Keep draft for explicit snapshots, Drafts & recent for retrieval/removal, and Save or Save As for permanent files. Settings and PDF metadata persist across sessions. See release notes for storage limits, privacy, and the short acceptance check.

## Production distribution

Run `build.ps1` on Windows or `node tools/build.mjs` with Node 22+ and the declared dependencies. The build runs 64 tests, stages minified editor/renderer bundles, verifies the renderer import and creates `dist/` with only approved deployment files, third-party notices and a SHA-256 manifest. Serve `dist/` through HTTPS or localhost; do not open the HTML by file URL. Keep source and direct PDF CLI in the separate source archive. Previous dist directories are retained under `previous-dist-*` when rebuilding.

The MGU-authored software license and public feedback destination must be designated by the publisher; this archive does not assign a license or send reports. See `help.html`. v1.0.0 has a separate local storage namespace; save needed v0.6.0 drafts to disk before switching versions.
