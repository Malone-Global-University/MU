# MGU Markdown Editor v0.3.0 — Technical Design

Revision 1.0 | November 27, 2026 | Candidate; not yet locally accepted

## Baseline and structure

Derived from the supplied v0.2.0 archive. Source files for file operations, clipboard and scroll interpolation remain unchanged; existing tests are carried forward unchanged. No source in the v0.2.0 archive was modified. Changes are localized to `index.html`, `public/editor.css`, `editor.mjs`, `preview.mjs`, `renderer.mjs`, `toolbar.mjs`, `document-state.mjs` and the new `extended-markdown.mjs`.

## Rendering pipeline

1. CodeMirror 6 changes the authoritative Markdown string. The document state tracks revision and saved snapshot. Live changes debounce at 180 ms, or manual Render Now requests rendering.
2. The renderer enforces the existing 200,000 UTF-16-unit limit. markdown-it parses with raw HTML disabled, images disabled, explicit link validation and enabled table, strikethrough and fence rules.
3. New block and inline rules recognize standalone MGU double rules and delimited TeX. They use parser tokens rather than raw string substitution, so code blocks/spans are not inadvertently transformed. Math is compiled through KaTeX with MathML-only output; recognized failures produce escaped notation and one warning per render. Formulas are limited to 4,096 code units; a maximum 500 formula render attempts per document, 100 macro expansions per formula, maxSize 10, strict error handling and trust disabled. Each call uses a new options object without shared custom macros. No claim of exhaustive resource-abuse resistance is made.
4. If requested, parser block ranges become numeric data attributes, including fenced code and new math/double-rule blocks. Rendering returns a fragment and diagnostics. `inertLinks:true` produces styled spans rather than anchors.
5. The preview controller inserts the fragment into the existing iframe with allow-same-origin only (no allow-scripts), CSP `default-src 'none'`, inline stylesheet allowed, form-action and base URI blocked. Parent access supports clipboard and scrolling. MathML relies on browser-native rendering and does not require external font or CSS assets.
6. If source and preview revisions differ, or preview is unavailable, synchronization suspends. Otherwise the scroll module computes monotonic anchors from parser source ranges and CodeMirror line blocks, with endpoint interpolation. Wrapping, font and width changes refresh mapping; automatic rendering preserves preview offset when independent scrolling is selected.

## Module responsibility register

| File | Responsibility |
| --- | --- |
| `editor.mjs` | Orchestration, CodeMirror state, commands, revision scheduling and display controls |
| `renderer.mjs` | Application-independent parser configuration, safe link policy, optional maps and diagnostics |
| `extended-markdown.mjs` | Selected Markdown rules, MGU double divider and restricted TeX-to-MathML |
| `preview.mjs` | Sandbox/CSP, typography, preview DOM updates and clipboard extraction |
| `toolbar.mjs` | Pure text edits and CodeMirror dispatch, new formatting templates |
| `document-state.mjs` | Normalized UTF-8 source, saved snapshots, statistics and suggested filename normalization |
| `file-manager.mjs` | Native file access, fallback and writes (unchanged) |
| `clipboard.mjs` | Clipboard permissions/fallback and safe cut/paste (unchanged) |
| `scroll-sync.mjs` | Bidirectional source/preview position interpolation (unchanged) |

## Interface refinements

Wrap uses a CodeMirror Compartment reconfigured through a transaction without changing source text. The selected wrap state is used when making a new document state. Independent font selectors provide 12, 14, 16, 18, 20, 22, 24, 28, 32 px. Source font uses a scoped CSS variable; preview font changes the iframe root font size so rem headings scale. Reset display restores 16/18 px and wrap on; reset split retains its prior meaning. Display preferences do not persist after page reload. Source highlighting remains CodeMirror Markdown styling; no language-specific preview code highlighter is installed.

## Compatibility and filename notes

Native picker handle names are authoritative. The observed `.md.md` issue might have arisen from a typed trailing dot or native file-dialog extension handling. Normalize proposed and downloaded filenames, not already-open file handles. Browser-selected names may still contain duplicate extensions; review the native dialog before confirming. No direct application `console.*` event logging was found in inherited source; diagnostic messages from bundled dependencies/extensions are not suppressed. Do not disable the sandbox to clear such messages.

## Build and tests

The existing PowerShell root-based workflow remains: run all `tests/*.test.mjs`, then esbuild browser ESM. Add only the missing KaTeX dependency to root; retain existing compatible CodeMirror and markdown-it versions. Tests cover existing renderer/security, maps, editor utilities, new formatting and normalization, math, fences, tables and new block maps. The actual Windows environment must execute the dependency-based tests and browser smoke test before acceptance.
