import fs from 'node:fs/promises';
import {escapeHTML as e} from './render.mjs';
import {requireCondition as check} from './errors.mjs';
export async function assemble(rendered){
  const {record:r,toc,html}=rendered;
  const template=await fs.readFile(new URL('../templates/article.html',import.meta.url),'utf8');
  const dates=['uploaded','updated'].filter(k=>r[k]).map(k=>` data-${k}="${e(r[k])}"`).join('');
  const navigation=toc.length?`<nav class="mgu-encyclopedia-toc" aria-label="Article contents"><h2>Contents</h2><ul>${toc.map(h=>`<li class="mgu-toc-level-${h.level}"><a href="#${e(h.id)}">${e(h.text)}</a></li>`).join('\n')}</ul></nav>`:'';
  const values={LANG:e(r.language),TITLE:e(r.title),DESCRIPTION:r.description?`<meta name="description" content="${e(r.description)}">`:'',CANONICAL:e(r.canonicalUrl),DATES:dates,TOC:navigation,BODY:html};
  const used=new Set();
  const page=template.replace(/\{\{([A-Z]+)\}\}/g,(_,k)=>{check(Object.hasOwn(values,k)&&!used.has(k),'TEMPLATE_INVALID',`Invalid or duplicated template slot ${k}`);used.add(k);return values[k];});
  check(used.size===Object.keys(values).length,'TEMPLATE_INVALID','Missing template slot.');
  return page;
}
