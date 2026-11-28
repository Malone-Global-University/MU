import {EditorState, Compartment} from '@codemirror/state';
import {EditorView, keymap, lineNumbers, highlightActiveLine, highlightActiveLineGutter, drawSelection} from '@codemirror/view';
import {defaultKeymap, history, historyKeymap, undo, redo, indentWithTab} from '@codemirror/commands';
import {markdown} from '@codemirror/lang-markdown';
import {syntaxHighlighting, defaultHighlightStyle} from '@codemirror/language';
import {search, searchKeymap, openSearchPanel} from '@codemirror/search';
import {DocumentState,normalizeSource,statistics,markdownName} from './document-state.mjs';
import {applyFormatting} from './toolbar.mjs';
import {openSource,writeSnapshot,downloadSource,isCanceled} from './file-manager.mjs';
import {copyText,cutSelection,pasteText,copyRendered} from './clipboard.mjs';
import {initializePreview,updatePreview,previewClipboard,setPreviewFont,setPreviewStyle} from './preview.mjs';
import {ScrollSync} from './scroll-sync.mjs';
import {exportHTML,downloadHTML} from './html-export.mjs';
import {validateCustomCSS} from './publication-styles.mjs';
import {PDF_DEFAULTS,normalizePDFOptions,exportPrintDocument,openPrintDocument,downloadPrintDocument} from './pdf-publishing.mjs';
import {createWorkspaceController} from './workspace-controller.mjs';
import {RENDERER_VERSION} from './renderer.mjs';
const $=id=>document.getElementById(id), frame=$('preview'), live=$('live'), syncToggle=$('sync');
const sample='# Malone Global University\n\n## Markdown authoring workspace\n\nWrite **bold** and *italic* text.\n\n- Edit Markdown\n- Preview changes\n- Save your document\n\n> The editor is the application; the renderer is reusable infrastructure.\n';
const state=new DocumentState(sample);let view,scrollSync,timer,rendered=null,renderRevision=-1,busy=false,ready=false;
const status=message=>{$('status').textContent=message;};
const previewButton=document.querySelector('[data-action="copy-preview"]');
let customCSS='';
let pdfSettings={...PDF_DEFAULTS,title:''};
function publicationSettings(){return {...pdfSettings,title:pdfSettings.title||state.name.replace(/\.(?:md|markdown|txt)$/i,''),preset:$('publication-style').value,customCSS,activeLinks:$('export-links').checked};}
function fillPDFForm(values){for(const field of $('pdf-form').elements){if(!field.name||!Object.hasOwn(values,field.name))continue;if(field.type==='checkbox')field.checked=values[field.name];else field.value=values[field.name];}$('pdf-error').textContent='';}
function summarizePDF(){$('pdf-summary').textContent=`${pdfSettings.paper} · ${pdfSettings.orientation} · ${pdfSettings.fontPt} pt`;}
$('pdf-settings').addEventListener('click',()=>{fillPDFForm(pdfSettings);$('pdf-dialog').showModal();});
$('pdf-cancel').addEventListener('click',()=>$('pdf-dialog').close());
$('pdf-reset').addEventListener('click',()=>fillPDFForm({...PDF_DEFAULTS,title:''}));
$('pdf-form').addEventListener('submit',e=>{e.preventDefault();try{const candidate={...pdfSettings};for(const field of e.target.elements){if(!field.name)continue;candidate[field.name]=field.type==='checkbox'?field.checked:field.value;}const validated=normalizePDFOptions(candidate);pdfSettings={...validated,title:candidate.title.trim()};summarizePDF();workspaceStorage.prefsChanged();$('pdf-dialog').close();status('PDF settings applied; Markdown unchanged');}catch(error){$('pdf-error').textContent=error.message;}});

