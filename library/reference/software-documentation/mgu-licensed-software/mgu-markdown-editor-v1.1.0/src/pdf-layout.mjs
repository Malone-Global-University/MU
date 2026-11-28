import {publicationCSS} from './publication-styles.mjs';
export const PDF_PAPER_SIZES=Object.freeze(['Letter','A4','Legal']);
export const PDF_DEFAULTS=Object.freeze({paper:'Letter',orientation:'portrait',marginTop:20,marginRight:20,marginBottom:20,marginLeft:20,fontPt:12,title:'Markdown document',author:'',institution:'',subject:'',keywords:'',header:'',footer:'',pageNumbers:true,cover:false,toc:false,preset:'standard',customCSS:'',activeLinks:false});
export const escapeHTML=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
// CSS string escapes for ALL non-alphanumeric characters: never embed raw markup or CSS syntax.
export const cssString=s=>'"'+Array.from(s,c=>/[a-zA-Z0-9 ]/.test(c)?c:'\\'+c.codePointAt(0).toString(16)+' ').join('')+'"';
function boundedText(value,max,key){if(typeof value!=='string'||value.length>max||/[\u0000-\u001f\u007f]/.test(value))throw new Error(`Invalid ${key} (maximum ${max} characters; single line).`);return value.trim();}
export function normalizePDFOptions(input={}){
  if(!input||typeof input!=='object'||Array.isArray(input))throw new TypeError('PDF settings must be an object.');
  const o={...PDF_DEFAULTS,...input};
  if(!PDF_PAPER_SIZES.includes(o.paper)||!['portrait','landscape'].includes(o.orientation))throw new Error('Invalid paper size or orientation.');
  for(const k of ['marginTop','marginRight','marginBottom','marginLeft']){o[k]=Number(o[k]);if(!Number.isInteger(o[k])||o[k]<10||o[k]>35)throw new Error('Margins must be whole millimeters from 10 to 35.');}
  o.fontPt=Number(o.fontPt);if(!Number.isInteger(o.fontPt)||o.fontPt<9||o.fontPt>18)throw new Error('Print font must be 9–18 pt.');
  for(const k of ['title','author','institution','subject','keywords','header','footer'])o[k]=boundedText(o[k],k==='keywords'?400:160,k);
  o.title ||= PDF_DEFAULTS.title;
  for(const k of ['pageNumbers','cover','toc','activeLinks'])if(typeof o[k]!=='boolean')throw new TypeError(`${k} must be boolean.`);
  // Validate preset and custom CSS using the same publication policy as preview/export.
  publicationCSS({preset:o.preset,customCSS:o.customCSS});
  if((o.header&&o.marginTop<15)||((o.footer||o.pageNumbers)&&o.marginBottom<15))throw new Error('Headers and footers/page numbers require at least 15 mm at the corresponding edge.');
  return o;
}
export function pdfFilename(name='untitled.md'){
  let base=String(name).trim().replace(/[\\/:*?"<>|\u0000-\u001f]/g,'_').replace(/[. ]+$/g,'').replace(/(?:\.(?:md|markdown|txt|html?|pdf))+$/i,'').replace(/[. ]+$/g,'');
  if(/^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])(?:\.|$)/i.test(base))base='_'+base;
  return `${base||'untitled'}.pdf`;
}
export function printFilename(name){return pdfFilename(name).replace(/\.pdf$/i,'.print.html');}
export function printCSS(input={}){
  const o=normalizePDFOptions(input);
  const marginBox=(where,content)=>`@${where}{content:${content};font:9pt Arial,sans-serif;color:#46566c;vertical-align:middle;}`;
  const boxes=[o.header?marginBox('top-center',cssString(o.header)):'',o.footer?marginBox('bottom-left',cssString(o.footer)):'',o.pageNumbers?marginBox('bottom-right','"Page " counter(page) " of " counter(pages)'):''].join('');
  return `${publicationCSS({preset:o.preset,customCSS:o.customCSS,print:true})}
:root{color-scheme:light;font-size:${o.fontPt}pt}body{background:#fff;color:#182337;margin:0 auto;padding:24px;max-width:90ch} .mgu-cover{min-height:55vh;display:flex;flex-direction:column;justify-content:center;border-bottom:2px solid #193c60;padding:24px 0;margin-bottom:24px;overflow-wrap:anywhere}.mgu-cover h1{font-size:2.4rem}.mgu-cover p{margin:.4em 0}.mgu-toc{margin:1.5em 0}.mgu-toc ol{list-style:none;padding:0}.mgu-toc li{margin:.3em 0}.mgu-toc .level-2{padding-left:1em}.mgu-toc .level-3{padding-left:2em}.mgu-toc .level-4,.mgu-toc .level-5,.mgu-toc .level-6{padding-left:3em}
@page{size:${o.paper} ${o.orientation};margin:${o.marginTop}mm ${o.marginRight}mm ${o.marginBottom}mm ${o.marginLeft}mm;${boxes}}
@media print{html{color-scheme:light!important;font-size:${o.fontPt}pt!important}body,main{max-width:none!important;margin:0!important;padding:0!important;background:white!important;color:#182337!important;overflow:visible!important}*{print-color-adjust:exact;-webkit-print-color-adjust:exact}h1,h2,h3,h4,h5,h6{break-after:avoid;break-inside:avoid}p,li{orphans:3;widows:3}pre,pre code{white-space:pre-wrap!important;overflow-wrap:anywhere!important;overflow:visible!important}table{display:table;max-width:100%;width:100%;table-layout:fixed;overflow:visible}th,td{overflow-wrap:anywhere}thead{display:table-header-group}tr{break-inside:avoid}blockquote{break-inside:auto}.mgu-cover{min-height:0;padding-top:25mm;break-after:page;border:0;margin:0}.mgu-toc{break-after:page;margin:0}.mgu-page-break{break-before:page;border:0;margin:0}.mgu-page-break::after{content:none}.mgu-math-block{overflow:visible;break-inside:avoid}a{color:#1559a6!important}}
`;
}
