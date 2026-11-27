# MGU Markdown Editor v0.2.0 — Technical Design

Status: implemented source candidate, dependency build and browser acceptance pending. Governing framework WA-008; requirements in the accompanying v0.2.0 engineering specification.

## Module interfaces

| Module | Interface and responsibility |
|---|---|
| renderer.mjs | `renderMarkdown(source, {inertLinks, sourceMap})` returns HTML fragment and diagnostics. Optional mapping adds numeric `data-source-line` and `data-source-end` attributes on visible block tokens; default output is unchanged. Renderer version 0.2.0. |
| editor.mjs | CodeMirror 6 orchestration, document revision ownership, preview scheduling, toolbar bindings and status. |
| toolbar.mjs | Pure `formatEdit` transforms a source selection to an edit range and new selection; `applyFormatting` dispatches a CodeMirror transaction. |
| document-state.mjs | Snapshot-based dirty state, normalized input and statistics. |
| file-manager.mjs | File picker, UTF-8 read, direct writable handle, explicit browser download fallback. |
| clipboard.mjs | Async clipboard primitives with selection revision guards and rich/plain copy fallback. |
| preview.mjs | Initializes a sandboxed same-origin-only iframe, writes renderer-produced HTML inside its content container, reports diagnostics, copies safe preview content. |
| scroll-sync.mjs | Numeric monotone interpolation in both directions; maps source line heights to preview block positions, suppresses reciprocal events and coalesces scroll events using requestAnimationFrame. |

## Design decisions

- Centralized root npm dependencies are retained. Explicit CodeMirror package imports avoid requiring the convenience `codemirror` meta-package. No source duplication from the HTML editor or changes to it.
- Use the existing markdown-it CommonMark configuration and extend only mapping. Hidden tight-list paragraphs are skipped; list items and headings supply anchors. Monotone filtering drops duplicated or out-of-order anchors. If only endpoints exist, report approximate synchronization. Browser wrapping and virtualization can cause mapping estimates; validate using representative documents.
- One iframe shell is initialized once. Only trusted renderer-generated HTML is placed inside the content element. The iframe's sandbox allows same-origin access but not script execution; restrictive CSP remains. This permits parent-side measurement without a script bridge. Rich clipboard copy removes mapping markers and excludes the shell and diagnostic content. This relaxed origin boundary is subject to local security verification.
- Source revisions are monotonic. Source edits invalidate synchronization immediately; manual mode displays the prior revision; successful current render re-enables mapping. Rendering is synchronous and debounced 180 ms in live mode. Manual refresh resets both scroll positions if sync is active. With sync off, live refresh restores previous preview offset. With sync on, source drives alignment after a refresh. Scroll updates are coalesced and reciprocal writes are guarded by expected offsets.
- File operations are serialized, while edits can continue during asynchronous saving. The saved snapshot rather than the latest source sets the clean baseline. If the document changes during an open picker/read, the replacement is canceled. File picker permission failures are not silently treated as success. Browser downloads remain separate from confirmed direct saves.
- Native keyboard clipboard behavior remains available. Async cut/paste requires the original CodeMirror document and selection to remain current before modifying source. All source changes are undoable editor transactions. New/open reset history. No automatic persistent storage.

## Requirements and verification

All 17 functional requirements have source-level implementations; actual browser acceptance is outstanding. Seven dependency-free tests verify pure authoring functions; baseline renderer and mapping tests require markdown-it. Build script requires all tests to pass before bundling. The owner shall execute the acceptance checklist in README against the Windows/Chrome workflow. No claims of complete runtime acceptance, production deployment or archival are made.
