import {EditorState} from '@codemirror/state';
import {EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter, drawSelection} from '@codemirror/view';
import {defaultKeymap, history, historyKeymap, undo, redo, indentWithTab} from '@codemirror/commands';
import {markdown} from '@codemirror/lang-markdown';
import {syntaxHighlighting, defaultHighlightStyle} from '@codemirror/language';
import {search, searchKeymap, openSearchPanel} from '@codemirror/search';
import {DocumentState,normalizeSource,statistics,markdownName} from './document-state.mjs';
import {applyFormatting} from './toolbar.mjs';
import {openSource,writeSnapshot,downloadSource,isCanceled} from './file-manager.mjs';
import {copyText,cutSelection,pasteText,copyRendered} from './clipboard.mjs';
import {initializePreview,updatePreview,previewClipboard} from './preview.mjs';
import {ScrollSync} from './scroll-sync.mjs';
import {RENDERER_VERSION} from './renderer.mjs';
const $=id=>document.getElementById(id), frame=$('preview'), live=$('live'), syncToggle=$('sync');
const sample='# Malone Global University\n\n## Markdown authoring workspace\n\nWrite **bold** and *italic* text.\n\n- Edit Markdown\n- Preview changes\n- Save your document\n\n> The editor is the application; the renderer is reusable infrastructure.\n';
const state=new DocumentState(sample);let view,scrollSync,timer,rendered=null,renderRevision=-1,busy=false,ready=false;
const status=message=>{$('status').textContent=message;};
const previewButton=document.querySelector('[data-action="copy-preview"]');
const beforeUnload=e=>{e.preventDefault();e.returnValue='';};
function measure(){const s=statistics(state.source), pos=view.state.selection.main.head,line=view.state.doc.lineAt(pos);$('stats').textContent=`${s.lines} lines · ${s.words} words · ${s.units} code units`;$('cursor').textContent=`Ln ${line.number} · Col ${pos-line.from+1}`;$('filename').textContent=state.name+(state.dirty?' • Unsaved':'');window.removeEventListener('beforeunload',beforeUnload);if(state.dirty)window.addEventListener('beforeunload',beforeUnload);}
function freshness(){const current=rendered?.valid&&renderRevision===state.revision;$('preview-state').textContent=!rendered?'Waiting':!rendered.valid?'Unavailable':current?'Up to date':'Stale — displayed revision';previewButton.disabled=!rendered?.valid;scrollSync?.setValid(Boolean(current));}
function render(manual=false){clearTimeout(timer);if(!ready)return;scrollSync?.setValid(false);try{rendered=updatePreview(frame,state.source,{manual});renderRevision=state.revision;status(rendered.diagnostics.map(d=>d.message).join(' ')||'Preview up to date');freshness();if(manual)scrollSync.reset();else if(syncToggle.checked&&rendered.valid)scrollSync.align('source');}catch(e){rendered=null;freshness();status(`Preview error: ${e.message}`);}}
function schedule(){clearTimeout(timer);freshness();if(live.checked){status('Updating preview…');timer=setTimeout(()=>render(),180);}else status('Manual mode — preview not updated');}
const shortcuts=[{key:'Mod-s',run:()=>{void action('save');return true;}},{key:'Mod-Shift-s',run:()=>{void action('save-as');return true;}},{key:'Mod-b',run:v=>applyFormatting(v,'bold')},{key:'Mod-i',run:v=>applyFormatting(v,'italic')}];
const extensions=[lineNumbers(),highlightActiveLine(),highlightActiveLineGutter(),drawSelection(),history(),markdown(),syntaxHighlighting(defaultHighlightStyle),search(),EditorView.lineWrapping,EditorView.contentAttributes.of({'aria-label':'Markdown source',spellcheck:'false'}),keymap.of([...shortcuts,...searchKeymap,...historyKeymap,...defaultKeymap,indentWithTab]),EditorView.updateListener.of(update=>{if(update.docChanged){state.edit(update.state.doc.toString());schedule();}if(update.docChanged||update.selectionSet)measure();})];
function makeState(source){return EditorState.create({doc:source,extensions});}
view=new EditorView({state:makeState(sample),parent:$('source')});
function replaceDocument(doc){state.reset(doc.source,doc.name,doc.handle);view.setState(makeState(doc.source));view.scrollDOM.scrollTop=0;measure();render(true);view.focus();}
async function askDiscard(){if(!state.dirty)return true;const dialog=$('discard-dialog');dialog.returnValue='cancel';const choice=await new Promise(resolve=>{dialog.addEventListener('close',()=>resolve(dialog.returnValue),{once:true});dialog.showModal();});if(choice==='discard')return true;if(choice==='save')return await save(false)&&!state.dirty;return false;}
async function save(as){const snap=state.snapshot();const result=await writeSnapshot(snap,as);if(result.download){status('Download requested — existing file not confirmed saved. Unsaved state retained.');return false;}state.savedSnapshot(snap,result.name,result.handle);measure();status(state.dirty?'Saved snapshot; newer edits remain unsaved':`Saved ${result.name}`);return true;}
function selection(){const doc=view.state.doc,{from,to}=view.state.selection.main;return {doc,from,to,text:doc.sliceString(from,to),current:()=>view.state.doc===doc&&view.state.selection.main.from===from&&view.state.selection.main.to===to};}
function insert(s,text){view.dispatch({changes:{from:s.from,to:s.to,insert:normalizeSource(text)},selection:{anchor:s.from+normalizeSource(text).length},userEvent:'input.clipboard',scrollIntoView:true});view.focus();}
async function action(name){
  const fileAction=['new','open','save','save-as','download'].includes(name);if(fileAction&&busy){status('A file operation is already active.');return;}if(fileAction)busy=true;
  try{switch(name){
    case 'new':if(await askDiscard())replaceDocument({source:'',name:'untitled.md',handle:null});break;
    case 'open':{if(!await askDiscard())break;const revision=state.revision;const doc=await openSource($('file-input'));if(!doc)break;if(state.revision!==revision){status('Document changed while opening; open canceled to preserve edits.');break;}replaceDocument(doc);status(`Opened ${doc.name}`);break;}
    case 'save':await save(false);break;
    case 'save-as':{if(typeof window.showSaveFilePicker!=='function'){const name=prompt('Download filename',state.name);if(name===null)break;downloadSource(state.source,markdownName(name));status('Save As download requested; current saved baseline unchanged.');}else await save(true);break;}
    case 'download':downloadSource(state.source,state.name);status('Markdown download requested; saved baseline unchanged.');break;
    case 'undo':undo(view);view.focus();break;
    case 'redo':redo(view);view.focus();break;
    case 'find':case 'replace':openSearchPanel(view);if(name==='replace')view.dom.querySelector('.cm-panel input[name="replace"]')?.focus();break;
    case 'copy':{const s=selection();if(!s.text){status('Select text to copy.');break;}await copyText(s.text);status('Selection copied');break;}
    case 'cut':{const s=selection();if(!s.text){status('Select text to cut.');break;}const ok=await cutSelection(s.text,s.current,()=>insert(s,''));status(ok?'Selection cut':'Copied; selection changed, so nothing removed');break;}
    case 'paste':{const s=selection();const ok=await pasteText(s.current,t=>insert(s,t));status(ok?'Pasted Markdown text':'No text pasted (empty clipboard or selection changed)');break;}
    case 'copy-source':await copyText(state.source);status('Entire Markdown source copied');break;
    case 'copy-preview':{const payload=previewClipboard(frame,rendered),stale=renderRevision!==state.revision;const kind=await copyRendered(payload.html,payload.text);status(`Copied ${stale?'displayed stale revision':'preview'} (${kind})`);break;}
  }}catch(e){status(isCanceled(e)?'Operation canceled':`${name}: ${e.message}`);}finally{if(fileAction)busy=false;}
}
for(const button of document.querySelectorAll('[data-action]'))button.addEventListener('click',()=>void action(button.dataset.action));
for(const button of document.querySelectorAll('[data-format]'))button.addEventListener('click',()=>applyFormatting(view,button.dataset.format));
$('heading').addEventListener('change',e=>{if(e.target.value)applyFormatting(view,'heading',Number(e.target.value));e.target.value='';});
live.addEventListener('change',()=>{clearTimeout(timer);if(live.checked){if(renderRevision!==state.revision||!rendered?.valid)render();else status('Live preview enabled');}else{freshness();status('Manual preview enabled');}});
syncToggle.addEventListener('change',()=>{scrollSync?.setEnabled(syncToggle.checked);if(syncToggle.checked)scrollSync?.align('source');});
$('render-now').addEventListener('click',()=>render(true));
const setSplit=()=>{$('workspace').style.setProperty('--split',`${$('split').value}%`);requestAnimationFrame(()=>scrollSync?.refresh());};$('split').addEventListener('input',setSplit);$('reset-split').addEventListener('click',()=>{$('split').value='50';setSplit();});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'&&!e.defaultPrevented){e.preventDefault();void action(e.shiftKey?'save-as':'save');}});
$('renderer-version').textContent=`Renderer ${RENDERER_VERSION}`;measure();
try{await initializePreview(frame);scrollSync=new ScrollSync(view,frame,message=>{$('sync-status').textContent=message;});scrollSync.setEnabled(syncToggle.checked);ready=true;render(true);}catch(e){status(`Preview unavailable: ${e.message}`);}
