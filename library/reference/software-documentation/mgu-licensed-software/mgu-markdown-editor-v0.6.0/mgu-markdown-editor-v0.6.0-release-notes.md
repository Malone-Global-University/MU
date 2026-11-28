# MGU Markdown Editor v0.6.0 — Release Notes

November 27, 2026 | Development candidate

## New features

- Local recovery autosave (on by default; approximately 450 ms after edits, with a best-effort flush when the tab is hidden or closed).
- Automatic restoration of the most recently stored workspace on refresh/reopen, including Markdown, filename and saved baseline. Unsaved warnings remain active.
- Keep draft: up to eight manually named browser copies; open or remove each independently.
- Recent documents: up to five snapshots of successful Open and native Save operations; open copies rather than original disk files.
- Persistent editor settings: live preview, synchronized scrolling, word wrap, pane split, source/preview font sizes, publication preset, custom CSS, HTML format, export-link setting and PDF page setup/metadata.
- Disable autosave or clear local document copies without deleting the current text or disk files.
- Validated storage records, capacity checks, storage failure reporting and best-effort cross-tab conflict detection.
- Retains v0.5.0 publishing features and incorporates the corrected v0.5.0 tests. No additional npm dependencies.

## Install and build (Windows PowerShell 5.1)

Extract `mgu-markdown-editor-v0.6.0.zip` into:

```text
C:\MGU\library\reference\software-documentation\mgu-licensed-software\
```

The ZIP already includes the versioned folder. Do not overwrite v0.5.0. Existing v0.5.0 root dependencies are sufficient. If installing on a fresh machine, use the archived root package.json and package-lock.json with `npm ci` from C:\MGU (this replaces node_modules; do not do so unnecessarily on a shared development machine).

```powershell
$Project = "C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v0.6.0"
Set-Location $Project
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\build.ps1
```

Review the trusted script before bypassing process-level execution policy. Expected: 61 tests pass, both bundles build and standalone API checks pass. No test patch is required.

If the local server is not already running, start it from a separate PowerShell window:

```powershell
Set-Location C:\MGU
& ".\node_modules\.bin\esbuild.cmd" --servedir="C:\MGU" --serve=127.0.0.1:8000
```

Open http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v0.6.0/

## Verification and limitations

- 48 inherited tests and 13 new tests. All 32 dependency-free tests passed here; five test files containing the other 29 cases could not load because markdown-it/KaTeX are not installed in this environment. Full regression and bundles remain pending local execution. Syntax checks passed.
- Local storage is browser/profile/origin-specific and unencrypted by the application. Same-origin scripts can access it. Clearing browser data, private browsing, quota exhaustion, or changing host/port can remove or make it unavailable. Do not rely on it as the only copy or store sensitive documents without considering these limits.
- Local autosave is NOT a disk save. No original file handles survive reload; Save prompts for a file. Recent entries are stored content snapshots, not a live file history. No cloud sync, filesystem autosave, version history or multi-tab collaboration. A simultaneous cross-tab write race is not guaranteed to be prevented; use one tab.
- Each source/saved baseline or local copy is limited to 500,000 UTF-16 units, total serialized record 1,500,000 units, and browser quota may be lower. No truncation; on failure, the previous stored snapshot remains and a warning appears. The rendering limit remains 200,000 units. Save oversized work to disk; remove unused copies to free space. If recovery is stale after a failure, don't reload until disk Save succeeds.
- Turning off recovery removes the active snapshot and stops automatic recent copies; kept and existing recent copies remain. Clear local document data removes these copies and disables recovery, but retains preferences including PDF metadata. Preferences are global to this version, not per-file. Cursor snapshot is captured with recovery writes; undo history and scroll position are not retained.
- PDF printing behavior remains browser-dependent; prefer Chrome Save as PDF for searchable text and links. Direct command-line utility remains available as in v0.5.0.

## Short acceptance check

1. Run build; confirm 61/61 and standalone checks.
2. Edit disposable text, wait for Local recovery saved, refresh (accept unsaved warning), confirm the exact text and unsaved state recover.
3. Change font size, word wrap and Page Setup, reload and confirm persistence.
4. Keep a draft, New/Discard, then open the draft from Drafts & recent. Save As to a disposable file and reopen it; inspect the recent list.
5. Open Print layout or generate a sample PDF. Verify basic rendering still works. Clear disposable local copies if desired.

After acceptance, archive the entire versioned folder including generated bundles and root npm manifests on the external backup drive. Proceed to v1.0.0 consolidation.
