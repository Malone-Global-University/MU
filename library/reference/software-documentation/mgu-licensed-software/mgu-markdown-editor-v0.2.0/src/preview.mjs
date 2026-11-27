import { renderMarkdown } from './renderer.mjs';
const PREVIEW_CSS = `
:root{color-scheme:light dark}body{font:16px/1.7 system-ui,sans-serif;max-width:78ch;margin:0 auto;padding:28px 32px 60px;overflow-wrap:anywhere;color:#182337;background:#fff}h1,h2,h3,h4,h5,h6{line-height:1.25;margin:1.3em 0 .5em}h1{font-size:2rem;border-bottom:1px solid #d9e0e8;padding-bottom:.4em;margin-top:0}h2{font-size:1.5rem}p,ul,ol{margin:.75em 0}blockquote{border-left:3px solid #64748b;padding-left:1rem;margin-left:0;color:#536176}code{font: .9em ui-monospace,monospace;background:#edf1f5;padding:2px 4px;border-radius:3px}pre{background:#edf1f5;padding:12px;overflow:auto}pre code{padding:0}hr{border:0;border-top:1px solid #d9e0e8}.preview-link{color:#1559a6;text-decoration:underline} @media(prefers-color-scheme:dark){body{background:#151d29;color:#e4ebf4}h1,hr{border-color:#485467}blockquote{color:#b8c4d3}code,pre{background:#283447}.preview-link{color:#9ac6ff}}@media(max-width:500px){body{padding:20px}}`;
// Scripts stay disabled. Same-origin access is granted only for trusted parent DOM operations.
export async function initializePreview(frame) {
  frame.setAttribute('sandbox','allow-same-origin');
  await new Promise((resolve,reject)=>{
    const timer=setTimeout(()=>{frame.removeEventListener('load',loaded);reject(new Error('Preview initialization timed out'));},10000);
    function loaded(){if(!frame.contentDocument?.getElementById('preview-content'))return;clearTimeout(timer);frame.removeEventListener('load',loaded);resolve();}
    frame.addEventListener('load',loaded);
    frame.srcdoc = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; base-uri 'none'; form-action 'none'"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Markdown preview</title><style>${PREVIEW_CSS}</style></head><body><main id="preview-content"></main></body></html>`;
  });
  return frame.contentDocument;
}
export function updatePreview(frame,source,{manual=false}={}){
  const doc=frame.contentDocument, scroller=doc.scrollingElement, previous=scroller.scrollTop;
  const result=renderMarkdown(source,{inertLinks:true,sourceMap:true});
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
