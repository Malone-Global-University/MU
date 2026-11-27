import {renderMarkdown} from './renderer.mjs';
import {DOCUMENT_CSP} from './html-export.mjs';
import {normalizePDFOptions,printCSS,escapeHTML,printFilename} from './pdf-layout.mjs';
export {PDF_DEFAULTS,PDF_PAPER_SIZES,normalizePDFOptions,pdfFilename,printFilename,printCSS} from './pdf-layout.mjs';
// Pure source-to-print-document API. No DOM or browser required.
export function exportPrintDocument(source,settings={}){
  const o=normalizePDFOptions(settings);
  const r=renderMarkdown(source,{inertLinks:!o.activeLinks,outline:o.toc,headingIds:o.toc});
  if(r.diagnostics.some(d=>d.severity==='error'))return {...r,valid:false};
  const e=escapeHTML;
  const meta=['author','subject','keywords','institution'].map(k=>`<meta name="${k}" content="${e(o[k])}">`).join('');
  const cover=o.cover?`<section class="mgu-cover"><p>${e(o.institution)}</p><h1>${e(o.title)}</h1>${o.subject?`<p>${e(o.subject)}</p>`:''}${o.author?`<p>${e(o.author)}</p>`:''}</section>`:'';
  const toc=o.toc&&r.outline?.length?`<nav class="mgu-toc" aria-label="Table of contents"><h1>Contents</h1><ol>${r.outline.map(h=>`<li class="level-${h.level}"><a href="#${h.id}">${e(h.text)}</a></li>`).join('')}</ol></nav>`:'';
  return {...r,valid:true,html:`<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta http-equiv="Content-Security-Policy" content="${DOCUMENT_CSP}"><meta name="mgu-print-document" content="0.5.0">${meta}<title>${e(o.title)}</title><style>${printCSS(o)}</style></head><body>${cover}${toc}<main>${r.html}</main></body></html>\n`};
}
export function downloadPrintDocument(html,name){
  const url=URL.createObjectURL(new Blob([html],{type:'text/html;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download=printFilename(name);document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
// Call synchronously from a user click. Only pass documents returned by exportPrintDocument.
export function openPrintDocument(html,{print=false}={}){
  const popup=window.open('','_blank');if(!popup)throw new Error('Print window blocked. Allow popups or download the print-ready HTML and open it.');
  try{popup.opener=null;popup.document.open();popup.document.write(html);popup.document.close();popup.focus();if(print)popup.print();return popup;}
  catch(e){popup.close();throw e;}
}
