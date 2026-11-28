# MGU Encyclopedia Publishing System (MEPS) v0.1.0

**Release status:** Implementation candidate — preview only; local integration acceptance pending.  
**Date:** 2026-11-28  
**Classification:** Internal MGU website infrastructure; not a public freeware package.  
**Repository:** `C:\MGU\tools\encyclopedia-publisher\`

## 1. Purpose and scope

This milestone converts one explicitly selected Encyclopedia Markdown article into a complete static HTML preview using MGU's existing v1.1.0 rendering bundle. It preserves the article's hierarchy and authoritative Markdown file. The generated page includes the current shared header/footer loaders, breadcrumb and bottom navigation placeholders, a single H1, a heading-linked table of contents, scoped article CSS, candidate canonical URL and known editorial dates. Output goes only under `.mgu-build/encyclopedia/preview/`, with `noindex, nofollow`.

This ZIP does **not** contain a replacement central renderer, legacy scripts, a root package manifest, Netlify changes, a second metadata standard, or a production publishing command. Batch discovery, index generation, JSON catalog, Pagefind, production promotion and persistent publication dates are subsequent milestones. No live article or navigation page is modified. The test fixture is a snapshot of the previously supplied Cab Calloway article; it is not installed into the Encyclopedia.

### Acceptance limitations

- The actual final `mgu-article-metadata-standard.md` was not accessible during packaging. The metadata adapter implements structural YAML validation and a provisional mapping of the fields discussed during planning. It accepts legacy articles for preview, reports unknown or missing data and preserves classification text. Every preview explicitly reports `SCHEMA_PENDING`. **Do not treat this as conformance to the final standard.** Before locking v0.1.0, compare `src/metadata.mjs` and its tests against the approved file and encode its exact fields, defaults, dates and compatibility rules.
- The actual 385,726-byte production renderer, shared MGU assets and installed root npm lockfile were not available in the build environment. The publisher checks the previously verified v1.1.0 checksum and version in the user's repository. npm registry access was unavailable during packaging, so the dependency-based suite has not been executed here. No production or visual acceptance is claimed.
- 11 dependency-free integrity tests passed under Node.js 22.16.0 on Linux; syntax checks passed for all `.mjs` modules. Windows filesystem behavior, exact renderer behavior, live source article, dependencies and shared component appearance require the local checks below.

## 2. Installation in Windows PowerShell 5.1

Keep the approved specification, technical design and metadata standard in their established canonical locations. This archive contains only implementation files and this README. Do not overwrite existing approved documentation. Inspect the ZIP before extracting, especially if `component/encyclopedia/article.css` or publisher files already exist. Extract the ZIP directly into `C:\MGU` so the paths are preserved:

```powershell
Set-Location C:\MGU
# Replace the ZIP path with the downloaded file's actual location.
Expand-Archive -LiteralPath "$HOME\Downloads\mgu-encyclopedia-publishing-system-v0.1.0.zip" -DestinationPath C:\MGU
```

No `-Force` is used deliberately. If any destination file already exists, reconcile it manually; do not blindly overwrite shared CSS or existing source. The publisher expects the project at `tools/encyclopedia-publisher/` (no version subfolder). Confirm:

```powershell
Get-ChildItem .\tools\encyclopedia-publisher
Get-Item .\component\encyclopedia\article.css
node --version
npm --version
```

Node 22 LTS is the development baseline. Node 20+ may work but was not tested. The package requires no Python, Docker, backend or database.

### Central renderer prerequisite

The already verified production bundle must be installed at `C:\MGU\component\renderer.mjs`. A source module such as the 4,343-byte `src/renderer.mjs` is not an acceptable substitute. Verify the installed bundle and accompanying notices:

```powershell
Get-Item .\component\renderer.mjs | Select-Object FullName,Length
Get-FileHash .\component\renderer.mjs -Algorithm SHA256
Get-Item .\component\renderer-THIRD-PARTY-NOTICES.txt
node --input-type=module -e "import * as r from './component/renderer.mjs'; console.log(r.RENDERER_VERSION)"
```

Expected: 385,726 bytes, version `1.1.0`, SHA-256 `AE162B0FBB4DE7791CF9AFE05F60A3D1948E968B60743E8E458B40D0D1D93CA6`. If missing or mismatched, copy the already accepted bundle from `library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v1.1.0/dist/public/renderer.mjs` and the accompanying `dist/THIRD-PARTY-NOTICES.txt` (rename the latter to `component/renderer-THIRD-PARTY-NOTICES.txt`), then verify again. Preserve the old file if it contains local changes. Copy bytes directly; do not read and rewrite JavaScript through PowerShell text commands. If Git's line-ending normalization changes the bundle, restore verified bytes and review `.gitattributes` before committing; never weaken the hash gate to make a modified bundle pass.

### Install dependencies through the existing root package management arrangement

The package uses the `yaml` parser, `parse5` HTML parser and `markdown-it` solely for Markdown token inspection (the rendering output comes from MGU's own bundle). Proposed exact dependency baseline: `yaml@2.8.2`, `parse5@7.3.0`, `markdown-it@14.1.0`. This is a development dependency set, not a second rendering engine. The root package manifest and lockfile are not replaced or included in the ZIP.

```powershell
Set-Location C:\MGU
Get-Item .\package.json, .\package-lock.json
npm ls yaml parse5 markdown-it --depth=0
```

Review the root manifest first. If the three exact versions are already declared and installed, no installation is needed. If missing, and there is no incompatible existing dependency requirement, install only the needed packages (the following installs all three exact candidates):

```powershell
npm install --save-dev --save-exact yaml@2.8.2 parse5@7.3.0 markdown-it@14.1.0
```

If any existing dependency has a different version or incompatible requirement, stop and reconcile rather than silently downgrade the editor or other MGU software. Inspect `git diff -- package.json package-lock.json` after installation and preserve the verified root lockfile. If npm fails, do not continue to acceptance. `npm ci` may be used for subsequent reproducible restoration from the reviewed lockfile, not as a substitute for establishing that lockfile. Do not initialize a separate npm project inside the publisher directory.

## 3. Run the first article build

From `C:\MGU`:

```powershell
$article = 'library/encyclopedia/biographies/entertainment-figures/cab-calloway.md'
node .\tools\encyclopedia-publisher\build.mjs --source $article --dry-run
```

Confirm the exit status (`$LASTEXITCODE` must be 0). The dry run reads the file, checks paths, renderer identity, licensing notices and shared component assets, parses YAML, renders the body, verifies generated HTML and checks preview ownership. It does not create the preview directory or change any article. Warnings about legacy or missing metadata are expected with the older fixture; the schema-pending warning remains until reconciliation.

```powershell
node .\tools\encyclopedia-publisher\build.mjs --source $article
```

Expected preview path:

```text
C:\MGU\.mgu-build\encyclopedia\preview\library\encyclopedia\biographies\entertainment-figures\cab-calloway.html
```

The candidate public URL is `https://maloneuniversity.org/library/encyclopedia/biographies/entertainment-figures/cab-calloway`. Routing is not certified until deployment testing. Do not copy the preview HTML to the public tree; it contains a deliberate noindex directive and preview ownership marker. Unknown publication dates remain unknown. Rebuilding does not change dates.

