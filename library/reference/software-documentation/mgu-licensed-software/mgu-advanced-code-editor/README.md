# MGU Advanced Code Editor — development baseline 0.1.0

Independent CodeMirror 6 prototype. The existing MGU HTML Editor 1.0 is not modified. The name and deployment route remain provisional.

## Run locally (Windows PowerShell)

Install Node.js with npm if not already present. Open PowerShell in this extracted folder:

```powershell
node --version
npm --version
npm install
npm run dev
```

Open http://127.0.0.1:8000/advanced-code-editor.html in a browser. Stop the server with Ctrl+C. To create a standalone deployable bundle, use `npm run build`. The `public` directory then contains HTML, CSS and bundled JS; no runtime CDN dependency is intended. Keep the generated package-lock.json for reproducible installs.

## Acceptance checks

1. Editor loads with the sample document, line numbers and HTML highlighting.
2. Change the h1 text; the preview updates after a short delay.
3. Change the CSS color; the preview changes.
4. Turn off live preview; edits do not update the preview until Run preview is clicked.
5. Test undo/redo, find, tag completion, and code folding where supported by the language extension.
6. Add a script to the sample: it should not execute in the sandboxed preview.
7. Resize the browser: the panels should stack on narrow screens.

## Boundaries

HTML source editing with embedded CSS and JavaScript syntax support; preview executes neither scripts nor form submissions. External resources may still initiate network requests. No project management, saving, linting integration, persistence, or production MGU shell in this baseline. Source files are not uploaded automatically. Do not deploy before acceptance testing and MGU component integration.

The npm registry was unavailable in the authoring environment; package installation, bundling and browser testing must be completed locally. JavaScript syntax and the project structure were checked, not runtime behavior.

CodeMirror documentation: https://codemirror.net/docs/guide/ and https://codemirror.net/docs/ref/.
