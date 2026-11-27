import {decodeSource,markdownName} from './document-state.mjs';
const types=[{description:'Markdown document',accept:{'text/markdown':['.md','.markdown']}}];
export function isCanceled(e){return e?.name==='AbortError';}
export function downloadSource(source,name){
  const url=URL.createObjectURL(new Blob([source],{type:'text/markdown;charset=utf-8'}));
  const a=document.createElement('a');a.href=url;a.download=markdownName(name);document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
export async function openSource(input){
  let handle=null,file;
  if(typeof window.showOpenFilePicker==='function'){
    [handle]=await window.showOpenFilePicker({types,multiple:false});file=await handle.getFile();
  }else{
    file=await new Promise(resolve=>{
      input.value='';
      const finish=f=>{input.removeEventListener('change',change);input.removeEventListener('cancel',cancel);resolve(f);};
      const change=()=>finish(input.files?.[0]??null),cancel=()=>finish(null);
      input.addEventListener('change',change);input.addEventListener('cancel',cancel);input.click();
    });
    if(!file)return null;
  }
  if(!/\.(md|markdown|txt)$/i.test(file.name))throw new Error('Select a Markdown or plain-text document.');
  return {source:decodeSource(await file.arrayBuffer()),name:file.name,handle};
}
export async function writeSnapshot(snapshot,saveAs=false){
  let handle=saveAs?null:snapshot.handle;
  if(!handle&&typeof window.showSaveFilePicker==='function')handle=await window.showSaveFilePicker({suggestedName:markdownName(snapshot.name),types});
  if(!handle){downloadSource(snapshot.source,snapshot.name);return {download:true};}
  const stream=await handle.createWritable();
  try{await stream.write(snapshot.source);await stream.close();}catch(e){try{await stream.abort();}catch{}throw e;}
  return {download:false,handle,name:handle.name};
}
