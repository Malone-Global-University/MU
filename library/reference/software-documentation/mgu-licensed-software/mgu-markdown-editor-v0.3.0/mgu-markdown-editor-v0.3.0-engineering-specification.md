# MGU Markdown Editor and Rendering Engine — v0.3.0
## Engineering Specification Sheet

- Institution: Malone Global University / Computer Science Department
- Product family: MGU Developer Tools Suite
- Specification revision: 1.0, November 27, 2026
- Baseline: locked v0.2.0; WA-008 — Reusable Software Module Architecture
- Status: development candidate; acceptance pending local tests

## 1. Purpose and scope

Consolidate the planned v0.2.1 usability refinement into v0.3.0, alongside the extended Markdown milestone. Retain existing verified file, clipboard, editing, preview and synchronized scrolling behavior. Keep the renderer independently callable and preserve earlier application directories. This is not a PDF export or persistence release.

## 2. Functional requirements

| ID | Requirement | Acceptance criterion |
| --- | --- | --- |
| FR-301 | Markdown tables | Pipe tables produce semantic header and body cells with alignment; wide tables can scroll. |
| FR-302 | Fenced code blocks | Backtick and tilde fences render as literal preformatted code; language identifiers are retained as classes, not executed. |
| FR-303 | Inline mathematical notation | `$...$` and `\(...\)` produce native MathML for supported TeX. Code spans and escaped dollar signs remain literal. |
| FR-304 | Display mathematical notation | `$$...$$` and `\[...\]` on their own line or with standalone multiline delimiters produce display MathML. |
| FR-305 | Invalid math handling | Recognized invalid formulas fall back to escaped notation with a nonfatal diagnostic; no loss of source. |
| FR-306 | Strikethrough | `~~text~~` renders strikethrough. Toolbar inserts delimiters around selected text or a placeholder. |
| FR-307 | Double rule | Toolbar inserts a standalone `:::mgu-double-rule` marker. Renderer produces a double-line horizontal divider; the standard single rule is unchanged. |
| FR-308 | Word wrap | Toggle changes source editor wrapping without inserting line breaks or changing dirty state. |
| FR-309 | Source font size | Independent 12–32 px selection; default 16 px. |
| FR-310 | Preview font size | Independent 12–32 px selection; default 18 px; headings scale with the preview. |
| FR-311 | Readability | Toolbar and status text defaults increase to 15 and 14 px respectively; contrast and line-number legibility improve. |
| FR-312 | Reset display | Restore both font defaults and wrapping; panel width has its existing separate reset. |
| FR-313 | Formatting controls | Add Strike, Code block, Inline math, Display math and Double rule. Existing controls remain functional. |
| FR-314 | Filename normalization | Normalize proposed/download filenames with duplicate Markdown extensions or trailing periods. Native picker choices remain authoritative; no automatic on-disk rename. |
| FR-315 | Clipboard no-selection behavior | Copy/Cut without a selection is an intentional no-op; no alert required. |
| FR-316 | Source mapping | New block types carry optional numeric source ranges; layout changes trigger scroll-map refresh. |

## 3. Architectural requirements

- Keep `renderMarkdown(source, {inertLinks, sourceMap})` compatible with the existing interface and its `{html, diagnostics}` result. Add extended rules through `extended-markdown.mjs`; renderer remains independent of DOM and CodeMirror.
- Use the existing markdown-it dependency and KaTeX 0.16-series dependency (resolved exact version recorded in root lockfile), with `output: 'mathml'`. No external webfonts, CDN runtime assets or rendering service.
- Preserve optional numeric source ranges and preview isolation. No raw HTML execution, external image loading or active preview links. KaTeX trust disabled, bounded expansion and formula count. The editor does not remove security-related browser diagnostics.
- Use a CodeMirror Compartment to toggle word wrapping without resetting the document or history. Source and preview typography are presentation settings, not content.
- Keep source limit at 200,000 UTF-16 code units; recognized formulas limited to 4,096 code units and 500 rendered formulas per document. Beyond the recognized formula limit, literal notation or warning may appear. Limits are not editing or saving limits.
- Keep dependencies at `C:\MGU`, with no new application-local npm project. Build to `public/editor.js`. Preserve root manifests and prior release files.

## 4. Verification and acceptance

Run all 27 automated cases (15 inherited and 12 new), then a 5–10 minute local browser smoke test using `smoke-test.md`. Focus on extended output, display controls, synchronization, file preservation and security. Fix material defects; do not require another exhaustive manual audit. Lock only after the build and smoke test are satisfactory. Record actual pass counts, outstanding limitations and accepted behavior in README; preserve external backup and prepare historical record/user manual per institutional policy.

## 5. Deferred capabilities

Full GFM compatibility (task lists, footnotes, autolinks), language-specific coloring of rendered fenced code, PDF generation, print publishing templates, automatic document persistence, independent engine distribution and broader compatibility testing are not included. Native MathML rendering depends on browser support. The double rule is an MGU-specific extension and is not portable to unmodified Markdown renderers.

## 6. Roadmap

| Release | Scope | Status |
| --- | --- | --- |
| v0.1.0 | Core authoring and rendering | Accepted baseline |
| v0.2.0 | Professional editing/file operations | Locked |
| v0.3.0 | Extended rendering and consolidated interface refinement | Candidate |
| v0.4.0 | Reusable distribution and publication styling | Planned |
| v0.5.0 | PDF generation, printing and export | Planned |
| v0.6.0 | Persistence and recovery | Planned |
| v1.0.0 | Consolidated public release | Target |
