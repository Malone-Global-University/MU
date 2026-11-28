import fs from 'node:fs/promises';
import {parse} from 'parse5';
import {walk,attr,textContent} from './render.mjs';
import {checkedPath} from './paths.mjs';
import {requireCondition as check} from './errors.mjs';
export const sharedAssets=['component/lib.css','component/header.html','component/main.js','component/footer.html','component/bottom-nav-loader.js','component/encyclopedia/article.css'];
export async function validateAssets(c){for(const p of sharedAssets)check((await fs.stat(await checkedPath(c.root,p))).isFile(),'ASSET_MISSING',`Shared asset missing: ${p}`);}
export function validatePage(html,rendered){
  const errors=[];const doc=parse(html,{onParseError:e=>errors.push(e.code)});
  check(!errors.length,'HTML_INVALID',`HTML parser errors: ${errors.join(', ')}`);
  const nodes=[];walk(doc,n=>{if(n.tagName)nodes.push(n);});
  const h1=nodes.filter(n=>n.tagName==='h1');
  check(h1.length===1&&textContent(h1[0]).trim()===rendered.record.title,'HTML_INVALID','Expected exactly one correct H1.');
  const hero=nodes.find(n=>n.tagName==='section'&&attr(n,'class')?.split(/\s+/).includes('mgu-encyclopedia-hero'));
  const breadcrumb=nodes.find(n=>attr(n,'id')==='breadcrumb');
  check(hero&&h1[0].parentNode===hero&&nodes.indexOf(hero)<nodes.indexOf(breadcrumb),'HTML_INVALID','Expected a single title in the hero before breadcrumbs.');
  if(rendered.titleId)check(attr(h1[0],'id')===rendered.titleId,'HTML_INVALID','Hero title anchor not preserved.');
  const ids=new Map();for(const n of nodes){const id=attr(n,'id');if(id)ids.set(id,(ids.get(id)||0)+1);}
  check([...ids.values()].every(n=>n===1),'HTML_INVALID','Duplicate IDs in page.');
  for(const id of ['header-placeholder','footer-placeholder','breadcrumb','main-content','bottom-nav-placeholder','top'])check(ids.get(id)===1,'HTML_INVALID',`Missing shell ID ${id}`);
  const canon=nodes.filter(n=>n.tagName==='link'&&attr(n,'rel')==='canonical');
  check(canon.length===1&&attr(canon[0],'href')===rendered.record.canonicalUrl,'HTML_INVALID','Incorrect canonical declaration.');
  check(nodes.filter(n=>n.tagName==='title').length===1&&nodes.some(n=>n.tagName==='main'&&attr(n,'id')==='main-content'),'HTML_INVALID','Missing title or main landmark.');
  const toc=nodes.find(n=>n.tagName==='nav'&&attr(n,'aria-label')==='Article contents');const hrefs=[];
  if(toc){
    const controls=[];
    walk(toc,n=>{if(n.tagName==='a'){if(attr(n,'data-meps-back-to-top')!==undefined)controls.push(n);else hrefs.push(attr(n,'href'));}});
    check(controls.length===1&&attr(controls[0],'href')==='#top'&&ids.get('top')===1,'HTML_INVALID','Missing or invalid sidebar back-to-top control.');
  }
  check(hrefs.length===rendered.toc.length&&hrefs.every((h,i)=>h==='#'+rendered.toc[i].id&&ids.get(h.slice(1))===1),'HTML_INVALID','TOC target validation failed.');
  check(nodes.some(n=>n.tagName==='meta'&&attr(n,'name')==='robots'&&attr(n,'content')==='noindex, nofollow'),'HTML_INVALID','Preview noindex missing.');
}
