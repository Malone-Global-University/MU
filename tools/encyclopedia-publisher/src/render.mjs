import {parseFragment,serialize} from 'parse5';
import {pathToFileURL} from 'node:url';
import {verifyRenderer} from './config.mjs';
import {requireCondition as check, warning} from './errors.mjs';
export const escapeHTML = s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
export function walk(node,fn){fn(node);for(const child of node.childNodes??[])walk(child,fn);}
export function attr(node,name){return node.attrs?.find(a=>a.name===name)?.value;}
export function textContent(node){return node.nodeName==='#text'?node.value:(node.childNodes??[]).map(textContent).join('');}
export function safeHref(value){return typeof value==='string' && value.length>0 && !/[\x00-\x20\x7f\\]/.test(value) && !value.startsWith('//') && (!/^[a-z][a-z0-9+.-]*:/i.test(value)||/^(https?:|mailto:)/i.test(value));}
export function inspectMarkdown(body, renderer) {
  const diagnostics = renderer.inspectMarkdown(body);
  check(Array.isArray(diagnostics),'RENDER_FAILED','Unexpected inspection result.');
  for (const d of diagnostics) check(d.severity!=='error',d.code,d.message);
  return diagnostics;
}
export async function loadRenderer(c){
  const file=await verifyRenderer(c);
  const r=await import(pathToFileURL(file).href);
  check(r.RENDERER_NAME===c.rendererName && r.RENDERER_VERSION===c.rendererVersion && typeof r.renderMarkdown==='function' && typeof r.inspectMarkdown==='function' && r.MAX_SOURCE_LENGTH===200000,'RENDERER_MISMATCH','Unexpected renderer exports or source limit.');
  return r;
}
export function renderArticle(record,renderer){
  check(record.body.length<=renderer.MAX_SOURCE_LENGTH,'SOURCE_LIMIT','Markdown body exceeds renderer limit.');
  inspectMarkdown(record.body,renderer);
  const result=renderer.renderMarkdown(record.body,{inertLinks:false,outline:true,headingIds:true});
  check(result&&typeof result.html==='string'&&Array.isArray(result.outline)&&Array.isArray(result.diagnostics),'RENDER_FAILED','Unexpected renderer output contract.');
  check(!result.diagnostics.some(d=>d.severity==='error'),'RENDER_FAILED',JSON.stringify(result.diagnostics));
  const fragment=parseFragment(result.html);
  const headings=[];const ids=new Set();
  walk(fragment,n=>{
    if(n.tagName){
      check(!['script','iframe','object','embed','form','base','meta','link','style','img','svg','audio','video'].includes(n.tagName),'HTML_INVALID',`Unexpected renderer element: ${n.tagName}`);
      for(const a of n.attrs??[]){check(!/^on/i.test(a.name)&&a.name!=='srcdoc','HTML_INVALID','Unexpected executable attribute.');if(['href','src','xlink:href'].includes(a.name))check(safeHref(a.value),'UNSAFE_LINK','Unsafe rendered link.');}
      const id=attr(n,'id');if(id){check(!ids.has(id),'HTML_INVALID',`Duplicate fragment ID: ${id}`);ids.add(id);}
      if(/^h[1-6]$/.test(n.tagName))headings.push({node:n,level:Number(n.tagName[1]),id,text:textContent(n).trim()});
    }
  });
  const h1=headings.filter(h=>h.level===1);
  check(h1.length<=1,'HTML_INVALID','Multiple H1 headings.');
  const first=fragment.childNodes.find(n=>n.tagName||n.nodeName==='#text'&&n.value.trim());
  if(h1.length)check(first===h1[0].node,'HTML_INVALID','Article H1 must be the first content element.');
  const title=record.title||h1[0]?.text;
  check(title&&title.trim(),'METADATA_REQUIRED','An article title or leading H1 is required.');
  if(h1.length)check(title===h1[0].text,'METADATA_INVALID','Metadata title does not match the leading H1.');
  const toc=headings.filter(h=>h.level>1);
  check(toc.every(h=>h.id&&h.text),'HTML_INVALID','Every subsection needs an ID and visible text.');
  check(headings.length===result.outline.length&&headings.every((h,i)=>h.id===result.outline[i].id&&h.level===result.outline[i].level),'HTML_INVALID','Rendered headings disagree with renderer outline.');
  // Move the validated leading title to the shared hero, preserving its anchor.
  // The article body must not repeat the H1. No source Markdown is rewritten.
  const titleId=h1[0]?.id;
  if(h1.length) fragment.childNodes.splice(fragment.childNodes.indexOf(h1[0].node),1);
  // Label an unheaded opening prose block in the generated article only.
  // Preserve all renderer-generated section anchors and any authored opening heading.
  const opening=fragment.childNodes.find(n=>n.tagName||n.nodeName==='#text'&&n.value.trim());
  if(opening?.tagName==='p') {
    let id='mgu-overview', suffix=2;
    while(ids.has(id))id=`mgu-overview-${suffix++}`;
    const overview=parseFragment(`<h2 id="${id}">Overview</h2>`).childNodes[0];
    overview.parentNode=fragment;
    fragment.childNodes.splice(fragment.childNodes.indexOf(opening),0,overview);
    toc.unshift({node:overview,level:2,id,text:'Overview'});
  }
  const html=serialize(fragment);
  return {record:{...record,title},titleId,html,toc:toc.map(({level,id,text})=>({level,id,text})),diagnostics:[...result.diagnostics,...(!record.title?[warning('TITLE_DERIVED','Title recovered from existing H1.')]:[])]};
}
