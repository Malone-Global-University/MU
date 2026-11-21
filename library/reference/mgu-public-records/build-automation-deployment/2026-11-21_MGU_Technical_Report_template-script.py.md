# MGU Technical Report
## Development, Architecture, and Operation of `template-script.py`

**Report date:** November 21, 2026  
**Initial development:** November 20, 2026  
**System:** Malone Global University (MGU) website project  
**Script location:** `C:\MGU\scripts\template-script.py`  
**Default scan root:** `C:\MGU`  
**Development status:** Implemented; local functional tests passed  
**Production status:** An initial MGU filesystem scan was observed but interrupted; no production `--apply` execution has been confirmed.

## 1. Executive Summary

`template-script.py` is a Python command-line maintenance utility developed to migrate older MGU webpages from hard-coded breadcrumb and bottom-page navigation markup to the university's shared JavaScript-driven navigation architecture. Its purpose is to reduce repetitive manual HTML edits while preserving the academic content and page structure that do not belong to the targeted legacy navigation elements.

The script recursively inspects `.html` and `.htm` files, reports eligible replacements in a default read-only scan, and performs changes only when explicitly invoked with `--apply`. Eligible updates create original-file backups, while ambiguous or unsupported legacy variations are reported for manual review. The current revision also supports directory exclusions, file-size limits, progress messages, and controlled handling of a keyboard interruption.

This is **markup migration tooling**, not a JavaScript loader, HTML template generator, or full HTML parser. It prepares the DOM placeholders that MGU's existing site scripts are expected to populate.

## 2. Origin and Development

MGU's website contains pages created across successive development periods. Earlier pages embedded breadcrumb links directly inside a `<nav class="breadcrumb" aria-label="Breadcrumb">` element and used a three-button navigation section at the end of `<main>`. The current shared-component model instead uses a uniquely identified breadcrumb element, a standardized main-content element, and a bottom-navigation placeholder.

The initial requirements were to (1) find those specific old structures, (2) replace them without rewriting unrelated content, (3) recurse through subfolders, and (4) provide a safe scan before any updates. The utility was designated `template-script.py` for installation in `C:\MGU\scripts`.

During the initial real-directory scan, the operator observed both `[NEEDS UPDATE]` and `[REVIEW]` results, including entries under `C:\MGU\desk`. The operation was stopped with `Ctrl+C`, generating a `KeyboardInterrupt` traceback in the earlier revision. A subsequent revision introduced optional directory exclusion, periodic progress reporting, a configurable maximum HTML-file size, and graceful interruption summaries. The original conservative replacement strategy was retained.

## 3. Migration Rules

### 3.1 Breadcrumb and main-content opening

The recognized legacy sequence comprises a breadcrumb `<nav>` with class `breadcrumb` and `aria-label="Breadcrumb"`, followed only by whitespace or HTML comments, then an unadorned `<main>` opening tag. Existing links inside the old breadcrumb are removed. The replacement inserts:

```html
<!--  ======== BREADCRUMB ======== -->
<nav class="breadcrumb" aria-label="Breadcrumb" id="breadcrumb"></nav>

<!--  ======== Main ======== -->
<main id="main-content" role="main">
```

The matcher tolerates different attribute ordering, letter case, multiline breadcrumb content, and intervening HTML comments. It intentionally does **not** consume arbitrary intervening elements or an existing `<main>` tag with additional attributes.

### 3.2 Bottom navigation and main-content closing

The recognized legacy bottom section contains exactly three `.btn` links, in order: `#top` / “Back to Top” (with an accepted upward-arrow representation), `/department/` / “Directory”, and `/` / “Site Home”. When that section immediately precedes the closing `</main>`, it becomes:

```html
<!-- ========== BOTTOM PAGE NAVIGATION ========== -->
<div id="bottom-nav-placeholder"></div>
</main>
```

The opening and closing replacements are evaluated independently. A page eligible for only one conversion can receive that conversion, provided no ambiguity is flagged anywhere in the file. Existing main-body article sections remain between the resulting opening and closing tags.

### 3.3 Conservative review policy

