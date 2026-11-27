# MGU Markdown Editor v0.5.0 — Release Notes

November 27, 2026 | Development candidate | WA-008

## 1. New features

- PDF publishing toolbar: Page setup, Print layout, Print / Save PDF, Download print HTML.
- Letter, A4 and Legal paper; portrait or landscape; independent margins (10–35 mm); print font (9–18 pt).
- Title, author, institution, subject and keywords in the print document; optional cover page and linked heading-based contents.
- Running header/footer and page-number requests through CSS paged media; a recent Chromium browser is recommended.
- Manual page break (`:::mgu-page-break` on its own line); toolbar inserts the marker without replacing source text. It is an MGU extension, not standard Markdown.
- Print-ready tables, code wrapping, mathematical notation, publication presets and restricted custom CSS.
- Standalone `exportPrintDocument()` API in `public/renderer.mjs`; optional direct local PDF generation using the installed Chromium browser and the supplied Node script. No additional npm packages.
- Retains v0.4.0 source-level editor functionality; existing Markdown and HTML export remain available.

## 2. Install and build

Extract the ZIP into `C:\MGU\library\reference\software-documentation\mgu-licensed-software\`. The archive already includes the `mgu-markdown-editor-v0.5.0` folder. Do not create a second nested version folder. If v0.4.0 built successfully, use the existing root npm dependencies. No new npm installation is required. Preserve the root package.json and package-lock.json with your release backup.

```powershell
$Project = 'C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v0.5.0'
Set-Location $Project
# For this trusted, reviewed build script only; applies to the current shell:
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\build.ps1
```

The build runs 48 automated tests, bundles the editor and standalone renderer, then checks independent renderer import. No manual patch to the v0.3.0 security test is required.

If the local development server is not already running, open another PowerShell window:

```powershell
Set-Location C:\MGU
& '.\node_modules\.bin\esbuild.cmd' --servedir='C:\MGU' --serve=127.0.0.1:8000
```

Open `http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v0.5.0/`.

## 3. Export a PDF

Open `smoke-test.md`, choose the publication style and click **Page setup**. Enable the cover and contents, choose a paper size, set a title, header/footer and page numbering, and click Apply. Click **Print / Save PDF**. In Chrome or Edge choose the Save as PDF destination, check page size/orientation and margins, and inspect pagination. Disable the browser's own Headers and footers if they duplicate the MGU running text; CSS page-margin boxes require a compatible recent browser. Enable background graphics when needed. If the browser does not open the print dialog automatically, use Ctrl+P in the opened document. **Print layout** opens the document without automatically printing. If popups are blocked, use **Download print HTML**, open the saved HTML and press Ctrl+P.

### Optional direct PDF file (no print dialog)

After the build, run the bundled local command. Use a new output filename; existing files are never overwritten. It reads a saved Markdown file rather than the currently unsaved editor buffer. The example settings JSON is optional and independent of the browser settings. The command searches installed Edge/Chrome and uses an isolated temporary browser profile; specify the browser executable explicitly as the fourth argument if discovery fails.

```powershell
Set-Location $Project
$Output = Join-Path $env:TEMP 'mgu-v0.5.0-test.pdf'
node .\tools\export-pdf.mjs .\smoke-test.md $Output .\examples\pdf-settings.json
if ($LASTEXITCODE -eq 0) { Invoke-Item $Output }
```

Choose another output name if it already exists. Optional explicit browser path (replace with your actual path):

```powershell
node .\tools\export-pdf.mjs .\smoke-test.md $Output .\examples\pdf-settings.json 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe'
```

## 4. Verification and limitations

19/19 dependency-free tests passed in the authoring environment; 29 dependency-based tests and bundle generation require your existing local npm installation. JavaScript syntax checks passed. Browser PDF generation could not be verified here (the container Chromium process timed out). No claim of end-to-end PDF export verification is made. The user's v0.4.0 functional acceptance is the baseline; the complete local v0.5.0 suite is still required.

Brief smoke test: run build; inspect PDF controls; export the supplied document with cover, contents, table, equation and manual page break; open the resulting PDF and check selectable text and page numbers; save and reopen a disposable Markdown file. If using the optional direct command, test it once. Record material defects only, then lock and archive if satisfactory.

Browser controls can override CSS paper size and margins; margin boxes and PDF links depend on browser support. The print HTML contains document metadata, but Chromium may not transfer all fields to the PDF metadata. Linked contents do not include automatically calculated page numbers. PDF bookmarks, arbitrary page templates, PDF editing, embedding images and professional prepress features are not guaranteed. Autosave/session recovery is reserved for v0.6.0. Export does not change Markdown or its saved state.
