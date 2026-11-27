# MGU Markdown Editor and Rendering Engine — v0.2.0

**Status:** Development candidate; local build and browser acceptance required. November 27, 2026.

This separate versioned directory implements the v0.2.0 specification and does not replace v0.1.0. The application uses CodeMirror 6, retains the markdown-it parser and adds an optional numeric source mapping interface to the independent renderer. WA-008 governs component reuse.

## Installation (Windows PowerShell 5.1 / PowerShell 7)

1. Preserve the accepted v0.1.0 baseline externally before installing. Extract the archive into `C:\MGU\library\reference\software-documentation\mgu-licensed-software\`. The archive contains its own `mgu-markdown-editor-v0.2.0` folder.
2. Inspect root dependencies. Keep the existing root `package.json` and `package-lock.json`; do not replace them with a new manifest. Back up the manifests before adding missing packages.

```powershell
Set-Location C:\MGU
npm ls markdown-it esbuild @codemirror/state @codemirror/view @codemirror/commands @codemirror/language @codemirror/lang-markdown @codemirror/search --depth=0
```

Check the actual installed versions against the existing HTML editor's needs. The baseline uses `markdown-it@15.0.3`; do not automatically change a working parser version. The CodeMirror packages must be the compatible 6.x family. If any package is missing, install only the missing ones. For example, if only the Markdown extension and search package are missing:

```powershell
npm install --save-exact "@codemirror/lang-markdown@6" "@codemirror/search@6"
```

If missing, install the baseline parser with `npm install --save-exact markdown-it@15.0.3`. Other missing CodeMirror modules can likewise be installed using their package name followed by `@6`. Install esbuild only if absent. Record actual resolved versions and root lockfile, and review any npm audit findings before publication. Do not force upgrades or override root dependencies blindly.

3. Build the project. The script runs all 15 test cases (six original renderer, two mapping, seven authoring tests) before bundling.

```powershell
$Project = "C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v0.2.0"
& "$Project\build.ps1"
```

If PowerShell blocks script execution, inspect your execution policy; alternatively run the following commands individually (no permanent policy change needed):

```powershell
Set-Location C:\MGU
$Tests = @(Get-ChildItem "$Project\tests" -Filter '*.test.mjs' | ForEach-Object { $_.FullName })
node --test @Tests
# Continue only if all tests pass.
& ".\node_modules\.bin\esbuild.cmd" "$Project\src\editor.mjs" --bundle --platform=browser --format=esm --target=es2022 "--outfile=$Project\public\editor.js"
```

4. Serve through the same existing localhost server, if running. Otherwise:

```powershell
Set-Location C:\MGU
& ".\node_modules\.bin\esbuild.cmd" --servedir="C:\MGU" --serve=127.0.0.1:8000
```

Open `http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v0.2.0/`. Do not open index.html using file://; use localhost or an HTTPS deployment. No CDN dependencies are required at runtime after bundling.

## Intended capabilities

- CodeMirror 6 source editing, Markdown highlighting, line numbers, cursor location, undo/redo and find/replace.
- Selection-aware formatting: H1–H6, emphasis, lists, quotes, inline code, link and rule. A link command selects the placeholder URL for editing.
- New, Open, Save, Save As and Download; unsaved-change protection. In Chromium secure contexts, direct file access uses the File System Access API. Download fallback does not establish that a file was saved to disk or clear dirty state. Save As fallback prompts for filename. File access denied/canceled leaves the document intact; use Download if direct saving is unavailable. Native file pickers may require another explicit user action if browser activation expires.
- Cut, Copy, Paste, Copy Source, Copy Preview. Clipboard failures report status; native keyboard commands remain available. Copy Preview uses HTML plus text when supported, otherwise text only; copies the displayed revision and omits mapping attributes.
- Live preview and manual rendering; optional bidirectional source-mapped scrolling, approximate fallback clearly labeled, independent scroll when disabled. Manual Render Now resets to top; with sync active, source also resets. With sync off, automatic rendering retains preview scroll offset where possible.
- Source remains authoritative. UTF-8 input (optional BOM removed at file import), CRLF/CR normalized to LF, UTF-8 output without BOM. Whitespace and Unicode are retained apart from these documented normalizations. Invalid UTF-8 and NUL-containing files are rejected. Statistics count LF-delimited lines (empty source is one line), whitespace-separated words, and UTF-16 code units.

## Limits and security

The 200,000 UTF-16 code-unit limit applies to rendering, not saving or editing. Tables, fenced-code rendering, math and extended Markdown rendering remain deferred to v0.3.0. Document persistence, recovery and advanced exports are deferred. CodeMirror may highlight syntax not yet supported in the preview.

The preview sandbox now grants `allow-same-origin` only; it does not grant scripts, forms, popups or navigation privileges. This permits parent-side scrolling and clipboard extraction, and is an explicit change from the opaque-origin v0.1.0 sandbox. The restrictive CSP remains. Raw HTML is escaped, external image loading disabled, preview links inert. The optional source mapping attributes are generated from parser ranges. This is not comprehensive security certification; browser regression is required.

## Verification performed during packaging

- All 7 dependency-free authoring tests passed under Node v22.16.0.
- All module and test files passed `node --check`.
- The 6 original tests are included unchanged; 2 mapping tests are added. Neither group was executed here because markdown-it is unavailable and the npm registry could not be resolved. CodeMirror and esbuild are also unavailable here; no production browser bundle is included. Build and browser acceptance remain outstanding.
- Browser tests and direct filesystem/clipboard permission workflows have not been verified. Do not classify as an accepted release until locally tested.

## Acceptance checklist

1. Run build.ps1 and verify 15/15 passing; check the browser console for errors.
2. Verify editing, highlighting, line numbers, search/replace, cursor and undo/redo. Exercise each formatting command on selected text and an empty cursor; undo each change.
3. Create a disposable test file, save, reopen, compare Unicode and whitespace; test Save As, Download, cancellation, dirty-state protection, and save after editing. Do not test with irreplaceable originals.
4. Test selection Copy, Cut, Paste, Copy Source, Copy Preview (paste into a rich-text target and plain text editor). Denied clipboard access must not delete text.
5. Toggle live preview off, edit, click Render Now, re-enable live. Test stale status, copied displayed revision, and scroll preservation with sync disabled.
6. Paste a long real article. Test sync in both directions at beginning/middle/end, switch it off, resize/reset panels, and check that scrolling does not oscillate. Test narrow windows.
7. Paste raw HTML, unsafe links, external images and malformed Markdown; ensure no active links, scripts, resource requests or crashes. Test input above 200,000 code units, then reduce it and confirm recovery.
8. Preserve source, generated public/editor.js, tests, specification, technical design, README and actual root npm manifests/lockfile externally after acceptance. Record actual verified results. Freeze v0.2.0 before starting v0.3.0.
