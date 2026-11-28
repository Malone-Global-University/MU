# MGU Encyclopedia Publishing System (MEPS) v0.1.0

**Release status:** Implementation candidate — preview only; local integration acceptance pending.  
**Date:** 2026-11-28  
**Classification:** Internal MGU website infrastructure; not a public freeware package.  
**Repository:** `C:\MGU\tools\encyclopedia-publisher\`

## 1. Purpose and scope

This milestone converts one explicitly selected Encyclopedia Markdown article into a complete static HTML preview using MGU's independent website Markdown renderer v1.0.0. It preserves the article's hierarchy and authoritative Markdown file. The generated page includes the current shared header/footer loaders, breadcrumb and bottom navigation placeholders, a single H1, a heading-linked table of contents, scoped article CSS, candidate canonical URL and known editorial dates. Output goes only under `.mgu-build/encyclopedia/preview/`, with `noindex, nofollow`.

The original release and this integration correction do not contain legacy scripts, a root package manifest, Netlify changes, a second metadata standard, or a production publishing command. Batch discovery, index generation, JSON catalog, Pagefind, production promotion and persistent publication dates are subsequent milestones. No live article or navigation page is modified. The test fixture is a snapshot of the previously supplied Cab Calloway article; it is not installed into the Encyclopedia.

### Acceptance limitations

- The actual final `mgu-article-metadata-standard.md` was not accessible during packaging. The metadata adapter implements structural YAML validation and a provisional mapping of the fields discussed during planning. It accepts legacy articles for preview, reports unknown or missing data and preserves classification text. Every preview explicitly reports `SCHEMA_PENDING`. **Do not treat this as conformance to the final standard.** Before locking v0.1.0, compare `src/metadata.mjs` and its tests against the approved file and encode its exact fields, defaults, dates and compatibility rules.
- The integration correction adds `component/mgu-markdown-renderer.mjs`, an independent readable website module. It imports the installed root npm package `markdown-it` only; the old editor distribution checksum and bundle-specific notices gate have been removed. npm registry access and the installed dependencies were unavailable during correction packaging; the new renderer and dependency-based acceptance tests must be executed locally. No production or visual acceptance is claimed.
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

### Website renderer integration correction (2026-11-28)

Extract `meps-v0.1.0-renderer-fix.zip` into `C:\MGU` with `-Force` after preserving local edits. It replaces the publisher configuration, loader, rendering adapter, acceptance tests and README, and adds the new component and renderer tests. It does not delete the existing `component/renderer.mjs`; after checking its consumers, archive the old file rather than maintain competing website renderers. Markdown Editor releases remain untouched.

The only central Markdown renderer used by MEPS is `component/mgu-markdown-renderer.mjs`. The renderer uses `markdown-it@15.0.3` from the existing root npm installation. `yaml@2.8.2` and `parse5@7.3.0` remain publisher dependencies. No new installation or root manifest replacement is needed when these packages are already installed. The renderer exposes `renderMarkdown` and `inspectMarkdown`; the publisher validates its name, version and API, rather than the byte size or checksum of an unrelated editor distribution. Preserve the root lockfile and npm dependency licenses for reproducibility. This readable module is designed for Node.js build-time execution; direct browser use would require resolving the bare npm import through a browser bundle or import map. Published HTML needs no Markdown engine in the browser.

```powershell
Set-Location C:\MGU
node --input-type=module -e "import * as r from './component/mgu-markdown-renderer.mjs'; console.log(r.RENDERER_NAME, r.RENDERER_VERSION)"
node --test .\tools\encyclopedia-publisher\tests\website-renderer.test.mjs
```

The missing editor extension source was not available for exact migration. Standard Markdown tables, fences and strikethrough are enabled through markdown-it. The new renderer preserves supported TeX delimiters and source as escaped text with a warning; full math typesetting and the old custom double-rule/page-break behavior are not reproduced. Raw HTML and images remain prohibited in article publication. Ordinary horizontal rules are supported. Heading IDs retain the original sequential convention. No separate `extended-markdown.mjs` is needed.

### Article presentation refinement (2026-11-28)

After the renderer correction, apply `meps-v0.1.0-presentation-fix.zip` over the existing installation, preserving any local edits first. It changes only the article template, scoped stylesheet, rendering adapter, template assembly, validation, acceptance tests and this README. No new npm dependencies or renderer changes are required.

The standard MGU `.hero` appears between the header and breadcrumbs. The validated Markdown H1 (or metadata title) is shown once in the hero; its existing heading anchor is retained. The existing `description` supplies the optional subtitle; legacy sources without one remain title-only. Markdown is unchanged. Article H2 headings use the shared `--accent` variable with a thin accent rule. The independently scrolling contents list has a non-scrolling Back to top control that immediately resets both the page and the contents list. Native `#top` remains the fallback if JavaScript is unavailable. The shared header, footer, breadcrumbs and bottom navigation remain intact.

Rebuild the preview from Markdown and refresh the browser. Do not manually edit the generated HTML. Test heading colors in both themes, the hero, exactly one H1, section links, back-to-top after scrolling both the page and the contents list, and a narrow viewport. Existing legacy metadata and renderer limitations still apply. This refinement does not change the release scope or constitute local visual acceptance.

## 3. Run the first article build

From `C:\MGU`:

```powershell
$article = 'library/encyclopedia/biographies/entertainment-figures/cab-calloway.md'
node .\tools\encyclopedia-publisher\build.mjs --source $article --dry-run
```

Confirm the exit status (`$LASTEXITCODE` must be 0). The dry run reads the file, checks paths, renderer identity and shared component assets, parses YAML, renders the body, verifies generated HTML and checks preview ownership. It does not create the preview directory or change any article. Warnings about legacy or missing metadata are expected with the older fixture; the schema-pending warning remains until reconciliation.

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
node --test .\tools\encyclopedia-publisher\tests\website-renderer.test.mjs
node --test .\tools\encyclopedia-publisher\tests\acceptance.test.mjs
```

Core tests use isolated temporary directories, including overwrite protection, case collision, symlink/junction checks, UTF-8 and failure recovery. The acceptance suite additionally requires the actual renderer and dependencies; it checks YAML, unsupported image and HTML syntax, unsafe links, metadata escaping, outlines, actual fixture content and repository article source integrity. Run the real article dry run and preview even after the suite passes. Review browser rendering of biography tables, references, one title, table-of-contents links, header, footer, breadcrumbs, bottom navigation, light/dark themes and mobile width. Inspect network errors. Verify the article's pre/post SHA-256 and ensure `git status --short` shows only intended software/dependency changes.

Acceptance is not complete until schema reconciliation, both suites, preview inspection and source preservation pass. Archive the verified project, relevant root npm manifests/lockfile, the website renderer and applicable npm dependency licenses, and README on your external backup drive (choose its actual drive letter). Do not advance to v0.2.0 until the gate is accepted.

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
  tests/website-renderer.test.mjs
  tests/acceptance.test.mjs
  tests/fixtures/cab-calloway-legacy.md
component/encyclopedia/article.css
component/mgu-markdown-renderer.mjs
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

## Presentation refinement: opening overview

When the article starts with unheaded prose (after the leading H1 is moved to the hero), MEPS inserts an H2 Overview in generated HTML and the corresponding TOC entry. Existing opening headings are retained, and source Markdown is not edited. The heading inherits the existing article H2 accent CSS. The hero subtitle is the authored YAML `description`; legacy articles without a description have no subtitle until the author adds one. No summary is invented. The renderer and shared CSS are unchanged. This patch assumes the previous v0.1.0 renderer and presentation corrections are installed.
