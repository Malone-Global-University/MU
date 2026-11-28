import { renderMarkdown } from './renderer.mjs';
import {publicationCSS} from './publication-styles.mjs';

// Scripts stay disabled. Same-origin access is granted only for trusted parent DOM operations.
export async function initializePreview(frame) {
  frame.setAttribute('sandbox','allow-same-origin');
  await new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{frame.removeEventListener('load',loaded);reject(new Error('Preview initialization timed out'));},10000);
    function loaded(){if(!frame.contentDocument?.getElementById('preview-content'))return;clearTimeout(timer);frame.removeEventListener('load',loaded);resolve();}
    frame.addEventListener('load',loaded);
    frame.srcdoc = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Markdown preview</title><style id="publication-style">${publicationCSS({fontSize:16})}</style></head><body><main id="preview-content"></main></body></html>`;
  });
  return frame.contentDocument;
}
export function setPreviewStyle(frame, preset, customCSS='') {
  const style=frame.contentDocument?.getElementById('publication-style');
  if(style) style.textContent=publicationCSS({preset,customCSS,fontSize:16});
}
export function setPreviewFont(frame, size) {
  const n=Number(size);
  if(!Number.isInteger(n)||n<12||n>32)throw new RangeError('Preview font must be 12–32 px.');
  if(frame.contentDocument?.getElementById('preview-content'))frame.contentDocument.documentElement.style.fontSize=`${n}px`;
}
export function updatePreview(frame,source,{manual=false}={}){
  const doc=frame.contentDocument, scroller=doc.scrollingElement, previous=scroller.scrollTop;
  const result=renderMarkdown(source,{inertLinks:true,sourceMap:true,outline:true});
  const failed=result.diagnostics.some(d=>d.severity==='error');
  const content=doc.getElementById('preview-content');
  content.innerHTML=failed?'<p>Preview unavailable. See editor status.</p>':result.html;
  if(!failed&&!result.html)content.textContent='Start writing Markdown to see a preview.';
  scroller.scrollTop=manual?0:previous;
  return {...result,valid:!failed};
}
export function previewClipboard(frame,result){
  if(!result?.valid)throw new Error('No valid preview to copy.');
  if(!result.html)return {html:'',text:''};
  const content=frame.contentDocument.getElementById('preview-content');
  const clone=content.cloneNode(true);
  for(const node of clone.querySelectorAll('[data-source-line],[data-source-end]')){node.removeAttribute('data-source-line');node.removeAttribute('data-source-end');}
  return {html:clone.innerHTML,text:content.innerText};
}
