# MGU Markdown Editor v0.6.0 — Engineering Specification

Goal: complete local persistence as the last principal feature milestone before v1.0.0. Baseline: v0.5.0 with corrected PDF assertions. No new dependencies. Preserve standalone renderer, publishing, source file operations, preview security and dirty-state protection.

## Requirements

| ID | Requirement | Acceptance |
|---|---|---|
| WS-01 | Store active source, name, saved baseline and selection with local autosave | Refresh recovers last committed source; dirty state preserved; disk handle absent |
| WS-02 | Autosave debounce and lifecycle flush | Storage status distinguishes pending, saved and failure; no disk write |
| WS-03 | Local kept drafts | Explicit named snapshots; up to eight; open/remove; no automatic eviction |
| WS-04 | Recent snapshots | Latest five successful open/save copies; identical name/content deduplicated; reopen as independent copy |
| WS-05 | Persist display, export and publication controls | Validated settings restored on startup; unsafe CSS rejected |
| WS-06 | Opt out and clear document copies | Remove active snapshot and disable new automatic captures; clear action deletes local document copies only |
| WS-07 | Storage safeguards | Bound record and documents; catch quota/unavailable/corrupted data; detect conflicting tab writes on best-effort basis |
| WS-08 | Regression | Existing 48 cases and 13 new storage cases; standalone bundles checked after build |

## Boundaries

No cloud service, original file handles, background disk saves, encrypted vault, document version history, or synchronized collaboration. Origin and browser storage limitations apply. User must retain external disk copies. Undo/scroll state is not persisted. A recovery snapshot does not replace native Save.
