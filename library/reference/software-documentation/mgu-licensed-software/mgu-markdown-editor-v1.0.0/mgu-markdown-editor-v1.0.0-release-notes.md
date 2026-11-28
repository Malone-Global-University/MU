# MGU Markdown Editor v1.0.0 — Release Notes

November 27, 2026 | Production release candidate — local acceptance pending

## New and consolidated features

- Retains all v0.1.0–v0.6.0 editing, extended Markdown, reusable rendering, publication styling, HTML/PDF export, recovery, draft and preference features.
- Production version identifiers and an independent v1.0.0 recovery namespace.
- Minified browser and standalone renderer bundles; portable Node build with PowerShell wrapper.
- Static `dist/` distribution, SHA-256 integrity manifest and generated third-party dependency notices.
- Startup failure message and Help & feedback page with a manual bug-report template.
- Three added packaging tests; 64 automated tests total. No new npm dependency.

## Install and build — Windows PowerShell 5.1

Extract `mgu-markdown-editor-v1.0.0.zip` into `C:\MGU\library\reference\software-documentation\mgu-licensed-software\`. The archive includes its versioned folder. Keep previous builds intact. Existing root npm dependencies from v0.6.0 are sufficient. On a new workstation, restore the archived root npm manifests and use `npm ci` in C:\MGU only if appropriate; this replaces node_modules. Alternatively install the included package manifest in an isolated copy with `npm install` and preserve its generated lockfile (the independent install was not tested here).

```powershell
$Project = "C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v1.0.0"
Set-Location $Project
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\build.ps1
```

Review the trusted script before the process-level policy adjustment. Expect 64 passing tests, independent renderer/print API checks and `Build complete`. The script generates `public/editor.js`, `public/renderer.mjs` and `dist/`. It preserves an existing dist folder under a unique `previous-dist-*` directory. No manual test patch is required.

If the local server is not running, start it in a separate PowerShell window:

```powershell
Set-Location C:\MGU
& ".\node_modules\.bin\esbuild.cmd" --servedir="C:\MGU" --serve=127.0.0.1:8000
```

Development: http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v1.0.0/

Production distribution: http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v1.0.0/dist/

To verify distribution files from the project directory:

```powershell
Set-Location $Project
node .\tools\verify-dist.mjs
```

Deploy the contents of `dist/` to the intended static HTTPS directory after acceptance. Review THIRD-PARTY-NOTICES.txt and designate the MGU software license and feedback destination before public distribution. The manifest is an integrity check, not a signature. The dist folder does not require Node or npm at runtime; the source package retains the command-line PDF tool. Use a dedicated origin for sensitive work where possible. Same-origin scripts may read local storage.

## Verification and limitations

35 dependency-free tests passed here, including the three new packaging tests. JavaScript syntax checks passed. 29 dependency-dependent cases, bundle generation, independent install and actual browser operation require workstation verification. The v0.6.0 local acceptance results have not been supplied; v1.0.0 includes the complete v0.6.0 source and inherited tests. Not yet locked or publicly deployed.

- v1.0.0 starts with fresh local settings. Save any required v0.6.0 drafts to disk and reopen them in v1.0.0; no automatic migration or deletion occurs.
- Browser autosave is not disk Save. Storage is origin/profile-specific, unencrypted, quota-limited and can be cleared; save important work separately. One tab recommended. Undo history and original file handles are not restored.
- 200,000 UTF-16 rendering limit; recovery sources/baselines up to 500,000 units, total record up to 1,500,000 units; eight kept drafts and five recent copies. Browser quota may be lower.
- PDF export uses browser print capabilities. Prefer Chrome Save as PDF; check actual output. No guaranteed PDF bookmarks or table-of-contents page numbers. Direct CLI retained; no cloud sync or filesystem autosave.
- Help & feedback provides a report template only, not a configured submission service. No license for MGU-authored code is assumed.

## Short acceptance check

1. Confirm 64 tests pass and both bundles and dist are generated; run `node .\tools\verify-dist.mjs`.
2. Launch the dist page. Open `smoke-test.md`, inspect table, math and code, edit and save a disposable copy.
3. Wait for recovery confirmation; refresh and confirm content and preferences persist. Keep and reopen a draft.
4. Generate a sample PDF and inspect output; briefly check HTML export and Help & feedback.

If satisfactory, lock and archive the full project (including dist, generated bundles, root package.json and package-lock.json) externally. Produce consolidated historical record and user manual after acceptance. Release subsequent confirmed fixes as v1.0.x.
