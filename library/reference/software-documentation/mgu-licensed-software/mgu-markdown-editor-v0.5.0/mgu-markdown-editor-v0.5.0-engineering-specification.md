# MGU Markdown Editor v0.5.0 — Engineering specification

Status: implemented development candidate; verification pending local build. Governing architecture WA-008. Scope: PDF publishing and print-ready document export on the accepted v0.4.0 baseline.

| Requirement | Acceptance criterion |
|---|---|
| PDF-01 | Page setup validates paper, orientation, margins and print font size before applying. |
| PDF-02 | Fresh current source is rendered regardless of live preview state. Export never changes source or saved snapshot. |
| PDF-03 | Publication styles and restricted CSS are shared with the renderer. No arbitrary active content. |
| PDF-04 | Cover and linked contents are optional; unique internal anchors derive from real Markdown heading tokens. |
| PDF-05 | Metadata and running text are escaped; no injection of HTML/CSS or network resources. |
| PDF-06 | CSS requests paper geometry, repeated table headers, heading/page-break control, wrapped code, running text and page numbering. Browser-dependent layout must be inspected. |
| PDF-07 | Manual page-break extension is parsed as a block, source-mapped, and not interpreted inside code fences. |
| PDF-08 | Print layout opens a separate script-free document; browser Save as PDF provides interactive output. Download print HTML works as a fallback. |
| PDF-09 | Optional local direct export invokes installed Chromium with a temporary profile and generated print HTML, validates the PDF signature and refuses existing destination files. |
| PDF-10 | Pure reusable print API exported through standalone renderer bundle; no additional npm dependency. |
| PDF-11 | Maintain existing automated regression tests, add tests for PDF options, escaping, markup, page breaks and source limits. |

Non-goals: guaranteed identical pagination across browsers; exact PDF metadata preservation; automatic TOC page numbers; guaranteed PDF bookmarks; direct browser-only binary download without native print; image loading; autosave. Target 48 tests and a short local browser smoke test before acceptance.