### Browser preview

```powershell
node .\tools\encyclopedia-publisher\preview.mjs --source $article
```

Open `http://127.0.0.1:4173/` in your browser (redirects to the article); stop the server with Ctrl+C. The server binds only to loopback and exposes the selected preview plus whitelisted asset extensions beneath `component/`, `image/`, `font/` and `fonts/`. It does not serve the entire repository, production article routes, arbitrary files or directory listings. Some links to other pages and assets outside the allowed roots will not resolve in this single-page preview. It is not a public web server. Test shared header/footer using HTTP, not `file://`.

## 4. Automated and visual acceptance

```powershell
node --test .\tools\encyclopedia-publisher\tests\core.test.mjs
node --test .\tools\encyclopedia-publisher\tests\acceptance.test.mjs
```

Core tests use isolated temporary directories, including overwrite protection, case collision, symlink/junction checks, UTF-8 and failure recovery. The acceptance suite additionally requires the actual renderer and dependencies; it checks YAML, unsupported image and HTML syntax, unsafe links, metadata escaping, outlines, actual fixture content and repository article source integrity. Run the real article dry run and preview even after the suite passes. Review browser rendering of biography tables, references, one title, table-of-contents links, header, footer, breadcrumbs, bottom navigation, light/dark themes and mobile width. Inspect network errors. Verify the article's pre/post SHA-256 and ensure `git status --short` shows only intended software/dependency changes.

Acceptance is not complete until schema reconciliation, both suites, preview inspection and source preservation pass. Archive the verified project, relevant root npm manifests/lockfile, the exact renderer and notices, and README on your external backup drive (choose its actual drive letter). Do not advance to v0.2.0 until the gate is accepted.

## 5. Internal layout

```text
tools/encyclopedia-publisher/
  README.md
  config.json
  build.mjs
  preview.mjs
  src/       config, paths, discovery, metadata, rendering, template,
             validation, output ownership, diagnostics and reporting
  templates/article.html
  tests/core.test.mjs
  tests/acceptance.test.mjs
  tests/fixtures/cab-calloway-legacy.md
component/encyclopedia/article.css
```

The page template uses `/component/lib.css`, the existing header/footer loaders and `main.js`, and `/component/bottom-nav-loader.js`. Shared assets are not duplicated or modified by the build. All new CSS is scoped to the Encyclopedia article layout. The publisher is ESM, uses the central renderer's `outline` and `headingIds` options, and derives the source path and canonical identity without maintaining per-article JSON.

## 6. Failure policy and known restrictions

- The CLI accepts only one explicitly named, repository-relative lowercase kebab-case Markdown article under `library/encyclopedia/`. Directory indexes, legacy content roots, drafts, documentation and other excluded areas are rejected. This first-release naming constraint is intentionally narrow; it must be revisited if the real collection needs exceptions. No recursive scan or production write flag exists.
- YAML is parsed with unique keys and safe core schema. Aliases and custom tags are rejected; only provisional known fields are consumed. No source files are rewritten; no publication date is invented. Legacy classification labels remain in the article; subject tags are recovered when possible.
- Raw HTML and Markdown images in article prose are rejected, including reference-style images. Code examples remain valid. Math presentation and durable heading anchors are deferred. The renderer's 200,000 UTF-16 code-unit body limit applies. Literal links are preserved after scheme validation; complete cross-site link verification is deferred.
- Generated preview files carry a source identity and SHA-256 marker; unowned or externally edited files are never overwritten. The marker is an accidental-edit guard, not an authentication mechanism. A write lock and same-filesystem staging protect normal local concurrent builds; do not manually edit/move directories while running a build. A failed validated write should preserve the earlier preview. After an interrupted build, inspect and manually remove a stale `.write-lock` directory only after confirming no writer is active.
- The publisher and preview workspace must be excluded from public deployment, and internal documents must not be served merely because they are in a repository. A Git ignore rule is not a deployment exclusion. Review Netlify's actual publish configuration before deploying or committing these internal directories to any public source repository. No deployment configuration is changed by this release.

## 7. Next release

v0.2.0 adds safe batch discovery and generation after v0.1.0 acceptance. The later global search, catalog and generated directory systems remain outside this release. Preserve the verified baseline before developing those features.
