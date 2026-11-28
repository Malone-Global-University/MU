# MGU Markdown Editor and Rendering Engine — v0.3.0 Release Notes

**Date:** November 27, 2026  
**Package:** `mgu-markdown-editor-v0.3.0.zip`  
**Previous version:** v0.2.0 (locked)  
**Status:** Built successfully; 27/27 automated tests passed after test correction. Manual smoke testing and release lock pending.

## 1. New features

- Markdown tables with column alignment.
- Fenced code blocks with optional language labels.
- Inline and display mathematical notation using KaTeX and native MathML.
- Strikethrough formatting (`~~text~~`).
- Double horizontal rule (`:::mgu-double-rule`), an MGU-specific Markdown extension.
- Formatting toolbar additions for strikethrough, code blocks, mathematics and double rules.
- Word Wrap On/Off in the source editor.
- Independent source and preview font-size controls (12–32 px), with defaults of 16 px and 18 px respectively.
- Larger toolbar and status bar fonts, with a Reset Display control.
- Improved filename normalization for suggested filenames and downloads.

Existing v0.2.0 editing, clipboard, file management, live/manual preview, synchronized scrolling and unsaved changes protection remain in scope. The proposed v0.2.1 refinements have been consolidated into this release.

## 2. Installation and build

### Step 1 — Extract the ZIP

Extract `mgu-markdown-editor-v0.3.0.zip` into:

```text
C:\MGU\library\reference\software-documentation\mgu-licensed-software\
```

The ZIP already contains the version directory. Do not create a second nested `mgu-markdown-editor-v0.3.0` folder. Retain the locked v0.2.0 application.

### Step 2 — Install the new dependency

Run in Windows PowerShell 5.1. Reuse the working v0.2.0 root npm dependencies. If KaTeX 0.16 is not already installed, preserve the root `package.json` and `package-lock.json`, then run:

```powershell
Set-Location C:\MGU
npm install --save-exact katex@0.16
```

The installation reported one low-severity npm audit finding. Review with `npm audit`; do not automatically run `npm audit fix --force`.

### Step 3 — Correct the original ZIP's security test

The original ZIP contains a false-positive assertion that matches forbidden attribute names inside escaped, nonexecutable text. Apply the following one-time test-only patch to a fresh extraction. Skip this step if the test has already been corrected. It does not alter the application or its security restrictions.

```powershell
$Project = 'C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v0.3.0'
$TestFile = Join-Path $Project 'tests\extended-markdown.test.mjs'
$Old = 'assert.doesNotMatch(h,/<(?:a|img|script|iframe)\b|\s(?:href|src|onerror|onclick|id)\s*=/i);assert.match(h,/preview-link/);assert.match(h,/&lt;img/);'
$New = @'
const tags = h.match(/<[a-z][^>]*>/gi) ?? [];
  for (const tag of tags) {
    assert.doesNotMatch(tag, /<(?:a|img|script|iframe)\b|\s(?:href|src|onerror|onclick|id)\s*=/i);
  }
  assert.match(h, /preview-link/);
  assert.match(h, /&lt;img/);
'@
$Source = [System.IO.File]::ReadAllText($TestFile)
if ($Source.Contains($Old)) {
    [System.IO.File]::WriteAllText($TestFile, $Source.Replace($Old, $New), [System.Text.UTF8Encoding]::new($false))
} elseif (-not $Source.Contains('const tags = h.match(/<[a-z][^>]*>/gi) ?? [];')) {
    throw 'Unexpected test file contents. Inspect the file before proceeding.'
}
```

### Step 4 — Build the application

```powershell
$Project = 'C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v0.3.0'
Set-Location $Project
.\build.ps1
```

If PowerShell blocks the trusted build script because it is unsigned, use the process-only execution policy adjustment and retry:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\build.ps1
```

Expected result: 27 tests pass, zero fail, and `public/editor.js` is generated. Do not continue if the build fails.

### Step 5 — Start the local server

Reuse the existing server if it is running. Otherwise, open a separate PowerShell window and execute:

```powershell
Set-Location C:\MGU
& '.\node_modules\.bin\esbuild.cmd' --servedir='C:\MGU' --serve=127.0.0.1:8000
```

Open the [MGU Markdown Editor v0.3.0](http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v0.3.0/) in the browser. Do not launch via `file://`.

## 3. Verification and limitations

The local build initially returned 26/27 tests because of the false-positive security assertion. After correcting the test, the developer reported 27/27 passing and successful bundle generation. Manual browser acceptance has not yet been confirmed.

For a brief manual inspection, open the included `smoke-test.md`, check the new rendering and display controls, and save/reopen a disposable document. If satisfactory, lock the build and preserve the corrected source, generated bundle, tests and root npm manifests externally.

The double rule is not standard Markdown; fenced code is not executed. PDF export and automatic document persistence remain planned for future versions. The existing preview security restrictions and 200,000 UTF-16 code-unit input limit remain in place.
