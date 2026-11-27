export async function copyText(text, clipboard=globalThis.navigator?.clipboard){
  if(!clipboard?.writeText)throw new Error('Clipboard access unavailable; use keyboard Copy/Paste.');
  await clipboard.writeText(text);
}
export async function cutSelection(text,stillCurrent,remove,clipboard=globalThis.navigator?.clipboard){
  if(!text)return false;
  await copyText(text,clipboard);
  if(!stillCurrent())return false;
  remove();return true;
}
export async function pasteText(stillCurrent,insert,clipboard=globalThis.navigator?.clipboard){
  if(!clipboard?.readText)throw new Error('Clipboard read unavailable; use Ctrl+V.');
  const text=await clipboard.readText();if(!stillCurrent())return false;
  if(text)insert(text);return Boolean(text);
}
export async function copyRendered(html,text,clipboard=globalThis.navigator?.clipboard,Item=globalThis.ClipboardItem){
  if(clipboard?.write&&Item){try{await clipboard.write([new Item({'text/html':new Blob([html],{type:'text/html'}),'text/plain':new Blob([text],{type:'text/plain'})})]);return 'formatted';}catch{}}
  await copyText(text,clipboard);return 'plain text';
}
