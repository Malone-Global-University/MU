import {normalizeLayout} from './layout-state.mjs';
import {validateCustomCSS,PUBLICATION_PRESETS} from './publication-styles.mjs';
import {PDF_DEFAULTS,normalizePDFOptions} from './pdf-layout.mjs';

export const STORAGE_KEY='mgu.markdown-editor.v1.1.0.workspace';
export const MAX_RECORD_UNITS=1_500_000, MAX_DOCUMENT_UNITS=500_000, MAX_DRAFTS=8, MAX_RECENT=5;
const fonts=[12,14,16,18,20,22,24,28,32];
const defaults={live:true,sync:true,wrap:true,split:50,sourceSize:16,previewSize:16,preset:'standard',format:'document',activeLinks:false,customCSS:'',pdf:{...PDF_DEFAULTS,title:''}};
const obj=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);
const bool=(x,d)=>typeof x==='boolean'?x:d;
const num=(x,min,max,d)=>Number.isInteger(x)&&x>=min&&x<=max?x:d;
export function normalizePreferences(input={}){
  const p=obj(input)?input:{};let css='',pdf={...defaults.pdf};
  try{css=validateCustomCSS(p.customCSS??'');}catch{}
  try{if(obj(p.pdf)){const candidate=Object.fromEntries(Object.keys(PDF_DEFAULTS).filter(k=>Object.hasOwn(p.pdf,k)).map(k=>[k,p.pdf[k]]));pdf=normalizePDFOptions(candidate);if(candidate.title==='')pdf.title='';}}catch{}
  return {...normalizeLayout(p),live:bool(p.live,true),sync:bool(p.sync,true),wrap:bool(p.wrap,true),split:num(p.split,20,80,50),sourceSize:fonts.includes(p.sourceSize)?p.sourceSize:16,previewSize:fonts.includes(p.previewSize)?p.previewSize:16,preset:PUBLICATION_PRESETS.some(x=>x.id===p.preset)?p.preset:'standard',format:p.format==='fragment'?'fragment':'document',activeLinks:bool(p.activeLinks,false),customCSS:css,pdf};
}
export function freshWorkspace(){return {schema:1,autosave:true,prefs:normalizePreferences(),active:null,drafts:[],recent:[]};}
function bounded(s,n,label){if(typeof s!=='string'||s.length>n)throw new Error(`${label} exceeds local storage limits or is invalid.`);return s;}
function filename(s){return bounded(s,1024,'Filename');}
function stamp(s){if(typeof s!=='string'||!/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d\.\d{3}Z$/.test(s))throw new Error('Invalid local timestamp.');return s;}
export function activeSnapshot(state,selection={anchor:0,head:0},at=new Date().toISOString()){
  const source=bounded(state.source,MAX_DOCUMENT_UNITS,'Source'),saved=bounded(state.saved,MAX_DOCUMENT_UNITS,'Saved baseline');
  return {name:filename(state.name),source,saved,anchor:num(selection.anchor,0,source.length,0),head:num(selection.head,0,source.length,0),at:stamp(at)};
}
function normalizeCopy(x){if(!obj(x))throw new Error('Invalid local copy.');return {id:bounded(x.id,100,'Copy ID'),name:filename(x.name),source:bounded(x.source,MAX_DOCUMENT_UNITS,'Source'),at:stamp(x.at)};}
function copies(xs,max){if(!Array.isArray(xs)||xs.length>max)throw new Error('Invalid local copy list.');const items=xs.map(normalizeCopy);if(new Set(items.map(x=>x.id)).size!==items.length)throw new Error('Duplicate local copy ID.');return items;}
export function normalizeWorkspace(x){
  if(!obj(x)||x.schema!==1||typeof x.autosave!=='boolean')throw new Error('Unsupported or damaged local workspace.');
  const a=x.active;if(a!==null&&!obj(a))throw new Error('Invalid recovery snapshot.');
  return {schema:1,autosave:x.autosave,prefs:normalizePreferences(x.prefs),active:x.autosave&&a?activeSnapshot(a,{anchor:a.anchor,head:a.head},a.at):null,drafts:copies(x.drafts,MAX_DRAFTS),recent:copies(x.recent,MAX_RECENT)};
}
export function serializeWorkspace(x){const raw=JSON.stringify(normalizeWorkspace(x));if(raw.length>MAX_RECORD_UNITS)throw new Error('Local workspace capacity reached. Save to disk or remove local copies. Previous recovery retained.');return raw;}
export function parseWorkspace(raw){if(raw===null)return freshWorkspace();if(typeof raw!=='string'||raw.length>MAX_RECORD_UNITS)throw new Error('Local workspace too large or invalid.');return normalizeWorkspace(JSON.parse(raw));}
export function addDraft(record,{id,name,source,at}){if(record.drafts.length>=MAX_DRAFTS)throw new Error('Eight kept drafts maximum. Remove a draft before keeping another.');return {...record,drafts:[normalizeCopy({id,name,source,at}),...record.drafts]};}
export function addRecent(record,{id,name,source,at}){
  if(!record.autosave)return record;
  const item=normalizeCopy({id,name,source,at});return {...record,recent:[item,...record.recent.filter(x=>x.name!==name||x.source!==source)].slice(0,MAX_RECENT)};
}
export function removeCopy(record,kind,id){if(!['drafts','recent'].includes(kind))throw new Error('Invalid local copy type.');return {...record,[kind]:record[kind].filter(x=>x.id!==id)};}
export function pauseAutosave(record){return {...record,autosave:false,active:null};}
export function clearCopies(record){return {...pauseAutosave(record),drafts:[],recent:[]};}
export class WorkspaceStore{
  constructor(storage,key=STORAGE_KEY){this.storage=storage;this.key=key;this.raw=undefined;this.record=freshWorkspace();this.error='';try{this.raw=storage.getItem(key);this.record=parseWorkspace(this.raw);}catch(e){this.error=e.message;}}
  write(candidate,{resetDamaged=false}={}){
    if(this.raw===undefined)throw new Error('Browser local storage unavailable.');
    if(this.error&&!resetDamaged)throw new Error('Stored workspace could not be loaded. Use Clear local document data to reset it.');
    const raw=serializeWorkspace(candidate);
    if(this.storage.getItem(this.key)!==this.raw)throw new Error('Local data changed in another tab. Save your work to disk and reload this tab.');
    if(raw!==this.raw)this.storage.setItem(this.key,raw);
    this.raw=raw;this.record=parseWorkspace(raw);this.error='';return this.record;
  }
}
