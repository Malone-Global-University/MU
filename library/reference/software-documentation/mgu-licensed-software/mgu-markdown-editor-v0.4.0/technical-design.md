# MGU Markdown Editor v0.4.0 — Technical Design

**Candidate design | November 27, 2026**

## Architecture

The editor retains its separate CodeMirror source interface, document-state, file, clipboard, toolbar and scroll-sync modules. `renderer.mjs` is the common parsing implementation. `renderer-entry.mjs` exposes its public API together with reusable publication and export functions; esbuild builds this entry separately from the editor. The renderer bundle does not initialize DOM controls or the editing workspace. Both bundles are derived from the same source, not two separately maintained renderers.

| Module | Responsibility |
|---|---|
| renderer.mjs | Parser configuration, rendering, diagnostics, source mappings and heading extraction |
| extended-markdown.mjs | Existing table, fence, strikethrough, math and double-rule support |
| publication-styles.mjs | Base/preset styles, restricted CSS validation, optional print stylesheet |
| html-export.mjs | Fragment/full-document generation, title escaping, CSP, download utility |
| renderer-entry.mjs | Public renderer API exports |
| preview.mjs | Sandboxed iframe and publication stylesheet application |
| editor.mjs | UI wiring, outline navigation, export and existing editing operations |

## Data flow

Source edits update document state. Preview rendering requests inert links, source mappings and outline metadata. Actual parsed heading tokens (not regex line guessing) provide zero-based lines, heading levels and plain labels. Outline navigation moves CodeMirror's selection and scrolls the matched heading in the preview; stale previews disable navigation until refreshed. Style changes update the iframe style element without modifying source or its dirty state. Scroll maps refresh after layout changes. HTML export reads current source directly, independently from the preview revision; it does not save the Markdown file.

## Security and resource bounds

Retain sandbox without script permission and restrictive preview CSP. Raw HTML and external image loading remain disabled. KaTeX uses trust:false and native MathML. The 200,000 UTF-16 code-unit source limit, 4,096-unit formula recognition bound and 500-formula budget remain. The custom CSS validator normalizes a limited set of selectors/properties and literal values; no URL/functions, at-rules, escaped selectors or markup. Full exports contain a restrictive CSP and escaped title. Active export links are explicitly opt-in, never enabled in the preview. Fragment consumers supply their own containment and styles. This design is not a substitute for a security audit.

## Compatibility and distribution

No new npm packages beyond v0.3.0. Parser instances are cached by a five-flag configuration key (maximum 32 combinations), with per-render diagnostic and math environments. Prior `renderMarkdown` defaults and output shape retained; optional outline is additive. All 27 previous source tests retained, with the v0.3.0 false-positive assertion corrected. Eleven new source tests cover styles, validation, configuration, outline and export. A post-build Node import exercises the standalone bundle. See README for API and examples. Local browser and bundle verification pending.
