export const VIEW_MODES=Object.freeze(['horizontal','vertical','source','preview']);
export function normalizeLayout(value={}){
  const p=value&&typeof value==='object'?value:{};
  const viewMode=VIEW_MODES.includes(p.viewMode)?p.viewMode:'horizontal';
  return {viewMode,splitMode:isSplit(viewMode)?viewMode:isSplit(p.splitMode)?p.splitMode:'horizontal',menusVisible:typeof p.menusVisible==='boolean'?p.menusVisible:true};
}
export function isSplit(mode){return mode==='horizontal'||mode==='vertical';}
export function togglePane(mode,side,previous='horizontal'){
  if(!['source','preview'].includes(side))return mode;
  return mode===side?(isSplit(previous)?previous:'horizontal'):side;
}
export function flipOrientation(mode,previous='horizontal'){
  return (isSplit(mode)?mode:previous)==='horizontal'?'vertical':'horizontal';
}
export function clampSplit(n){return Number.isFinite(n)?Math.min(80,Math.max(20,Math.round(n))):50;}
export function pointerSplit(mode,rect,x,y){
  const size=mode==='vertical'?rect.height:rect.width;
  return size>0?clampSplit(100*(mode==='vertical'?y-rect.top:x-rect.left)/size):50;
}
export function dividerKey(mode,key,split){
  if(key==='Home')return 20;if(key==='End')return 80;
  const minus=mode==='vertical'?'ArrowUp':'ArrowLeft',plus=mode==='vertical'?'ArrowDown':'ArrowRight';
  return key===minus?clampSplit(split-2):key===plus?clampSplit(split+2):null;
}
export function layoutShortcut(e){
  if(e.defaultPrevented||e.repeat||!e.altKey||!e.shiftKey||e.ctrlKey||e.metaKey||e.getModifierState?.('AltGraph'))return null;
  return ({KeyM:'menus',KeyO:'orientation',Digit1:'source',Digit2:'preview',Digit3:'both',KeyF:'fullscreen'})[e.code]??null;
}
