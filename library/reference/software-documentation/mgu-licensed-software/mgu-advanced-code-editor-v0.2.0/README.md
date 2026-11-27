# MGU Advanced Code Editor — v0.2.0

**Milestone:** Document and editing operations. **Disposition:** development candidate, awaiting local build and browser acceptance. The verified v0.1.0 external backup remains the recovery baseline. Do not promote this candidate to a save point yet.

## Changes

- New HTML template; open local file using native file picker where available; fallback Import input.
- Authorized Save and Save as; separate Download action, with download fallback where writable file picking is unsupported. Compare disk bytes before overwriting a linked file and prompt if they changed. This is a best-effort check, not an atomic concurrency lock.
- Unsaved-change indicators and discard confirmation; undo/redo history reset on document replacement. Download does not mark changes saved because browser downloads cannot confirm disk completion.
- Copy source, undo, redo, CodeMirror find/replace, explicit reindent of main selection or entire document, word wrap, live/manual preview, status bar with filename, encoding, line count, cursor position.
- Pointer and keyboard-adjustable split (20–80%), reset and stacked mobile layout.
- UTF-8 files only, 8 MiB import limit; preserve BOM and uniform line endings; warn that mixed endings normalize to dominant style on save/export. New documents use LF. No automatic upload or session persistence.

## Install update into MGU

Stop any running server. Extract the ZIP into `C:\MGU`, replacing only matching application files. Keep the verified external baseline unchanged. The package intentionally excludes the compiled `public/editor.js`; rebuild before launching. Existing stale bundle may remain until the rebuild completes. Root npm manifests and the original HTML editor are not included or modified by extraction.

```powershell
Set-Location C:\MGU
$App = 'C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-advanced-code-editor'
# Check that the CodeMirror modules resolve from the existing installation.
node -e "for (const p of ['codemirror','@codemirror/lang-html','@codemirror/state','@codemirror/commands','@codemirror/search','@codemirror/language']) console.log(p, require.resolve(p))"
```

The four additional direct imports are existing CodeMirror ecosystem dependencies and may already be installed transitively. If any cannot resolve, install the missing modules at the root. To explicitly record all four direct imports for centralized reproducibility, optionally promote the existing versions into root devDependencies; review the resulting lockfile changes. Do not run `npm install` in the app directory for the normal MGU workflow.

```powershell
# Only if needed (or deliberately declaring these as direct dependencies):
npm install --save-dev '@codemirror/state@^6' '@codemirror/commands@^6' '@codemirror/search@^6' '@codemirror/language@^6.2'
npm audit
```

## Test and compile

```powershell
node --test "$App\tests\document-utils.test.js"
.\node_modules\.bin\esbuild.cmd "$App\src\editor.js" --bundle --format=esm --legal-comments=eof "--outfile=$App\public\editor.js"
```

If successful, launch the root-scoped local server:

```powershell
.\node_modules\.bin\esbuild.cmd "$App\src\editor.js" --bundle --format=esm --legal-comments=eof "--outfile=$App\public\editor.js" --servedir="C:\MGU" --serve=127.0.0.1:8000
```

Open `http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-advanced-code-editor/public/advanced-code-editor.html`. Confirm the header reads Development 0.2.0. Stop the server with Ctrl+C. The root server exposes the repository to local clients; do not bind it to a public interface or leave it running unnecessarily. Test only trusted HTML, since preview resources may still make network requests.

Optional equivalent PowerShell build helper (subject to local script execution policy): `& "$App\build.ps1" -Serve`. It resolves centralized esbuild and derives the launch URL. Windows execution of this helper has not been verified here.

## Acceptance test plan

Use a disposable HTML file rather than an authoritative MGU article. Start with a copy containing UTF-8 text and a root-relative MGU stylesheet. Record actual results, including failures and browser console errors.

1. Compile, launch, confirm 0.2.0 header, and inspect browser console. Verify syntax highlighting, folding, embedded styles and live preview from 0.1.0.
2. New: edit template; verify dirty indicator, cancel a New operation, then confirm discard. Undo should not cross document boundaries.
3. Open: pick a test file; verify name, text, encoding and preview. Test Import separately; verify no writable handle is linked. Cancel open and confirm source remains unchanged.
4. Save: edit the opened disposable file, Save, approve any permission prompt, reopen it separately and verify the change on disk. Undo after Save should mark differing content dirty. Save again and confirm clean state.
5. Save as: write to a different disposable path; verify the new file, linked filename and original file unchanged. Modify linked file in another editor and test the external-change confirmation; cancel to preserve it.
6. Download: verify exported content and filename; dirty state remains if source differs from last opened/saved state. Test native picker cancellation, not silently downloading on cancellation. In unsupported browsers test Open/Import and Download fallback.
7. Copy source: paste into an independent editor and compare. Undo, redo, Find/replace and reindent; review indentation in whitespace-sensitive content and undo if needed.
8. Resize: drag separator, keyboard-focus it and use arrows/Home/End, reset split, narrow browser and verify stacked layout. Toggle Wrap with long source lines.
9. Live/manual: turn off Live, edit and verify preview stays unchanged; Run preview updates it; turn Live back on. On opening a new document in manual mode the previous preview is cleared.
10. Verify root-relative MGU assets resolve where present. Document any relative-path issues. Confirm a test script does not execute and forms remain blocked. Dynamic header/footer JavaScript is intentionally not supported.
11. Confirm dirty warning when closing/reloading after editing (browser may require prior interaction). Verify no warning for unchanged opened/saved documents. Test CRLF/BOM round-trip on a disposable file and invalid UTF-8 rejection.
12. Run npm audit and inspect root manifest/lockfile differences if changed. Record browser version, bundle size, and remaining limitations.

## Verification performed during authoring

JavaScript syntax checks and eleven dependency-free Node tests passed in the authoring environment (encoding, newline preservation, malformed input, byte comparison and splitter bounds). npm registry resolution failed here, so actual CodeMirror bundle compilation, PowerShell helper execution, browser behavior and native file-picker integration have not been verified for this candidate. Test on the existing MGU machine.

## Boundaries and next milestone

Reindent is not a full HTML formatter: it adjusts leading whitespace and requires review of whitespace-sensitive content. File picker and clipboard features depend on browser permissions and secure context. Source may be read as UTF-8 only; no arbitrary filesystem access. The sandbox continues to prohibit scripts and form submission; external resources may still be fetched. Directory-relative URLs in imported documents resolve relative to the editor page, not the imported file location. Advanced preview base configuration, JavaScript execution isolation, full formatting, multi-file documents and persistence are deferred. Public deployment and third-party licensing review are not yet approved. The generated bundle remains ignored by the starter Git policy pending a production build decision; explicitly include it in external backups.

After successful acceptance tests, stop and create external backup `mgu-advanced-code-editor/v0.2.0/`, copy the complete active application (including generated bundle) and MGU root package.json/package-lock.json, and write `README-savepoint-v0.2.0.md` with actual results. Only then begin v0.3.0.

References: https://codemirror.net/docs/ref/ ; https://developer.mozilla.org/en-US/docs/Web/API/Window/showSaveFilePicker ; https://developer.mozilla.org/en-US/docs/Web/API/Window/showOpenFilePicker .
