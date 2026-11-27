export const BASE_CSS = `
:root{color-scheme:light dark;font-size:18px}body{font:1rem/1.7 system-ui,sans-serif;max-width:78ch;margin:0 auto;padding:28px 32px 60px;overflow-wrap:anywhere;color:#182337;background:#fff}h1,h2,h3,h4,h5,h6{line-height:1.25;margin:1.3em 0 .5em}h1{font-size:2rem;border-bottom:1px solid #d9e0e8;padding-bottom:.4em;margin-top:0}h2{font-size:1.5rem}p,ul,ol{margin:.75em 0}blockquote{border-left:3px solid #64748b;padding-left:1rem;margin-left:0;color:#536176}code{font: .9em ui-monospace,monospace;background:#edf1f5;padding:2px 4px;border-radius:3px}pre{background:#edf1f5;padding:12px;overflow:auto;white-space:pre;overflow-wrap:normal}pre code{padding:0;white-space:pre}hr{border:0;border-top:1px solid #d9e0e8}.preview-link{color:#1559a6;text-decoration:underline}table{border-collapse:collapse;display:block;max-width:100%;overflow-x:auto;margin:1em 0}th,td{border:1px solid #c8d2df;padding:.45em .65em;text-align:left;vertical-align:top;overflow-wrap:normal}th{background:#e9eef5;font-weight:700}.mgu-page-break{border-top:2px dashed #8493a6;margin:1.5em 0}.mgu-page-break::after{content:"Page break";display:block;text-align:center;color:#64748b;font:12px system-ui}hr.mgu-double-rule{border:0;border-top:4px double #536176;margin:1.4em 0}.mgu-math-inline{font-size:1em}.mgu-math-block{overflow-x:auto;margin:1em 0;padding:.2em 0;text-align:center}.mgu-math-error{color:#973333;white-space:pre-wrap;font-family:ui-monospace,monospace} @media(prefers-color-scheme:dark){body{background:#151d29;color:#e4ebf4}h1,hr{border-color:#485467}hr.mgu-double-rule{border-color:#b1bdcd}th,td{border-color:#485467}th{background:#283447}.mgu-math-error{color:#ffb4ab}blockquote{color:#b8c4d3}code,pre{background:#283447}.preview-link{color:#9ac6ff}}@media(max-width:500px){body{padding:20px}}`;

