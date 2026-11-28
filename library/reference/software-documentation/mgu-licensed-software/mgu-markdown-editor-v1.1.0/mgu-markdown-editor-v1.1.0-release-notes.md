# MGU Markdown Editor v1.1.0 — Release Notes

November 27, 2026 | Workspace and UX modernization candidate

## New features

- Eight compact menus: File, Edit, Format, Insert, View, Publish, Workspace and Help.
- One quick-access toolbar for frequent commands; compact header and status area.
- Hide/show menus with an always-accessible restoration strip.
- Side-by-side, stacked, source-only and preview-only layouts; pane Isolate/Restore split buttons.
- Resizable divider (pointer drag, keyboard arrows, Home/End, double-click reset) and existing size slider, 20–80% bounds.
- Focus mode hides nonessential chrome; fullscreen for the workspace or either pane, with an in-page expanded-view fallback if fullscreen is denied.
- Layout, last split orientation, menu visibility and panel ratio persist. Focus and fullscreen are temporary. Scroll synchronization pauses in single-panel views and resumes when both are visible.
- Existing editing, rendering, HTML/PDF publishing and local recovery controls retained; no new npm dependencies. Ten added automated tests, 74 total.

## Installation and build — Windows PowerShell 5.1

Extract `mgu-markdown-editor-v1.1.0.zip` into `C:\MGU\library\reference\software-documentation\mgu-licensed-software\`. The archive already contains its versioned folder. Do not overwrite v1.0.0. Existing root npm dependencies are sufficient.

```powershell
$Project = "C:\MGU\library\reference\software-documentation\mgu-licensed-software\mgu-markdown-editor-v1.1.0"
Set-Location $Project
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
.\build.ps1
```

Review the trusted script before using the process-level policy adjustment. Expect 74 passing tests, standalone renderer/print API verification, and generated `public/editor.js`, `public/renderer.mjs` and `dist/`. No manual test patch is required. If the local server is not running, use a separate PowerShell window:

```powershell
Set-Location C:\MGU
& ".\node_modules\.bin\esbuild.cmd" --servedir="C:\MGU" --serve=127.0.0.1:8000
```

Production distribution: http://127.0.0.1:8000/library/reference/software-documentation/mgu-licensed-software/mgu-markdown-editor-v1.1.0/dist/

Verify the distribution with `node .\tools\verify-dist.mjs` in the project folder. Serve dist via HTTPS or localhost, not a file URL. Preserve the full source, dist and root npm manifests externally after acceptance.

## Workspace shortcuts

| Shortcut | Action |
|---|---|
| Alt+Shift+M | Show/hide menus |
| Alt+Shift+O | Switch split orientation |
| Alt+Shift+1 | Source only |
| Alt+Shift+2 | Preview only |
| Alt+Shift+3 | Restore last split |
| Alt+Shift+F | Toggle fullscreen |
| Esc | Close an open menu or exit focus/fullscreen |

Browser/OS shortcuts can take precedence. Use the visible controls if a shortcut is intercepted. Ctrl+H is intentionally not used (browser History/Replace conflict). Fullscreen availability depends on browser permission; the fallback remains inside the browser viewport.

## Verification and boundaries

45 dependency-free tests passed (35 inherited and all ten new tests). JavaScript syntax and control inventory checks passed. An isolated Chromium layout-controller fixture passed menu, stacked/side-by-side, source isolation, keyboard resizing and focus-mode checks; this used placeholder source/preview, not CodeMirror or the complete application. The npm registry was inaccessible, so the remaining 29 dependency-based tests, production bundle and real browser acceptance require workstation execution. Native fullscreen and actual keyboard shortcut conflicts remain to be tested locally.

v1.1.0 uses its own local storage namespace. Save needed v1.0.0 drafts to disk before switching; previous browser data is not deleted or automatically migrated. Browser recovery is not disk autosave. Original rendering limits, restricted custom CSS, sandbox policy, PDF browser dependencies and licensing/feedback arrangements remain unchanged. Layout changes do not intentionally edit Markdown. Exact scroll position may change as text reflows. The user-confirmed v1.0.0 release remains the rollback baseline.

## Short acceptance check

1. Run the build: 74 tests passed, zero failures, dist generated.
2. Open a substantial document; hide/show menus, try all four modes and drag the divider. Check sync when restoring both panes.
3. Test focus and fullscreen for the workspace and each pane, then restore normal view. Try the keyboard shortcuts.
4. Change layout, edit a disposable document, wait for recovery and refresh; confirm content and preferences persist.
5. Briefly exercise Save, HTML export and PDF publishing. If satisfactory, lock and archive v1.1.0.
