# MGU Markdown Editor and Rendering Engine — v0.3.0

**Status:** Development candidate, November 27, 2026. Source prepared from the locked v0.2.0 archive. No previous release was modified. Local build and abbreviated acceptance pending.

## New in this release

- Markdown pipe tables, fenced code blocks (literal, not executed), strikethrough, inline and display TeX mathematical notation via native MathML.
- Double horizontal rule (`:::mgu-double-rule`), an MGU-specific extension; ordinary `---` is unchanged.
- Source Word Wrap On/Off, independent 12–32 px font choices (source 16 px, preview 18 px), larger toolbar/status text, Reset display.
- New formatting controls for strike, fenced code, inline math and display math. Existing editing, file operations, clipboard, live/manual preview and synchronized scrolling retained.
- Suggested/download filename normalization and silent no-selection Copy/Cut. Native picker-selected filenames remain authoritative. No direct console logging found in source; third-party diagnostics are not suppressed.

## Install and build (Windows PowerShell 5.1)

Extract the ZIP into the existing parent folder `C:\MGU\library\reference\software-documentation\mgu-licensed-software\`. The archive already contains `mgu-markdown-editor-v0.3.0`; do not extract into another identically named directory. Keep the v0.2.0 folder and archived root manifests unchanged.

Use the already working root npm installation from v0.2.0. Inspect dependencies; back up root `package.json` and `package-lock.json` before adding KaTeX. If KaTeX 0.16 is not already installed, run:

```powershell
Set-Location C:\MGU
npm ls katex markdown-it esbuild @codemirror/lang-markdown --depth=0
npm install --save-exact katex@0.16
```

Do not reinstall or upgrade other existing dependencies unnecessarily. The root lockfile records the exact resolved KaTeX version. Review npm audit findings; do not blindly force upgrades. If you already have an incompatible KaTeX version required by another application, assess compatibility before changing it.

```powershell
$Project = "C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v0.3.0"
& "$Project\build.ps1"
```

The script executes 27 tests before generating `public/editor.js`. Continue only on a successful build. If PowerShell blocks the script, use the equivalent direct commands without changing machine policy:

```powershell
Set-Location C:\MGU
$Tests = @(Get-ChildItem "$Project\tests" -Filter '*.test.mjs' | ForEach-Object { $_.FullName })
node --test @Tests
# Run the following only if every test passes:
& ".\node_modules\.bin\esbuild.cmd" "$Project\src\editor.mjs" --bundle --platform=browser --format=esm --target=es2022 "--outfile=$Project\public\editor.js"
```

Reuse the existing localhost server, or start it from another PowerShell window:

```powershell
Set-Location C:\MGU
& ".\node_modules\.bin\esbuild.cmd" --servedir="C:\MGU" --serve=127.0.0.1:8000
```

Open `http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v0.3.0/` and refresh with Ctrl+F5. Do not use file://. No CDN runtime dependencies after building. Use a modern browser with native MathML (tested environment target: Chrome on Windows; wider compatibility not certified).

## Abbreviated acceptance — approximately 5–10 minutes

1. Confirm all 27 tests pass and browser opens. Load `smoke-test.md` from this directory via Open. Verify tables, fenced code, strikethrough, two rule types, inline/display math. The intentionally invalid last formula should display a warning rather than crash the preview. No script alert, active preview link or external image should load.
2. Toggle Word Wrap and change both font sizes independently. Reset display. Check the saved Markdown stays unchanged, and the long line wraps only when enabled.
3. Paste a long disposable article; verify live preview, source/preview sync in both directions, and that sync suspends when manual preview becomes stale and resumes on Render Now. Use a formatting control and undo it.
4. Save As a disposable Markdown file, reopen, and verify the exact expected source and Unicode. Exercise Copy Source and Paste. Check no unexpected application errors; known extension/sandbox messages may be nonblocking.
5. If satisfactory, record actual results, lock the release and preserve the complete directory including generated bundle, tests, README, specifications and root package manifests on an external drive. Prepare the historical record and user manual alongside the program; progress report if warranted. Do not rerun 122 individual manual checks unless a specific defect warrants it.

## Syntax reference

| Feature | Syntax |
| --- | --- |
| Single rule | Standalone `---` |
| Double rule | Standalone `:::mgu-double-rule` |
| Strike | `~~text~~` |
| Inline math | `$E=mc^2$` or `\(E=mc^2\)` |
| Display math | `$$...$$` or `\[...\]` on a separate line; multiline uses standalone opening and closing lines |
| Table | Pipe-separated header, delimiter row, data rows |
| Fenced code | Three or more backticks/tildes, optional language name, matching closing fence |

Use `\$` for literal dollar signs when ambiguous. The double rule is not standard Markdown and may show as literal text in external renderers. MathML is browser-rendered; not every TeX command or browser is supported. Rendered code has no language-specific color highlighting yet. Code fences are not executed. Preview copy uses the displayed revision, not an unrendered source revision.

## Operating and security boundaries

Existing source is authoritative. UTF-8 input, BOM removal and LF normalization are retained. Direct save requires browser File System Access support and permission; download is a fallback, not proof of a saved original. No autosave/session restoration. PDF export, print styles, reusable standalone packaging and persistence are deferred. Existing preview limit: 200,000 UTF-16 code units; math recognition limited to 4,096 code units per formula, maximum 500 attempts per document. Excess or invalid notation may be shown literally. Raw HTML escaped; preview links inert; external images disabled; sandbox permits parent access but not scripts. No universal security or browser compatibility certification. Browser extensions may generate console messages or access page contents according to their own permissions.

## Packaging verification

- 10 dependency-free tests passed in this environment (7 inherited + 3 new).
- All JS module/test syntax checks passed. 15 original tests preserved byte-for-byte; 12 new tests included, giving 27 total.
- npm registry DNS inaccessible here; no markdown-it, KaTeX, CodeMirror or esbuild installation available. Remaining 17 dependency-based tests, browser build and manual smoke test are pending. No generated browser bundle is included.
- This is a development candidate, not an accepted release. After acceptance, replace this section with actual local results and archive the version unchanged.
