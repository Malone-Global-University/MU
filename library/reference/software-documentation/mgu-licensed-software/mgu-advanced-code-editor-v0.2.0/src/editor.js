import { EditorView, basicSetup } from 'codemirror';
import { html } from '@codemirror/lang-html';
import { EditorState, Compartment } from '@codemirror/state';
import { undo, redo, undoDepth, redoDepth } from '@codemirror/commands';
import { openSearchPanel } from '@codemirror/search';
import { indentRange } from '@codemirror/language';
import { MAX_FILE_BYTES, decodeDocument, encodeDocument, equalBytes, clampSplit } from './document-utils.js';

const initialDocument = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
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
const $ = id => document.getElementById(id);
const preview = $('preview'), live = $('live'), wrap = $('wrap');
const wrapConfig = new Compartment();
let renderTimer, busy = false, dirty = false;
let name = 'untitled.html', handle = null, originalBytes = null;
let baseline = initialDocument, format = { bom:false, eol:'LF', mixed:false }, origin = 'new';
let split = 50;
const source = () => editor.state.doc.toString();
function message(text, error = false) {
  $('status').textContent = text;
  $('status').dataset.error = String(error);
}
function updateStatus() {
  const { doc, selection } = editor.state;
  const line = doc.lineAt(selection.main.head);
  $('filename').textContent = name;
  $('filename').title = name;
  $('dirty').dataset.dirty = String(dirty);
  $('dirty').textContent = dirty ? 'Unsaved changes' : origin === 'new' ? 'New document' : 'Unchanged';
  $('file-status').textContent = `${name} · ${handle ? 'Local file linked' : 'No writable file linked'}${busy ? ' · File operation in progress' : ''}`;
  $('metrics').textContent = `HTML · UTF-8${format.bom ? ' BOM' : ''} · ${format.eol}${format.mixed ? ' (mixed source)' : ''} · ${doc.lines.toLocaleString()} lines · ${doc.length.toLocaleString()} chars · Ln ${line.number}, Col ${selection.main.head - line.from + 1}`;
  $('undo').disabled = undoDepth(editor.state) === 0;
  $('redo').disabled = redoDepth(editor.state) === 0;
  for (const id of ['new','open','import','save','save-as','download']) $(id).disabled = busy;
}
function refreshDirty() { dirty = source() !== baseline; updateStatus(); }
function renderPreview() {
  clearTimeout(renderTimer);
  preview.srcdoc = source();
  $('preview-status').textContent = 'Preview requested';
}
function schedulePreview() {
  clearTimeout(renderTimer);
  if (live.checked) {
    $('preview-status').textContent = 'Updating…';
    renderTimer = setTimeout(renderPreview, 250);
  } else $('preview-status').textContent = 'Source changed · run preview';
}
function stateFor(text) {
  return EditorState.create({doc:text, extensions:[
    basicSetup, html(), wrapConfig.of(wrap.checked ? EditorView.lineWrapping : []),
    EditorView.contentAttributes.of({'aria-label':'HTML source editor'}),
    EditorView.updateListener.of(update => {
      if (update.docChanged) { refreshDirty(); schedulePreview(); }
      else if (update.selectionSet) updateStatus();
    })
  ]});
}
const editor = new EditorView({state:stateFor(initialDocument),parent:$('editor')});
function canReplace() { return !dirty || window.confirm('Discard unsaved source changes? Save or download your work first if needed.'); }
function replaceDocument(text, filename, fileHandle, bytes, fileFormat, type) {
  clearTimeout(renderTimer);
  name = filename; handle = fileHandle; originalBytes = bytes; format = fileFormat; baseline = text; origin = type; dirty = false;
  editor.setState(stateFor(text));
  editor.scrollDOM.scrollTop = 0; editor.scrollDOM.scrollLeft = 0;
  updateStatus();
  if (live.checked) renderPreview(); else { preview.srcdoc = ''; $('preview-status').textContent = 'Manual mode · run preview'; }
  editor.focus();
}
async function fileOperation(fn) {
  if (busy) return;
  busy = true; updateStatus();
  try { await fn(); }
  catch (error) { message(error.name === 'AbortError' ? 'Operation cancelled.' : `File operation failed: ${error.message}`, error.name !== 'AbortError'); }
  finally { busy = false; updateStatus(); }
}
const pickerTypes = [{description:'HTML and text files', accept:{'text/html':['.html','.htm'],'text/plain':['.txt']}}];
async function readLocal(file, fileHandle = null) {
  if (file.size > MAX_FILE_BYTES) throw new Error('Files larger than 8 MiB are not supported in this build.');
  const bytes = new Uint8Array(await file.arrayBuffer());
  const decoded = decodeDocument(bytes);
  // Confirm at the point of replacement, including edits made while a picker was open.
  if (!canReplace()) { message('Open cancelled; current document retained.'); return; }
  replaceDocument(decoded.text, file.name, fileHandle, bytes, decoded, 'opened');
  message(decoded.mixed ? 'Opened. Mixed line endings will be normalized on export or save.' : `Opened ${file.name}.`);
}
function newDocument() {
  if (busy || !canReplace()) return;
  replaceDocument(initialDocument, 'untitled.html', null, null, {bom:false,eol:'LF',mixed:false}, 'new');
  message('New HTML template created.');
}
function importFile() { if (!busy) { $('file-input').value = ''; $('file-input').click(); } }
function openFile() {
  if (busy) return;
  if (!window.isSecureContext || typeof window.showOpenFilePicker !== 'function') { importFile(); return; }
  void fileOperation(async () => {
    const [selected] = await window.showOpenFilePicker({types:pickerTypes,multiple:false});
    await readLocal(await selected.getFile(), selected);
  });
}
function snapshot() { const text = source(); return {text,bytes:encodeDocument(text, format)}; }
function exportCopy() {
  if (busy) return;
  const data = snapshot();
  const blob = new Blob([data.bytes], {type:'application/octet-stream'});
  const url = URL.createObjectURL(blob), link = document.createElement('a');
  link.href = url; link.download = name; document.body.append(link); link.click(); link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
  // A browser download cannot confirm the file reached disk. Keep the dirty state.
  message(`Download requested for ${name}. Verify the file in Downloads; editor changes remain marked unsaved.`);
}
async function writeFile(target, data) {
  let stream;
  try { stream = await target.createWritable(); await stream.write(data.bytes); await stream.close(); }
  catch (error) { if (stream) { try { await stream.abort(); } catch {} } throw error; }
  handle = target; name = target.name; originalBytes = data.bytes;
  baseline = data.text; origin = 'saved'; format = {...format,mixed:false}; refreshDirty();
  message(dirty ? `Saved ${name}; subsequent edits are still unsaved.` : `Saved ${name}.`);
}
function saveAs() {
  if (busy) return;
  if (!window.isSecureContext || typeof window.showSaveFilePicker !== 'function') { exportCopy(); return; }
  void fileOperation(async () => {
    const target = await window.showSaveFilePicker({suggestedName:name,types:pickerTypes});
    await writeFile(target,snapshot());
  });
}
function saveFile() {
  if (busy) return;
  if (!handle) { saveAs(); return; }
  void fileOperation(async () => {
    // Detect edits from another editor since this application opened/saved the file.
    const diskFile = await handle.getFile();
    const changed = diskFile.size !== originalBytes.length || !equalBytes(new Uint8Array(await diskFile.arrayBuffer()), originalBytes);
    if (changed && !window.confirm('The local file changed outside this editor. Overwrite it with the current source?')) { message('Save cancelled; use Save as to preserve both versions.'); return; }
    await writeFile(handle,snapshot());
  });
}
async function copySource() {
  try { await navigator.clipboard.writeText(source()); message('Source copied to clipboard.'); }
  catch { message('Clipboard permission unavailable. Select source in the editor and use Ctrl+C.',true); }
}
function editCommand(command, label) { if (!command(editor)) message(`Nothing to ${label.toLowerCase()}.`); else message(`${label} applied.`); editor.focus(); }
function reindent() {
  const {state} = editor, range = state.selection.main;
  if (!window.confirm('Reindent the selection or entire document? Leading whitespace may be meaningful in HTML, preformatted text or embedded code. Review the result; Undo is available.')) return;
  const changes = indentRange(state,range.empty ? 0 : range.from,range.empty ? state.doc.length : range.to);
  if (changes.empty) message('No indentation changes needed.');
  else { editor.dispatch({changes,userEvent:'input.reindent'}); message('Indentation adjusted. Review the source and preview.'); }
  editor.focus();
}
function applySplit(value) {
  split = clampSplit(value);
  // Percentage of the workspace minus the separator width.
  $('workspace').style.setProperty('--source-share',`calc(${split}% - ${12 * split / 100}px)`);
  $('splitter').setAttribute('aria-valuenow',String(split));
  editor.requestMeasure();
}
const splitter = $('splitter');
let dragId = null;
splitter.addEventListener('pointerdown', event => {
  if (event.button !== 0 || dragId !== null) return;
  dragId = event.pointerId; splitter.setPointerCapture(dragId); $('workspace').classList.add('dragging'); event.preventDefault();
});
splitter.addEventListener('pointermove', event => {
  if (event.pointerId !== dragId) return;
  const rect = $('workspace').getBoundingClientRect();
  applySplit((event.clientX - rect.left) / rect.width * 100);
});
function endDrag(event) { if (event.pointerId === dragId) { dragId = null; $('workspace').classList.remove('dragging'); } }
for (const event of ['pointerup','pointercancel','lostpointercapture']) splitter.addEventListener(event,endDrag);
splitter.addEventListener('keydown', event => {
  const values = {ArrowLeft:split-5,ArrowRight:split+5,Home:20,End:80};
  if (Object.hasOwn(values,event.key)) { event.preventDefault(); applySplit(values[event.key]); }
});
const actions = {new:newDocument,open:openFile,import:importFile,save:saveFile,'save-as':saveAs,download:exportCopy,copy:copySource,undo:()=>editCommand(undo,'Undo'),redo:()=>editCommand(redo,'Redo'),find:()=>openSearchPanel(editor),indent:reindent,run:renderPreview,'reset-width':()=>applySplit(50)};
for (const [id, fn] of Object.entries(actions)) $(id).addEventListener('click',fn);
$('file-input').addEventListener('change', event => { const file = event.target.files[0]; if (file) void fileOperation(()=>readLocal(file)); });
wrap.addEventListener('change',()=>editor.dispatch({effects:wrapConfig.reconfigure(wrap.checked ? EditorView.lineWrapping : [])}));
live.addEventListener('change',()=>{ clearTimeout(renderTimer); if (live.checked) renderPreview(); else $('preview-status').textContent = 'Manual preview mode'; });
window.addEventListener('keydown', event => {
  if (!(event.ctrlKey || event.metaKey) || event.repeat || event.isComposing) return;
  const key = event.key.toLowerCase();
  const action = key === 's' && !event.altKey ? (event.shiftKey ? saveAs : saveFile) : key === 'o' && !event.altKey && !event.shiftKey ? openFile : key === 'n' && event.altKey && !event.shiftKey ? newDocument : null;
  if (action) { event.preventDefault(); action(); }
});
window.addEventListener('beforeunload',event=>{ if (dirty || busy) { event.preventDefault(); event.returnValue = ''; } });
$('controls').disabled = false; updateStatus(); applySplit(50); renderPreview(); message('Ready · open an HTML file or edit the sample.');
