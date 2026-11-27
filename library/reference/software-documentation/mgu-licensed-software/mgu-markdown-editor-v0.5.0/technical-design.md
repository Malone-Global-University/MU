# MGU Markdown Editor v0.5.0 — Technical design

WA-008 | November 27, 2026 | Development candidate.

## Module boundaries

The accepted v0.4.0 application modules remain in src/. The standalone renderer entry now exposes `exportPrintDocument`, `normalizePDFOptions`, `printCSS`, `pdfFilename`, and `printFilename`. `pdf-layout.mjs` validates options, escapes running text and produces a print stylesheet. It is pure and imports only the existing publication stylesheet module. `pdf-publishing.mjs` composes safe Markdown fragments, metadata, optional cover and heading-based linked contents; browser-specific helpers open a print document or download its HTML. `editor.mjs` provides the page setup dialog and passes the current source and settings, independent of preview freshness. All previous renderer options remain compatible; optional headingIds assigns generated unique heading IDs. `extended-markdown.mjs` adds a block marker `:::mgu-page-break`, and source mapping covers it. The marker is literal in code fences; CSS shows a dashed line in preview and requests page break before the marker for print.

## Data flow

Markdown source -> renderer -> escaped HTML fragment and diagnostics -> optional outline/anchor IDs -> print document with publication CSS, validated page options and CSP -> native browser print / PDF. The current source is used even if live preview is stale. Invalid settings or fatal renderer errors stop export without changing source or saved state. Metadata fields are text-escaped and running strings are CSS-escaped code points. Raw HTML remains inert, images disabled, TeX trust disabled, links opt-in except internally generated contents links. Print documents include a restrictive CSP and no scripts; the preview sandbox remains unchanged. The browser is responsible for final PDF layout and metadata transfer. User-selected styles are restricted to the v0.4.0 CSS allowlist.

## Direct local PDF path

`tools/export-pdf.mjs` consumes a saved UTF-8 Markdown file, optional settings JSON, and optional Chromium executable path. It imports the built `public/renderer.mjs`, writes a print document in a unique temporary directory, invokes Chromium via spawnSync (no shell, no --no-sandbox), waits for its PDF, checks the signature, copies using COPYFILE_EXCL, and removes temporary files. It does not modify source or overwrite an existing destination. Browser discovery includes common Windows Chrome/Edge installation directories. Browser/headless compatibility and actual PDF pagination require workstation testing. No localhost HTTP service or new npm package is required for the direct command.

## Build and verification

`build.ps1` runs all *.test.mjs, bundles editor and renderer, verifies independent renderer import. Original 38 tests retained (renderer version expectations updated); ten new tests cover layout and publication. 19 dependency-free tests passed; remaining 29 require parser dependencies. All source syntax checks passed. The local container Chromium layout probe did not complete; actual PDF output not verified. See release notes. No prior release archive modified.