A file is marked `[REVIEW]` if recognizable legacy elements exist but do not match the precise supported structure, or if multiple matching legacy breadcrumb/main or bottom-navigation sequences occur. **Any review issue causes the entire file to be left unchanged**, even if another replacement on that same page otherwise matches. The script does not attempt to infer author intent or repair unusual markup automatically.

## 4. Program Architecture and Processing Sequence

The implementation uses only Python's standard library: `argparse`, `os`, `re`, `shutil`, `sys`, `uuid`, `datetime`, and `pathlib`. No third-party modules or web/network connections are required. Its core functions separate recognition, transformation, and file writing.

| Function or component | Responsibility |
|---|---|
| `BREADCRUMB_RE`, `OLD_TOP_RE`, `OLD_BOTTOM_RE` | Recognize target legacy navigation structures through constrained regular expressions. |
| `inspect()` | Identify applicable changes and manual-review reasons; leave unsupported cases untouched. |
| `decode_webpage()` and `newline_for()` | Decode UTF-8 input and detect the current line-ending convention. |
| `make_top()` and `make_bottom()` | Build standardized replacement markup and preserve relevant indentation. |
| `write_safely()` | Recheck source bytes, write an exclusive original backup, create a temporary replacement, then replace the source. |
| `main()` | Parse options, recurse through directories, apply limits and exclusions, print findings, and return an exit status. |

The program validates its command-line arguments and confirms the selected root directory exists. It then walks the directory tree with `os.walk()`, considering only `.html` and `.htm` extensions. It skips `.git` and `template-script-backups` directories by default, plus optional exclusion names supplied by the operator. Each HTML file is checked against the size threshold before it is read and decoded.

On eligible pages, `inspect()` builds modified text in memory. Scan mode only prints the eligible path and proposed changes. Apply mode compares the file with its originally read bytes, saves the original under a timestamped backup batch, and writes the replacement through a uniquely named temporary file in the same directory using `os.replace()`.

## 5. Operator Interface and Examples

| Option | Behavior |
|---|---|
| No options | Scan `C:\MGU` recursively; report findings without changing webpages. |
| `--apply` | Enable eligible file changes and original-file backups. |
| `--root PATH` | Limit scanning to a selected directory and its descendants. |
| `--exclude-dir NAME` | Exclude every directory with that name; may be supplied repeatedly. |
| `--max-file-mb MB` | Skip files larger than the threshold; default `20` MiB, `0` for unlimited. |
| `--progress-every N` | Print a progress line every `N` HTML files; default `500`, `0` to disable. |

**Scan the active department tree, without modifications:**

```powershell
py C:\MGU\scripts\template-script.py --root "C:\MGU\department"
```

**Scan all MGU folders except directories named `desk`:**

```powershell
py C:\MGU\scripts\template-script.py --exclude-dir desk
```

**Apply to the department tree after reviewing the scan:**

```powershell
py C:\MGU\scripts\template-script.py --root "C:\MGU\department" --apply
```

`desk` is **not** excluded automatically; the operator must specify `--exclude-dir desk` or select a root that does not contain it. The utility prints its findings to the console; it does not itself produce a CSV inventory or standalone scan report.

## 6. Original-File Backup and Write Safeguards

Backups are created **only in apply mode and only for changed pages**. For a run started from the standard installation path, the backup location is of the form:

```text
C:\MGU\scripts\template-script-backups\YYYYMMDD-HHMMSS-ffffff\
    department\computer-science\index.html.bak
```

The nested path mirrors each modified file's location relative to the selected scan root. Backup files are opened in exclusive-create mode (`xb`) to avoid silently overwriting an existing backup. Before saving, the writer re-reads the source and refuses to proceed if its bytes changed since the scan. It then writes an updated temporary file, copies the original file's permission mode, and replaces the original pathname using `os.replace()`.

The utility preserves recognized UTF-8 and UTF-8-BOM input and reproduces the existing newline style. It does **not** support arbitrary legacy character encodings, guarantee preservation of original modification timestamps, preserve full NTFS security metadata, or provide a built-in rollback command. An apply run is performed file by file: if the operation is interrupted, previously completed conversions remain in place, with their backups, while later files remain unprocessed.

## 7. Output, Exceptions, and Exit Status

