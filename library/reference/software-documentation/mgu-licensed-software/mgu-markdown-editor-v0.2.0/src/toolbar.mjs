// Pure single-selection transformations; offsets are UTF-16, as in CodeMirror.
export function formatEdit(doc, from, to, command, level=1) {
  const selected=doc.slice(from,to);
  const wrap=(a,b,placeholder='text')=>({from,to,insert:a+(selected||placeholder)+b,anchor:from+a.length,head:from+a.length+(selected||placeholder).length});
  if(command==='bold') return wrap('**','**');
  if(command==='italic') return wrap('*','*');
  if(command==='both') return wrap('***','***');
  if(command==='code'){
    const text=(selected||'code').replace(/\n/g,' ');
    const ticks='`'.repeat(1+(text.match(/`+/g)||[]).reduce((max,x)=>Math.max(max,x.length),0));
    const pad=/^`|`$|^ | $/.test(text)?' ':'';
    const start=ticks+pad;
    return {from,to,insert:start+text+pad+ticks,anchor:from+start.length,head:from+start.length+text.length};
  }
  if(command==='link'){
    const label=(selected||'label').replace(/\n/g,' ').replace(/([\\\[\]])/g,'\\$1');
    const prefix=`[${label}](`, url='https://example.com';
    return {from,to,insert:prefix+url+')',anchor:from+prefix.length,head:from+prefix.length+url.length};
  }
  if(command==='rule'){
    // Insert after the selected/current line, without destroying selected content.
    let end=doc.indexOf('\n',to); if(end<0)end=doc.length;
    const insert='\n\n---\n\n'; return {from:end,to:end,insert,anchor:end+insert.length,head:end+insert.length};
  }
  if(!['heading','ul','ol','quote'].includes(command)) throw new Error('Unknown formatting command');
  const start=from===0?0:doc.lastIndexOf('\n',from-1)+1;
  const effective=to>from&&doc[to-1]==='\n'?to-1:to;
  let end=doc.indexOf('\n',effective);if(end<0)end=doc.length;
  let n=0;
  const insert=doc.slice(start,end).split('\n').map(line=>{
    if(!line.trim()&&end!==start&&command!=='quote')return line;
    const text=line|| (command==='heading'?'Heading':command==='quote'?'Quotation':'Item');
    if(command==='heading')return '#'.repeat(Math.max(1,Math.min(6,Number(level)||1)))+' '+text.replace(/^ {0,3}#{1,6}\s+/,'');
    if(command==='quote')return '> '+text;
    const body=text.replace(/^\s*(?:[-+*]|\d+[.)])\s+/,'');
    return (command==='ul'?'- ':`${++n}. `)+body;
  }).join('\n');
  return {from:start,to:end,insert,anchor:start,head:start+insert.length};
}
export function applyFormatting(view, command, level){
  const {from,to}=view.state.selection.main;
  const edit=formatEdit(view.state.doc.toString(),from,to,command,level);
  view.dispatch({changes:{from:edit.from,to:edit.to,insert:edit.insert},selection:{anchor:edit.anchor,head:edit.head},userEvent:'input.format',scrollIntoView:true});
  view.focus();return true;
}
