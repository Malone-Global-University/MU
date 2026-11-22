# WA-007 — MGU Canonical URL Standard

**Malone Global University**  
**MGU Public Records · Website Architecture**  
**Document ID:** WA-007  
**Document class:** Adopted Website Architecture Standard  
**Adoption date:** November 22, 2026  
**Version:** 1.0  
**Policy status:** Adopted  
**Implementation status:** Phased migration; completion has not been established  
**Official filing collection:** [Website Architecture, MGU Public Records](https://maloneuniversity.org/library/reference/mgu-public-records/website-architecture/)

> **Decision of record.** MGU adopts minimal, extensionless public addresses for ordinary HTML webpages and directory-style addresses for HTML index pages. The preferred URL for `folder/index.html` is `folder/`; the preferred URL for `folder/page.html` is `folder/page`. This applies to public links and page URL metadata, not to the physical filenames on the server.

## 1. Purpose and authority

This record establishes a single institutional convention for the public addresses of HTML webpages on the Malone Global University (MGU) website. It resolves inconsistent historical practices in which the same page could be linked through `index.html`, `index`, a directory-ending slash, a `.html` filename, or an extensionless page route.

The standard is intended to simplify public navigation, reduce unnecessary variations in URL metadata, support consistent site discovery, and make future automation more predictable. It is an **adopted design and governance standard**; it is not a claim that every existing MGU page has already been migrated. This document records the decision and its implementation requirements. Operational scripts and detailed execution logs remain separate records.

The official website origin used in this standard is **`https://maloneuniversity.org`**. The convention governs independently published HTML pages unless an expressly documented exception applies.

## 2. Governing rules

**Rule 1 — Directory indexes.** Where a directory is served by `index.html`, its preferred public address is the directory path ending in a forward slash. Omit both `/index` and `/index.html` from the public URL.

**Rule 2 — Ordinary HTML pages.** For an ordinary HTML file, retain its directory hierarchy and filename stem, but omit the terminal `.html` from the public URL. Do not append a trailing slash to that ordinary page route merely for appearance.

**Rule 3 — Website origin.** Use HTTPS and the official non-`www` origin for full absolute URLs. Public links may be root-relative when appropriate; canonical and `og:url` metadata must use complete absolute URLs.

**Rule 4 — Canonical consistency.** A published, indexable HTML page normally identifies its approved address once in a `<link rel="canonical">` element inside `<head>`. Its `og:url`, navigation links, ordinary internal HTML-page links, and sitemap entries should consistently use that approved address.

**Rule 5 — Physical files are unchanged.** The URL convention does not rename, delete, or conceal files in the project directory. `index.html` and `page.html` remain the physical files unless a separate engineering decision changes them.

**Rule 6 — Non-HTML resources and special routes.** Do not strip extensions from `.css`, `.js`, `.pdf`, images, downloads, or other non-HTML resources. Application routes, parameterized dashboard URLs, API endpoints, and deliberate redirects require route-specific review; they must not be altered by a blanket string replacement.

**Rule 7 — Safe migration.** Resolve conflicts, verify server routing, and preserve existing inbound links through appropriate redirects or compatibility mechanisms. An HTML canonical declaration is not itself a redirect or server routing rule.

## 3. Official URL mapping

| Physical file or location relative to MGU website root | Approved public path |
|:--|:--|
| `index.html` | `/` |
| `community/index.html` | `/community/` |
| `community/clubs/index.html` | `/community/clubs/` |
| `community/clubs/mppsa/index.html` | `/community/clubs/mppsa/` |
| `community/clubs/mppsa/political-stances.html` | `/community/clubs/mppsa/political-stances` |
| `library/encyclopedia/computer-science/basics/ram.html` | `/library/encyclopedia/computer-science/basics/ram` |
| `library/encyclopedia/computer-science/networking-systems/cloud-computing-articles/index.html` | `/library/encyclopedia/computer-science/networking-systems/cloud-computing-articles/` |

For a general directory `P` and HTML filename stem `name`, the corresponding transformation is:

- `P/index.html` → `/P/`
- `P/name.html` → `/P/name`

These examples illustrate mapping, **not** a requirement to move files to new directories. A mismatch between an expected route and a declared canonical is a review condition, not automatic proof that the file is misplaced.

## 4. Metadata and hyperlink requirements

### 4.1 Canonical declaration

For an independently published, indexable page, place the following declaration in its HTML `<head>`, substituting the page's approved URL:

```html
<link rel="canonical" href="https://maloneuniversity.org/community/clubs/mppsa/">
```

Use an absolute HTTPS address, without query strings or fragments unless a separately approved application-specific policy requires a different approach. Avoid multiple conflicting canonical declarations. A self-referencing canonical is the default for distinct indexable pages; genuine mirrors and intentional duplicates should identify the approved primary page instead of being assigned an indiscriminate self-reference.

### 4.2 Open Graph and other metadata

Open Graph's `og:url` must identify the same approved public address as the HTML canonical declaration:

```html
<meta property="og:url" content="https://maloneuniversity.org/community/clubs/mppsa/">
```

Where other metadata contains a page-identity URL, such as an appropriate structured-data `url` property, that value should also be checked for consistency. Asset URLs such as `og:image` are separate resources and retain their appropriate filenames and extensions.

### 4.3 Internal navigation

Use the preferred public address in ordinary HTML-page hyperlinks, including headers, footers, breadcrumbs, indexes, category pages, article cross-references, and in-body links:

```html
<a href="/community/clubs/mppsa/">MPPSA</a>
<a href="/community/clubs/mppsa/political-stances">Political Stances</a>
```

When changing links, preserve meaningful query parameters, fragment identifiers, and any application-specific routing semantics. For example, `#section-two` can remain attached to the updated page path. An application such as a lesson dashboard using `?content=` is not an ordinary static-file URL and requires a separate routing decision.

### 4.4 Sitemaps and external publication references

Sitemaps and newly issued public references should list the approved address, not a second `.html` or `/index` variant. Previously published external links are not under MGU's direct control; compatibility must be managed through working old routes or permanent redirects when feasible.

## 5. Routing, redirects, and publication integrity

The approved public form is meaningful only when the web server or application actually serves the intended resource at that address. Before changing page links or metadata at scale, verify that:

1. `/folder/` resolves to the intended directory's `index.html` rather than a different resource.
2. `/folder/page` resolves to the intended `page.html` and does not conflict with a physical directory or another application route.
3. Each preferred page URL returns a usable response and the expected content.
4. Previously published `/folder/index.html`, `/folder/index`, and `/folder/page.html` variants are handled compatibly and, when appropriate, permanently redirected to the preferred URL.
5. Redirects do not create loops, redirect chains, or unrelated-page substitutions.
6. Canonical elements, Open Graph metadata, internal links, and sitemaps are consistent with the live routing outcome.

Canonical metadata indicates a preferred URL to search engines; it does **not** force search engines to select that address and does **not** replace a redirect. MGU has adopted this convention for consistency and maintainability, **not** because removing `.html` is a guaranteed search-ranking advantage.

## 6. Scope and exceptions

This standard applies to public HTML webpages throughout the MGU website, including relevant Community, Library, Department, Orientation, News, and other published collections. Its direct application depends on the URL actually representing an independently published page.

The following conditions require separate treatment rather than automatic conversion:

- **Shared components and fragments:** files that are included in pages but not intended as public standalone documents.
- **Non-public, administrative, archived, or development files:** indexing eligibility and public access must be resolved before assigning canonical metadata.
- **Mirrors, alternate editions, and deliberate duplicate pages:** the correct canonical destination is a content-governance determination, not necessarily the local file's own path.
- **Parameterized applications and dynamic routes:** query-based or application-generated URL identities must be assessed under their own routing design.
- **Non-HTML publications and resources:** PDFs, scripts, stylesheets, fonts, images, and downloads retain resource-appropriate URLs; this HTML-page convention does not eliminate their extensions.
- **Conflicting paths:** a filename stem that collides with a directory, application endpoint, or other published route must be reviewed before issuance.

Exceptions must be documented with their rationale and approved public destination. No migration utility should silently overwrite a conflicting existing canonical URL merely to match a file's current directory.

## 7. Implementation and control process

MGU shall adopt this convention through controlled, directory-by-directory remediation rather than indiscriminate website-wide rewriting.

**Phase A — Inventory and audit.** Use the independent `canonical-url.py` utility in read-only mode to enumerate HTML files, identify missing or conflicting metadata, and produce CSV records. Preserve the baseline output.

**Phase B — Exception review.** Resolve invalid HTML heads, mismatched locations, duplicates, inherited legacy metadata, intentional mirrors, and route collisions before initialization. Distinguish a misplaced file from an obsolete canonical declaration through editorial review.

**Phase C — Metadata alignment.** Add approved canonical declarations to eligible pages and reconcile `og:url` and other page-identity metadata. Existing conflicting values must be reviewed, not quietly overwritten.

**Phase D — Link and server migration.** Standardize public HTML-page links in templates, indexes, navigation, and content. Confirm routing, implement appropriate redirects for old URLs, and preserve queries, fragments, and non-HTML resources.

**Phase E — Verification and ongoing enforcement.** Re-run scoped audits, review exceptional records, test public URLs, and apply the standard to all future independently published HTML pages.

The canonical URL utility remains a **standalone audit and controlled-initialization tool**. It is not merged into the general template modernization scripts. Publishing status and remaining exceptions must be recorded separately from policy adoption.

## 8. Adoption context and implementation baseline

This decision follows a site audit process begun in November 2026. The first MGU-wide read-only scan on November 22 examined **17,737 HTML files**, demonstrating that a single bulk remediation would be difficult to review responsibly. The scope was therefore reduced to `/community/` for the first controlled implementation.

The Community baseline scan examined **102 HTML files**: **14** matched the extensionless/directory-style convention, **78** lacked canonical declarations, **6** used different URL formatting, **3** had declared-location mismatches, and **1** had an invalid HTML head. No HTML files were modified during this baseline scan. These figures describe a point-in-time audit, not a completed compliance certification.

By adopting the standard, MGU settles the *preferred public URL format* now while allowing the underlying migration, redirects, metadata remediation, and testing to be executed systematically. The use of shortened public addresses does not diminish the educational value of teaching learners how web servers resolve directory indexes and file extensions; that explanation belongs in instructional material rather than being encoded permanently into every hyperlink.

## 9. Maintenance, interpretation, and amendment

New public HTML pages should be issued using the approved URLs from the beginning. Future editorial, development, and auditing work must preserve the distinction among **physical file path**, **public URL**, and **declared canonical destination**. The file path identifies the stored resource; the public URL identifies the visitor-facing address; the canonical declaration states the preferred address for indexing and deduplication. These values should correspond when the page is an ordinary self-canonicalizing publication, but are not interchangeable in all circumstances.

Material exceptions, changes to the official host, a revision of trailing-slash policy, or changes to the relationship between file paths and application routes require an explicit amendment to this record or a superseding numbered Website Architecture document. Historical copies should remain identifiable by version and adoption date.

## 10. Filing and references

**Official filing classification:** `MGU Public Records / Website Architecture / WA-007`  
**Recommended PDF filename:** `wa-007-mgu-canonical-url-standard.pdf`  
**Companion Markdown filename:** `wa-007-mgu-canonical-url-standard.md`  
**Intended MGU website directory:** `/library/reference/mgu-public-records/website-architecture/`  
**Publication verification:** The PDF has been prepared for filing; upload to the MGU website and a live public PDF address have not been verified by this document.

### External technical references

1. Google Search Central, [How to Specify a Canonical with `rel="canonical"` and Other Methods](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls). Guidance on canonical declarations, consistent linking, sitemap references, and redirects.
2. Google Search Central, [What Is URL Canonicalization?](https://developers.google.com/search/docs/crawling-indexing/canonicalization). Explains canonicalization as search-engine selection rather than a binding instruction.
3. Google Search Central, [Redirects and Google Search](https://developers.google.com/search/docs/crawling-indexing/301-redirects). Guidance on directing former addresses to preferred destinations.
4. [The Open Graph Protocol](https://ogp.me/). Definition of `og:url` as the canonical URL of the represented object.
5. Malone Global University, [Website Architecture — MGU Public Records](https://maloneuniversity.org/library/reference/mgu-public-records/website-architecture/). Institutional filing collection and document classification.

---

**Record designation:** WA-007  
**Adopted:** November 22, 2026  
**End of record.**
