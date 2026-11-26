import { EditorView, basicSetup } from 'codemirror';
import { html } from '@codemirror/lang-html';

const initialDocument = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>MGU Editor Test</title>
  <style>
    body { font-family: system-ui, sans-serif; padding: 2rem; }
    h1 { color: #214b78; }
  </style>
</head>
<body>
  <h1>Hello, MGU!</h1>
  <p>Edit this document to update the preview.</p>
</body>
</html>`;

const preview = document.querySelector('#preview');
const runButton = document.querySelector('#run');
const live = document.querySelector('#live');
const status = document.querySelector('#status');
let renderTimer;

function renderPreview(source) {
  clearTimeout(renderTimer);
  preview.srcdoc = source;
  status.textContent = 'Preview updated';
}

const editor = new EditorView({
  doc: initialDocument,
  parent: document.querySelector('#editor'),
  extensions: [
    basicSetup,
    html(),
    EditorView.lineWrapping,
    EditorView.contentAttributes.of({ 'aria-label': 'HTML source editor' }),
    EditorView.updateListener.of(update => {
      if (!update.docChanged) return;
      clearTimeout(renderTimer);
      if (live.checked) {
        status.textContent = 'Updating preview…';
        renderTimer = setTimeout(() => {
          renderPreview(editor.state.doc.toString());
        }, 250);
      } else {
        status.textContent = 'Source changed · run preview';
      }
    })
  ]
});

runButton.addEventListener('click', () => renderPreview(editor.state.doc.toString()));
live.addEventListener('change', () => {
  clearTimeout(renderTimer);
  if (live.checked) renderPreview(editor.state.doc.toString());
  else status.textContent = 'Manual preview mode';
});
runButton.disabled = false;
live.disabled = false;
renderPreview(editor.state.doc.toString());
