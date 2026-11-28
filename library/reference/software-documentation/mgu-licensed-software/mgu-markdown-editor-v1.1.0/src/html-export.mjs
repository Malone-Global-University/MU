import {renderMarkdown} from './renderer.mjs';
import {publicationCSS} from './publication-styles.mjs';
const escapeHTML = s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export const DOCUMENT_CSP = "default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'";
export function htmlFilename(name='untitled.md'){
  const base=String(name).trim().replace(/[\\/:*?"<>|\u0000-\u001f]/g,'_').replace(/[. ]+$/g,'').replace(/(?:\.(?:md|markdown|txt|html?))+$/i,'');
  return `${base||'untitled'}.html`;
}
/** HTML export reads the current source, independent of preview freshness. No active links unless explicitly enabled. */
export function exportHTML(source,{format='document',title='Markdown document',preset='standard',customCSS='',fontSize=18,activeLinks=false,features={}}={}){
  if(!['fragment','document'].includes(format))throw new Error('Unknown HTML export format.');
  const result=renderMarkdown(source,{inertLinks:!activeLinks,features});
  if(result.diagnostics.some(d=>d.severity==='error'))return {...result,valid:false};
  if(format==='fragment')return {...result,valid:true};
  const css=publicationCSS({preset,customCSS,fontSize,print:true});
  return {...result,valid:true,html:`<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Security-Policy" content="${DOCUMENT_CSP}"><title>${escapeHTML(title)}</title><style>${css}</style></head><body><main>\n${result.html}</main></body></html>\n`};
}
export function downloadHTML(html,name){
  const url=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download=htmlFilename(name);document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
