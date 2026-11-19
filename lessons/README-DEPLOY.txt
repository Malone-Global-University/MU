MGU Departmental Lesson Dashboard — Brand Integration (2026-11-18)

BRANDING UPDATE (recommended for working site):
  index.html, dashboard.css, dashboard.js -> C:\MGU\lessons\
  Back up all three existing files before replacing.
  DO NOT overwrite your current catalog.json or Markdown lessons.
  Shared MGU components are referenced from the site root:
    /component/dept.css, /component/header.html, /component/main.js,
    /component/bottom-nav.html, /component/footer.html, /image/global/favicon.ico
  Actual MGU logo appears through the existing shared header.html.

LOCAL TEST — IMPORTANT CHANGE:
  cd C:\MGU
  py -m http.server 8000
  Open http://localhost:8000/lessons/
  This makes /component/... resolve from C:\MGU\component.
  Running the server from C:\MGU\lessons will not serve /component/.

VALIDATION URLS:
  http://localhost:8000/lessons/
  http://localhost:8000/lessons/?department=computer-science
  http://localhost:8000/lessons/?department=computer-science&course=computer-basics
  http://localhost:8000/lessons/?content=what-is-a-computer
  http://localhost:8000/lessons/?content=what-is-a-computer&utm_source=chatgpt.com

Keep the original catalog and content hierarchy. The complete-archive variant contains a current example.
The site stylesheet controls the global header/footer; dashboard.css only controls app layout.
Source file: canonical MGU new-page-template(5).html shared-component shell.
KNOWN LIMITATION: dark-mode toggle and live header/menu behavior require visual verification against your actual /component files.