The console distinguishes `[NEEDS UPDATE]` (scan candidate), `[UPDATED]` (successfully written page), `[REVIEW]` (unsupported or ambiguous old markup), `[SKIPPED: LARGE]`, and `[SKIPPED: ERROR]`. Progress updates show the number of HTML files examined and cumulative eligibility, review, and size-limit counts. A final summary reports scanned files, eligible files, updated files in apply mode, review count, oversized skips, and processing errors.

| Process outcome | Exit code / interpretation |
|---|---|
| Scan or apply completes without read/write errors | `0`; manual-review findings may still exist. |
| File or directory read/write/encoding errors were encountered | `1` after the scan finishes. |
| User stops the process with `Ctrl+C` | `130` and an incomplete-scan summary. |

No independent HTML-browser validation is performed. A successful update indicates that the specified markup patterns were replaced, not that the site's shared JavaScript or navigation links were verified in a browser.

## 8. Verification Record and Current Status

**Observed production-directory activity:** The operator shared a console excerpt showing multiple eligible and manual-review pages under `C:\MGU\desk`, followed by a keyboard interruption. This establishes that the utility was scanning actual MGU folders, but does not demonstrate completion of the full root scan or any production write operation. The revision with graceful interruption behavior was provided afterward.

**Source inspection:** The current `template-script.py` file was reopened and reviewed to confirm the implementation, supported options, backup behavior, exclusion rules, and summary/exit handling described here.

**Independent local functional test, November 21, 2026:** A temporary project tree was constructed containing a UTF-8-BOM, CRLF-formatted legacy webpage in a subfolder, a deliberately nonmatching legacy page, and an excluded `desk` directory. A scan identified one eligible page and one review item without changing source bytes. An apply run converted the eligible page and wrote a `.bak` file matching its original bytes; the manual-review and excluded pages remained unchanged. The converted page retained its BOM, CRLF line endings, and article body. A subsequent scan reported no further update requirement for that page. These results are development-level checks, not a full MGU deployment audit.

**Outstanding production checks:** Complete a selected-root scan, review manual exceptions, run `--apply` when approved, compare representative old/new pages, and confirm live breadcrumb and bottom-navigation population in the browser. No completed website-wide conversion is claimed in this report.

## 9. Operational Limitations and Change-Control Guidance

1. The utility relies on intentionally narrow regular-expression patterns rather than a complete HTML document parser. Formatting variations, extra attributes, or alternate button arrangements may require manual treatment or a later rule revision.
2. It changes the HTML placeholder structure only. The appropriate MGU shared header/main JavaScript and bottom navigation loader must already be present and functioning for visible navigation to appear.
3. It does not produce a manifest, CSV report, automated restoration procedure, cryptographic file comparison, or functional link audit. Separate tools or review procedures are needed for those functions.
4. The standard-root scan includes `C:\MGU\desk` unless explicitly excluded. Limit production changes to active site trees or pass the exclusion argument where appropriate.
5. Preserve each timestamped backup batch until the corresponding changed webpages have been accepted. Since a backup mirrors the **selected root**, keep the invocation and root path with the batch as part of operational records.
6. The November 20, 2026 full MGU pre-modernization project backup is a separate baseline. Script-level `.bak` files support individual-page recovery; neither replaces the other.

## 10. Conclusion

`template-script.py` provides a controlled, repeatable migration path from legacy static HTML navigation toward MGU's standardized dynamic breadcrumb and bottom-navigation placeholders. Its principal engineering strengths are the default read-only scan, constrained pattern matching, explicit approval through `--apply`, file-by-file backups, conservative manual-review treatment, recursive scope selection, and predictable reporting of interruptions and processing errors.

The implementation and local tests are complete. Actual use against MGU's live directory was observed only in an interrupted scan, and broader conversion or browser-level acceptance has not yet been demonstrated. The script is therefore **ready for controlled deployment and verification**, not documented as fully deployed.

**Document classification:** MGU website engineering / template modernization and maintenance automation.  
**Prepared from:** The current `template-script.py` source, the operator's MGU scan output, and a November 21, 2026 local functional test.  
**Status:** Technical report issued November 21, 2026.