const paper = ':root{color-scheme:light}body{color:#182337;background:#fff}h1,hr{border-color:#c6d0da}hr.mgu-double-rule{border-color:#536176}th,td{border-color:#c8d2df}th{background:#e9eef5}blockquote{color:#536176}code,pre{background:#edf1f5}.preview-link,a{color:#1559a6}.mgu-math-error{color:#973333}';
const presets = Object.freeze({
  standard:'',
  academic:paper+'body{font-family:Georgia,serif;max-width:76ch;line-height:1.75}h1,h2,h3,h4,h5,h6{color:#193c60}h1{border-bottom:2px solid #193c60}th{color:#193c60;background:#edf2f6}',
  technical:paper+'body{font-family:Arial,sans-serif;max-width:90ch;line-height:1.55}h1,h2,h3,h4,h5,h6{color:#243b53}h2{border-bottom:1px solid #c8d2df;padding-bottom:.2em}pre{border:1px solid #c8d2df}th{background:#dfe8f2}',
  corporate:paper+'body{font-family:Georgia,serif;max-width:76ch;line-height:1.65}h1,h2,h3,h4,h5,h6{font-family:Arial,sans-serif;color:#28364a}h1{border-bottom:3px solid #94703d}blockquote{border-color:#94703d}th{background:#f2eee5}'
});
export const PUBLICATION_PRESETS = Object.freeze([
  {id:'standard',label:'Standard'}, {id:'academic',label:'MGU Academic'}, {id:'technical',label:'Technical Report'}, {id:'corporate',label:'Corporate Report'}
].map(Object.freeze));
// Intentionally restricted custom CSS: no arbitrary selectors, resource requests,
// at-rules, escapes, comments, functions or raw HTML. Reject the entire invalid edit.
const selectors = new Set('body main h1 h2 h3 h4 h5 h6 p ul ol li blockquote table th td pre code hr a .preview-link .mgu-double-rule .mgu-math-block .mgu-math-inline'.split(' '));
const colors = /^(?:#(?:[0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})|[a-z]{1,24})$/i;
const length = /^(?:0|(?:\d{1,3}(?:\.\d{1,2})?|\.\d{1,2})(?:px|rem|em|ch|%))$/i;
const spacing = v=>v.split(/ +/).length<=4&&v.split(/ +/).every(x=>length.test(x));
const values = Object.freeze({
  'color':v=>colors.test(v), 'background-color':v=>colors.test(v), 'border-color':v=>colors.test(v),
  'font-family':v=>/^[a-z][a-z0-9 -]{0,50}(?:, *[a-z][a-z0-9 -]{0,50}){0,5}$/i.test(v),
  'font-size':v=>length.test(v), 'font-weight':v=>/^(normal|bold|[1-9]00)$/.test(v), 'font-style':v=>/^(normal|italic|oblique)$/.test(v),
  'line-height':v=>/^(?:normal|[1-3](?:\.\d{1,2})?)$/.test(v)||length.test(v),
  'text-align':v=>/^(left|right|center|justify|start|end)$/.test(v), 'text-decoration':v=>/^(none|underline|line-through)$/.test(v),
  'margin':spacing,'margin-top':spacing,'margin-bottom':spacing,'margin-left':spacing,'margin-right':spacing,
  'padding':spacing,'padding-top':spacing,'padding-bottom':spacing,'padding-left':spacing,'padding-right':spacing,
  'max-width':v=>length.test(v)||v==='none', 'border-width':spacing, 'border-style':v=>/^(none|solid|dashed|dotted|double)$/.test(v)
});
export function validateCustomCSS(input='') {
  if(typeof input!=='string'||input.length>8000||/[<>\\@()\[\]"'!]/.test(input)||/\/\*/.test(input)) throw new Error('Custom CSS must be at most 8,000 characters and use only supported literal style rules.');
  const rules=[]; let rest=input.trim();
  while(rest){
    const m=/^([^{}]+)\{([^{}]*)\}/.exec(rest);
    if(!m)throw new Error('Invalid CSS rule. Use selector { property: value; }.');
    const selected=m[1].split(',').map(x=>x.trim());
    if(!selected.every(x=>selectors.has(x)))throw new Error('Unsupported custom CSS selector.');
    const declarations=[];
    for(const raw of m[2].split(';')){
      if(!raw.trim())continue;
      const d=/^\s*([a-z-]+)\s*:\s*(.*?)\s*$/i.exec(raw.trim());
      const key=d?.[1].toLowerCase(), val=d?.[2].replace(/\s+/g,' ');
      if(!d||!Object.hasOwn(values,key)||!values[key](val))throw new Error(`Unsupported custom CSS property or value: ${key||'invalid declaration'}`);
      declarations.push(`${key}:${val}`);
    }
    if(!declarations.length)throw new Error('Empty custom CSS rule.');
    rules.push(`${selected.join(',')}{${declarations.join(';')}}`);
    rest=rest.slice(m[0].length).trim();
  }
  return rules.join('\n');
}
export function publicationCSS({preset='standard',customCSS='',fontSize=18,print=false}={}){
  if(!Object.hasOwn(presets,preset))throw new Error('Unknown publication style.');
  const n=Number(fontSize);if(!Number.isInteger(n)||n<12||n>32)throw new RangeError('Font size must be 12–32 px.');
  const custom=validateCustomCSS(customCSS);
  return `${BASE_CSS}\n${presets[preset]}\n:root{font-size:${n}px}\na{color:#1559a6;text-decoration:underline}\n${custom}${print?'\n@media print{:root{color-scheme:light}body{background:#fff;color:#000;max-width:none;margin:0;padding:0}h1,h2,h3,h4,h5,h6{break-after:avoid}pre{white-space:pre-wrap;overflow:visible}table{display:table;max-width:100%;overflow:visible}thead{display:table-header-group}tr{break-inside:avoid}.mgu-page-break{break-before:page;border:0;margin:0}.mgu-page-break::after{content:none}}':''}`;
}
