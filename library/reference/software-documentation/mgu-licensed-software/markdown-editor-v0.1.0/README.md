# MGU Markdown Editor and Rendering Engine — v0.1.0

**Status:** accepted development baseline, pending external archival. Updated November 27, 2026. Governing reference: WA-008; engineering specification revision 0.1.

## Purpose

The initial milestone provides a plain-text Markdown workspace and a live, isolated preview. The renderer is independent of browser UI and can be imported from a Node.js test or another application. The existing archived HTML editor is not modified.

## Installation on Windows

Proposed location (matching the existing versioned MGU software hosting convention):

`C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v0.1.0`

Extract the project folder into `C:\MGU\library\reference\software-documentation\mgu-licensed-software\`. Do not overwrite earlier applications. The original source package does not include or replace the root npm manifests. Node 22 and npm 10 are the intended environment; the existing shared esbuild installation at `C:\MGU` is reused. The selected parser is `markdown-it@15.0.3` (pinned proposed version; the installed version must be recorded from the local root npm manifests). Install only after reviewing changes to the existing root manifests. If the dependency already exists, inspect its version first; do not replace an existing version required by another app without regression testing.

```powershell
Set-Location 'C:\MGU'
npm ls markdown-it esbuild --depth=0
# If markdown-it is absent and the existing root dependencies are compatible:
npm install --save-exact markdown-it@15.0.3
$Project = 'C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v0.1.0'
& "$Project\build.ps1"
```

The build script first runs the Node regression tests and stops on failure. It then bundles the editor and dependency into `public\editor.js` using root esbuild. If PowerShell execution policy blocks local scripts, review the script and run the two commands below directly, without changing machine policy:

```powershell
node --test "$Project\tests\renderer.test.mjs"
# Proceed only if the tests pass.
& '.\node_modules\.bin\esbuild.cmd' "$Project\src\editor.mjs" --bundle --platform=browser --format=esm --target=es2022 "--outfile=$Project\public\editor.js"
```

Serve from the MGU root using the existing esbuild development server (stop any other server occupying port 8000 first):

```powershell
Set-Location 'C:\MGU'
& '.\node_modules\.bin\esbuild.cmd' --servedir='C:\MGU' --serve=127.0.0.1:8000
```

Open in the browser:

`http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v0.1.0/`

No network dependency is required at runtime after bundling. The project is not ready to serve until `public/editor.js` has been generated.

## File structure

- `index.html` — standalone workspace shell.
- `public/editor.css` — scoped app layout and appearance.
- `src/editor.mjs` — source state, controls, stats and preview scheduling.
- `src/preview.mjs` — isolated iframe document and presentation.
- `src/renderer.mjs` — reusable Markdown parser adapter, version and diagnostics contract.
- `tests/renderer.test.mjs` — six automated test cases (run after dependency installation).
- `build.ps1` — root-based test and build orchestration.
- `technical-design.md` — engineering design and manual acceptance checklist.

## Intended capabilities and limitations

- Basic Markdown headings, paragraphs, emphasis, lists, blockquotes, inline code, ordinary links and CommonMark-compatible constructs; preview updates after a 180 ms delay or immediately on Render now.
- Desktop adjustable split and stacked narrow-screen layout. Status line provides word/line/code-unit counts (approximate whitespace-based word count).
- Raw HTML disabled, images and fenced-code recognition disabled, preview links inert, sandboxed iframe with restrictive CSP. This is a defensive design, not a completed security audit. The reusable renderer's HTML output must still be assessed in each consuming context.
- 200,000 UTF-16 code-unit input limit for rendering; text remains editable. No benchmark or hard performance guarantee yet. Rendering is synchronous.
- No persistent storage, file import/export, syntax highlighting, toolbar formatting, mathematical notation, tables, publication theme, or formal module distribution yet. Source text is lost on reload or closing unless copied elsewhere. CodeMirror and file operations are deferred to v0.2.0; extensions to v0.3.0.

## Verification record — November 27, 2026

### Verified in the local Windows environment

- Owner demonstrated browser operation at localhost and live rendering of a substantial MGU Encyclopedia article.
- Owner supplied screenshots of heading levels, emphasis, lists, blockquotes, inline and indented code, horizontal rules, hyperlinks and Unicode text, and of the preview security test.
- Owner confirmed editor width adjustment, 50/50 reset, independent scrolling, undo/redo and Render Now without errors. Manual rendering resets preview position to the top.
- Owner supplied Node test output: 6 tests, 6 passed, 0 failed, 0 skipped; total duration 200.9728 ms.
- The regression suite covers basic rendering, safe/inert links, raw HTML and unsafe protocols, image prevention, malformed/empty input, deterministic output and input-limit enforcement.
- Source review confirms preview links are rendered as styled spans without href attributes; the automated test verifies that contract.
- Owner generated a 216,019-code-unit test input in PowerShell; browser handling and recovery from that input were not explicitly confirmed.

### Verification boundaries

- Exact statistics counts, browser console inspection, narrow-window behavior and manual oversized-input recovery are not independently verified. These are accepted as nonblocking for this development baseline and should be included in future regression checks.
- The authoring environment initially could not install npm dependencies; the owner's local test results supersede that initial test blocker. Local browser operation is confirmed, but the exact installed dependency versions and build command output were not supplied.
- Security checks are smoke tests, not a comprehensive security audit. Public deployment is not confirmed.
- v0.1.0 is recommended for development freeze; external archival is not yet confirmed.

## Release closeout

Freeze the accepted version; keep the generated runtime bundle, source, test corpus, and actual root manifests; preserve a complete baseline on the external backup drive (do not assume a drive letter); document the milestone in MGU Software Development Records. Record actual dependency versions from the local manifests. Then start v0.2.0 in a new versioned folder. Do not overwrite the archived HTML editor or the v0.1.0 baseline.

## Next milestone

v0.2.0: formatting toolbar, syntax highlighting, Markdown file import/export, and proposed live/manual preview toggle. Retain the independent renderer interface and run the v0.1.0 regression suite. Consider preview scroll preservation as a usability enhancement.
