# MGU Markdown Editor and Rendering Engine — v0.1.0

**Status:** development candidate, not a verified release. Prepared November 27, 2026. Governing reference: WA-008; engineering specification revision 0.1.

## Purpose

The initial milestone provides a plain-text Markdown workspace and a live, isolated preview. The renderer is independent of browser UI and can be imported from a Node.js test or another application. The existing archived HTML editor is not modified.

## Installation on Windows

Proposed location (matching the existing versioned MGU software hosting convention):

`C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v0.1.0`

Extract the project folder into `C:\MGU\library\reference\software-documentation\mgu-licensed-software\`. Do not overwrite earlier applications. This source package does not include or replace the root npm manifests. Node 22 and npm 10 are the intended environment; the existing shared esbuild installation at `C:\MGU` is reused. The selected parser is `markdown-it@15.0.3` (pinned proposed version; registry availability was confirmed from npm's listing, but installation could not be performed in the build environment). Install only after reviewing changes to the existing root manifests. If the dependency already exists, inspect its version first; do not replace an existing version required by another app without regression testing.

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

## Verification record

- JavaScript syntax checks: passed for all three modules and test file under Node v22.16.0 in the authoring environment.
- Dependency installation: blocked by DNS/network access to npm registry (`EAI_AGAIN`).
- Renderer test suite: attempted, blocked at module import (`ERR_MODULE_NOT_FOUND`); no functional assertions ran. Do not treat these tests as passed.
- Bundle, end-to-end interaction, Windows execution and deployment: not verified. Root manifests and runtime bundle not included; preserve the actual updated root package.json/package-lock.json when the local milestone is verified.

## Release closeout

Only after local automated and manual tests pass: freeze the version; keep the generated runtime bundle, source, test corpus, and actual root manifests; update this README with evidence; preserve a complete baseline on the external backup drive (do not assume a drive letter); document the milestone in MGU Software Development Records. Then start v0.2.0 in a new versioned folder. Do not overwrite the archived HTML editor or advance before verification.
