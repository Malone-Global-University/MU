# Technical Design — MGU Markdown Editor and Rendering Engine

**Revision:** 0.1 | **Target:** v0.1.0 | **Status:** proposed implementation / development candidate

## 1. Design baseline

Implements FR-001, FR-002, AR-001 and the relevant portions of NFR-001 through NFR-006 from the engineering specification. WA-008 establishes reuse and separation of responsibilities. File operations, CodeMirror, extended syntax, publication styling, persistence and package distribution remain subsequent milestones.

## 2. Component architecture

```text
index.html / public/editor.css
           |
           v
src/editor.mjs — authoritative textarea source, controls, scheduling
           |
           v
src/preview.mjs — sandboxed iframe presentation
           |
           v
src/renderer.mjs — renderMarkdown(source, options) => result
           |
           v
markdown-it — pinned parser dependency
```

Future consumers call `renderMarkdown` without importing the editor or preview. Rendering is source-to-HTML, not HTML-to-Markdown. The HTML editor integration is deferred to a separately versioned release; source language mode and file operations must be implemented there as well.

## 3. Module contract

```ts
type RenderOptions = { inertLinks?: boolean };
type Diagnostic = { severity: 'error'; code: string; message: string };
type RenderResult = { html: string; diagnostics: Diagnostic[] };
renderMarkdown(source: string, options?: RenderOptions): RenderResult;
```

Pure synchronous interface: equivalent input, options and pinned dependencies should produce equivalent output. Source is never modified. Invalid type throws; oversized input or a caught rendering failure returns diagnostics and an empty HTML fragment. `inertLinks` is used by preview to present link text without active navigation. No DOM, storage, UI, network or styling dependency in the renderer. `RENDERER_VERSION` is separately identified. The module is not yet a distributable package.

## 4. Security and performance design

CommonMark preset with raw HTML explicitly disabled; images and fenced code disabled; link validation rejects unsafe schemes, control characters, backslashes, and protocol-relative URLs. Preview wraps the result in an iframe with an empty `sandbox` attribute and CSP restricting all external fetches, scripts and forms. It presents inert links. No external runtime services, storage, or application script execution in preview. Consumers must re-evaluate output handling, URL policies and isolation before independent publication. The 200,000-code-unit limit and 180 ms debounce are provisional safeguards; neither constitutes a performance guarantee. Future milestones should evaluate worst-case parsing and worker-based isolation if needed.

## 5. Acceptance matrix (not yet verified)

| ID | Acceptance procedure | Required outcome |
|---|---|---|
| AT-01 | Run Node test suite after installing dependencies | All six cases pass |
| AT-02 | Build using esbuild | `public/editor.js` generated with no errors |
| AT-03 | Load the root-served application | Sample headings, lists, links and emphasis displayed; no console errors |
| AT-04 | Type, paste and delete source text | Preview refreshes; original source remains unchanged by renderer |
| AT-05 | Use Render now and width slider/reset | Immediate render and desktop split changes; reset returns to equal widths |
| AT-06 | Narrow browser to 375px; navigate with keyboard | Panels stack, controls remain reachable, no horizontal overflow |
| AT-07 | Paste script tags, event attributes, unsafe Markdown links, images and external references | No scripts execute or external preview requests occur; links cannot navigate |
| AT-08 | Enter malformed Markdown and input exceeding 200,000 code units | No source loss; oversized input yields readable diagnostic; recovery works after reducing input |
| AT-09 | Render same source twice and inspect output | Equivalent results under identical dependencies |
| AT-10 | Open developer tools network panel | No CDN or runtime parser requests; no preview resource fetches |
| AT-11 | Close/reload only with disposable source | No false persistence claims; source resets to sample as documented |

## 6. Decision register

- D-001: Existing shared npm root and esbuild retained; no new local root manifest supplied.
- D-002: `markdown-it@15.0.3` selected provisionally instead of writing a custom parser. Version and API documentation: https://www.npmjs.com/package/markdown-it?activeTab=versions and https://markdown-it.github.io/markdown-it/ . Installation and audit pending.
- D-003: Native textarea selected for first milestone; CodeMirror belongs to formatting/syntax milestone.
- D-004: Conservative preview behavior: raw HTML, remote images and navigation disabled. Publication security policies require future explicit verification.
- D-005: Standalone scoped workspace CSS; visual design and final hosting path are provisional. No changes to shared MGU components.

## 7. Next milestone

When v0.1.0 passes local acceptance and is archived, plan v0.2.0: integrate Markdown language support and formatting controls, preserve source through file import/export, and rerun the complete v0.1.0 regression suite. No additional milestone is authorized by this candidate package.
