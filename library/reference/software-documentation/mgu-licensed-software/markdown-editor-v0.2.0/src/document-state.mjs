export const normalizeSource = text => text.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
export function markdownName(name = 'untitled.md') {
  const clean = String(name).trim().replace(/[\\/:*?"<>|\u0000-\u001f]/g, '_') || 'untitled.md';
  return /\.(md|markdown)$/i.test(clean) ? clean : `${clean}.md`;
}
export function decodeSource(bytes) {
  const text = new TextDecoder('utf-8', {fatal:true}).decode(bytes);
  if (text.includes('\0')) throw new Error('Binary or unsupported file encoding. Use UTF-8 Markdown.');
  return normalizeSource(text);
}
export class DocumentState {
  constructor(source='', name='untitled.md', handle=null) { this.reset(source,name,handle); }
  reset(source,name='untitled.md',handle=null) { this.source=source; this.saved=source; this.name=name; this.handle=handle; this.revision=(this.revision??0)+1; }
  edit(source) { if(source!==this.source){this.source=source;this.revision++;} }
  get dirty(){return this.source!==this.saved;}
  snapshot(){return {source:this.source,name:this.name,handle:this.handle,revision:this.revision};}
  savedSnapshot(snapshot, name, handle){this.saved=snapshot.source;this.name=name;this.handle=handle;}
}
export function statistics(source){return {lines:source.split('\n').length,words:source.trim()?source.trim().split(/\s+/u).length:0,units:source.length};}