const beforeUnload=e=>{e.preventDefault();e.returnValue='';};
function measure(){const s=statistics(state.source), pos=view.state.selection.main.head,line=view.state.doc.lineAt(pos);$('stats').textContent=`${s.lines} lines · ${s.words} words · ${s.units} code units`;$('cursor').textContent=`Ln ${line.number} · Col ${pos-line.from+1}`;$('filename').textContent=state.name+(state.dirty?' • Unsaved':'');window.removeEventListener('beforeunload',beforeUnload);if(state.dirty)window.addEventListener('beforeunload',beforeUnload);}
function updateOutline(){
  const select=$('outline'), current=rendered?.valid&&renderRevision===state.revision;
  select.replaceChildren(new Option(current?'Jump to heading…':'Outline unavailable',''));
  for(const heading of current?(rendered.outline||[]):[]){
    select.add(new Option(`${'  '.repeat(heading.level-1)}H${heading.level} · ${heading.text} (line ${heading.line+1})`,String(heading.line)));
  }
  select.disabled=select.options.length<2;
}
function freshness(){const current=rendered?.valid&&renderRevision===state.revision;$('preview-state').textContent=!rendered?'Waiting':!rendered.valid?'Unavailable':current?'Up to date':'Stale — displayed revision';previewButton.disabled=!rendered?.valid;scrollSync?.setValid(Boolean(current));updateOutline();}
function render(manual=false){clearTimeout(timer);if(!ready)return;scrollSync?.setValid(false);try{rendered=updatePreview(frame,state.source,{manual});renderRevision=state.revision;status(rendered.diagnostics.map(d=>d.message).join(' ')||'Preview up to date');freshness();if(manual)scrollSync.reset();else if(syncToggle.checked&&rendered.valid)scrollSync.align('source');}catch(e){rendered=null;freshness();status(`Preview error: ${e.message}`);}}
function schedule(){clearTimeout(timer);freshness();if(live.checked){status('Updating preview…');timer=setTimeout(()=>render(),180);}else status('Manual mode — preview not updated');}
const wrapping=new Compartment();
const shortcuts=[{key:'Mod-s',run:()=>{void action('save');return true;}},{key:'Mod-Shift-s',run:()=>{void action('save-as');return true;}},{key:'Mod-b',run:v=>applyFormatting(v,'bold')},{key:'Mod-i',run:v=>applyFormatting(v,'italic')}];
const extensions=[lineNumbers(),highlightActiveLine(),highlightActiveLineGutter(),drawSelection(),history(),markdown(),syntaxHighlighting(defaultHighlightStyle),search(),EditorView.contentAttributes.of({'aria-label':'Markdown source',spellcheck:'false'}),keymap.of([...shortcuts,...searchKeymap,...historyKeymap,...defaultKeymap,indentWithTab]),EditorView.updateListener.of(update=>{if(update.docChanged){state.edit(update.state.doc.toString());schedule();workspaceStorage.schedule();}if(update.docChanged||update.selectionSet)measure();})];
function makeState(source,selection){return EditorState.create({doc:source,selection,extensions:[...extensions,wrapping.of($('wrap').checked?EditorView.lineWrapping:[])]});}
function getPrefs(){return {live:live.checked,sync:syncToggle.checked,wrap:$('wrap').checked,split:Number($('split').value),sourceSize:Number($('source-size').value),previewSize:Number($('preview-size').value),preset:$('publication-style').value,format:$('html-format').value,activeLinks:$('export-links').checked,customCSS,pdf:pdfSettings};}
const workspaceStorage=createWorkspaceController({getSnapshot:()=>[state,view.state.selection.main],getPrefs,openCopy:async entry=>{if(busy)return;busy=true;try{if(await askDiscard()){replaceDocument({...entry,handle:null},'');workspaceStorage.commit();status('Opened local copy — not the original disk file. Use Save As.');}}catch(e){status(e.message);}finally{busy=false;}},isBusy:()=>busy,status});
const recovered=workspaceStorage.initial.active, prefs=workspaceStorage.initial.prefs;
for(const [id,value] of [['live',prefs.live],['sync',prefs.sync],['wrap',prefs.wrap],['export-links',prefs.activeLinks]])$(id).checked=value;
for(const [id,value] of [['split',prefs.split],['source-size',prefs.sourceSize],['preview-size',prefs.previewSize],['publication-style',prefs.preset],['html-format',prefs.format]])$(id).value=String(value);
customCSS=prefs.customCSS;pdfSettings=prefs.pdf;summarizePDF();
if(recovered){state.reset(recovered.source,recovered.name,null);state.saved=recovered.saved;}
view=new EditorView({state:makeState(state.source,recovered?{anchor:recovered.anchor,head:recovered.head}:undefined),parent:$('source')});
function replaceDocument(doc,saved=doc.source){state.reset(doc.source,doc.name,doc.handle);state.saved=saved;view.setState(makeState(doc.source));view.scrollDOM.scrollTop=0;measure();render(true);view.focus();}
async function askDiscard(){if(!state.dirty)return true;const dialog=$('discard-dialog');dialog.returnValue='cancel';const choice=await new Promise(resolve=>{dialog.addEventListener('close',()=>resolve(dialog.returnValue),{once:true});dialog.showModal();});if(choice==='discard')return true;if(choice==='save')return await save(false)&&!state.dirty;return false;}
async function save(as){const snap=state.snapshot();const result=await writeSnapshot(snap,as);if(result.download){status('Download requested — existing file not confirmed saved. Unsaved state retained.');return false;}state.savedSnapshot(snap,result.name,result.handle);measure();workspaceStorage.recent({name:result.name,source:snap.source});status(state.dirty?'Saved snapshot; newer edits remain unsaved':`Saved ${result.name}`);return true;}
function selection(){const doc=view.state.doc,{from,to}=view.state.selection.main;return {doc,from,to,text:doc.sliceString(from,to),current:()=>view.state.doc===doc&&view.state.selection.main.from===from&&view.state.selection.main.to===to};}
function insert(s,text){view.dispatch({changes:{from:s.from,to:s.to,insert:normalizeSource(text)},selection:{anchor:s.from+normalizeSource(text).length},userEvent:'input.clipboard',scrollIntoView:true});view.focus();}
async function action(name){
  const fileAction=['new','open','save','save-as','download'].includes(name);if(fileAction&&busy){status('A file operation is already active.');return;}if(fileAction)busy=true;
  try{switch(name){
    case 'new':if(await askDiscard()){replaceDocument({source:'',name:'untitled.md',handle:null});workspaceStorage.commit();}break;
    case 'open':{if(!await askDiscard())break;const revision=state.revision;const doc=await openSource($('file-input'));if(!doc)break;if(state.revision!==revision){status('Document changed while opening; open canceled to preserve edits.');break;}replaceDocument(doc);workspaceStorage.recent(doc);status(`Opened ${doc.name}`);break;}
    case 'save':await save(false);break;
    case 'save-as':{if(typeof window.showSaveFilePicker!=='function'){const name=prompt('Download filename',state.name);if(name===null)break;downloadSource(state.source,markdownName(name));status('Save As download requested; current saved baseline unchanged.');}else await save(true);break;}
    case 'download':downloadSource(state.source,state.name);status('Markdown download requested; saved baseline unchanged.');break;
    case 'undo':undo(view);view.focus();break;
    case 'redo':redo(view);view.focus();break;
    case 'find':case 'replace':openSearchPanel(view);if(name==='replace')view.dom.querySelector('.cm-panel input[name="replace"]')?.focus();break;
    case 'copy':{const s=selection();if(!s.text)break;await copyText(s.text);status('Selection copied');break;}
    case 'cut':{const s=selection();if(!s.text)break;const ok=await cutSelection(s.text,s.current,()=>insert(s,''));status(ok?'Selection cut':'Copied; selection changed, so nothing removed');break;}
    case 'paste':{const s=selection();const ok=await pasteText(s.current,t=>insert(s,t));status(ok?'Pasted Markdown text':'No text pasted (empty clipboard or selection changed)');break;}
    case 'copy-source':await copyText(state.source);status('Entire Markdown source copied');break;
    case 'copy-html':case 'download-html':{
      const result=exportHTML(state.source,{format:$('html-format').value,title:state.name,preset:$('publication-style').value,customCSS,fontSize:$('preview-size').value,activeLinks:$('export-links').checked});
      if(!result.valid){status(result.diagnostics.map(d=>d.message).join(' '));break;}
      if(name==='copy-html')await copyText(result.html);else downloadHTML(result.html,state.name);
      status(`${name==='copy-html'?'HTML copied':'HTML download requested'} from current Markdown${result.diagnostics.length?' — '+result.diagnostics.map(d=>d.message).join(' '):''}`);break;
    }
    case 'pdf-preview':case 'pdf-print':case 'pdf-html':{
      const result=exportPrintDocument(state.source,publicationSettings());
      if(!result.valid){status(result.diagnostics.map(d=>d.message).join(' '));break;}
      if(name==='pdf-html')downloadPrintDocument(result.html,state.name);
      else openPrintDocument(result.html,{print:name==='pdf-print'});
      status(`${name==='pdf-html'?'Print HTML download requested':'Print document opened — use Ctrl+P / Save as PDF if needed'}${result.diagnostics.length?' — '+result.diagnostics.map(d=>d.message).join(' '):''}`);break;
    }
    case 'copy-preview':{const payload=previewClipboard(frame,rendered),stale=renderRevision!==state.revision;const kind=await copyRendered(payload.html,payload.text);status(`Copied ${stale?'displayed stale revision':'preview'} (${kind})`);break;}
  }}catch(e){status(isCanceled(e)?'Operation canceled':`${name}: ${e.message}`);}finally{if(fileAction)busy=false;}
}
for(const button of document.querySelectorAll('[data-action]'))button.addEventListener('click',()=>void action(button.dataset.action));
for(const button of document.querySelectorAll('[data-format]'))button.addEventListener('click',()=>applyFormatting(view,button.dataset.format));
$('heading').addEventListener('change',e=>{if(e.target.value)applyFormatting(view,'heading',Number(e.target.value));e.target.value='';});
live.addEventListener('change',()=>{clearTimeout(timer);if(live.checked){if(renderRevision!==state.revision||!rendered?.valid)render();else status('Live preview enabled');}else{freshness();status('Manual preview enabled');}});
syncToggle.addEventListener('change',()=>{scrollSync?.setEnabled(syncToggle.checked);if(syncToggle.checked)scrollSync?.align('source');});
$('render-now').addEventListener('click',()=>render(true));
const setSplit=()=>{$('workspace').style.setProperty('--split',`${$('split').value}%`);requestAnimationFrame(()=>scrollSync?.refresh());};$('split').addEventListener('input',setSplit);$('reset-split').addEventListener('click',()=>{$('split').value='50';setSplit();workspaceStorage.prefsChanged();});
// Display-only changes never modify the document or its saved snapshot.
function refreshDisplayLayout(){
  view.requestMeasure();
  requestAnimationFrame(()=>{scrollSync?.refresh();if(syncToggle.checked)scrollSync?.align('source');});
}
function setWrap(){view.dispatch({effects:wrapping.reconfigure($('wrap').checked?EditorView.lineWrapping:[])});refreshDisplayLayout();}
function setFontSizes(){
  $('source').style.setProperty('--source-font-size',`${Number($('source-size').value)}px`);
  if(ready)setPreviewFont(frame,$('preview-size').value);
  refreshDisplayLayout();
}
function applyStyle(){if(ready){setPreviewStyle(frame,$('publication-style').value,customCSS);refreshDisplayLayout();}}
$('publication-style').addEventListener('change',applyStyle);
$('custom-css-open').addEventListener('click',()=>{$('custom-css').value=customCSS;$('css-error').textContent='';$('css-dialog').showModal();});
$('css-cancel').addEventListener('click',()=>$('css-dialog').close());
$('css-clear').addEventListener('click',()=>{$('custom-css').value='';$('css-error').textContent='';});
$('css-apply').addEventListener('click',()=>{try{customCSS=validateCustomCSS($('custom-css').value);applyStyle();workspaceStorage.prefsChanged();$('css-dialog').close();status('Publication style applied; Markdown unchanged');}catch(e){$('css-error').textContent=e.message;}});
$('outline').addEventListener('change',()=>{
  const value=$('outline').value;if(value===''||!rendered?.valid||renderRevision!==state.revision)return;
  const line=Number(value);$('outline').value='';if(!Number.isInteger(line)||line<0||line>=view.state.doc.lines)return;
  const pos=view.state.doc.line(line+1).from;
  view.dispatch({selection:{anchor:pos},effects:EditorView.scrollIntoView(pos,{y:'start'})});
  const target=frame.contentDocument.querySelector(`h1[data-source-line="${line}"],h2[data-source-line="${line}"],h3[data-source-line="${line}"],h4[data-source-line="${line}"],h5[data-source-line="${line}"],h6[data-source-line="${line}"]`);
  if(target){const scroller=frame.contentDocument.scrollingElement;scrollSync?.write('preview',target.getBoundingClientRect().top+scroller.scrollTop);}
  view.focus();
});
$('wrap').addEventListener('change',setWrap);
$('source-size').addEventListener('change',setFontSizes);
$('preview-size').addEventListener('change',setFontSizes);
$('reset-display').addEventListener('click',()=>{$('wrap').checked=true;$('source-size').value='16';$('preview-size').value='18';setWrap();setFontSizes();workspaceStorage.prefsChanged();});
document.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='s'&&!e.defaultPrevented){e.preventDefault();void action(e.shiftKey?'save-as':'save');}});
for(const id of ['live','sync','wrap','split','source-size','preview-size','publication-style','html-format','export-links'])$(id).addEventListener('change',()=>workspaceStorage.prefsChanged());
setSplit();
$('renderer-version').textContent=`Renderer ${RENDERER_VERSION}`;measure();
try{await initializePreview(frame);scrollSync=new ScrollSync(view,frame,message=>{$('sync-status').textContent=message;});scrollSync.setEnabled(syncToggle.checked);ready=true;setFontSizes();applyStyle();render(true);}catch(e){status(`Preview unavailable: ${e.message}`);}
