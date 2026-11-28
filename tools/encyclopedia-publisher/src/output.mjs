import fs from 'node:fs/promises';
import path from 'node:path';
import {sha256} from './config.mjs';
import {checkedPath} from './paths.mjs';
import {requireCondition as check} from './errors.mjs';
const prefix='<!DOCTYPE html>\n';
const owner=/^<!DOCTYPE html>\n<!-- MEPS-PREVIEW-1 ([a-z0-9/.-]+) ([A-F0-9]{64}) -->\n/;
export function ownedHTML(html,source){
  check(html.startsWith(prefix),'HTML_INVALID','Expected HTML doctype.');
  return prefix+`<!-- MEPS-PREVIEW-1 ${source} ${sha256(html)} -->\n`+html.slice(prefix.length);
}
export function verifyOwned(text,source){
  const m=owner.exec(text);
  check(m&&m[1]===source&&sha256(prefix+text.slice(m[0].length))===m[2],'OUTPUT_UNOWNED','Existing preview is unowned or externally modified. Move it aside manually; no overwrite performed.');
}
export async function preflight(c,record){
  const dest=await checkedPath(c.root,record.previewPath,{missing:true});
  try {const st=await fs.lstat(dest);check(st.isFile()&&!st.isSymbolicLink(),'OUTPUT_UNOWNED','Destination is not a regular file.');verifyOwned(await fs.readFile(dest,'utf8'),record.sourcePath);}
  catch(e){if(e.code!=='ENOENT')throw e;}
  return dest;
}
export async function writePreview(c,record,html){
  const base='.mgu-build/encyclopedia';
  const basePath=await checkedPath(c.root,base,{missing:true});
  await fs.mkdir(basePath,{recursive:true});await checkedPath(c.root,base);
  const lock=path.join(basePath,'.write-lock');
  try{await fs.mkdir(lock);}catch(e){if(e.code==='EEXIST')check(false,'BUILD_LOCKED','Another build is active or left a lock. Inspect before manually removing the lock directory.');throw e;}
  let stage;
  try{
    const dest=await preflight(c,record);
    await fs.mkdir(path.dirname(dest),{recursive:true});await checkedPath(c.root,record.previewPath,{missing:true});
    stage=await fs.mkdtemp(path.join(path.dirname(dest),'.meps-stage-'));
    const temp=path.join(stage,'article.tmp');
    const final=ownedHTML(html,record.sourcePath);
    const fh=await fs.open(temp,'wx');try{await fh.writeFile(final,'utf8');await fh.sync();}finally{await fh.close();}
    check(sha256(await fs.readFile(record.absolute))===record.sourceHash,'SOURCE_CHANGED','Source changed during build; retry.');
    await preflight(c,record);
    await fs.rename(temp,dest);
    return {output:dest,outputHash:sha256(final)};
  } finally {if(stage)await fs.rm(stage,{recursive:true,force:true});await fs.rmdir(lock);}
}
