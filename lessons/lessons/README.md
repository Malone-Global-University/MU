# MGU departmental lesson dashboard — directory home update

This release changes the route behavior of the previous deployed prototype. It keeps the full existing Markdown lesson and its interactive features.

## Deploy

Upload/replace the `lessons/` directory contents into the public web root of `maloneuniversity.org`. The public root `/lessons/` must contain `index.html`, `dashboard.js`, `dashboard.css`, `catalog.json` and `lessons/what-is-a-computer.md`.

**Keep** your existing `catalog.json` and existing Markdown files if you have since added/edited lessons; the new interface can read the existing v1 catalog. If you only want the routing fix, replace `index.html`, `dashboard.js`, and `dashboard.css`.

## Routing

- `/lessons/` — department directory (no Markdown fetched).
- `/lessons/?department=computer-science` — Computer Science course list.
- `/lessons/?department=computer-science&course=computer-basics` — Computer Basics lesson list.
- `/lessons/?lesson=what-is-a-computer` — full Markdown lesson; old direct links remain valid.

## Test locally

From the folder containing the `lessons` directory, run `py -m http.server 8000`, then open `http://localhost:8000/lessons/`. Alternatively run the server inside the `lessons` directory and visit `/`.

## Scale

New departments, courses, and lessons are defined only in `catalog.json`; new lesson content belongs in separate `.md` files. The dashboard is catalog-driven and does not need new HTML when the catalog grows. Every lesson ID must remain unique sitewide.
