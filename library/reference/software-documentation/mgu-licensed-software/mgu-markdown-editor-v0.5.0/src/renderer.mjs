import MarkdownIt from 'markdown-it';
import {installExtendedMarkdown} from './extended-markdown.mjs';

export const RENDERER_VERSION = '0.5.0';
export const MAX_SOURCE_LENGTH = 200_000;
const cache = new Map();
function getParser(features = {}) {
  const enabled = ['tables','fences','strikethrough','math','doubleRule'].map(key=>features[key] !== false);
  const key = enabled.map(Number).join('');
  if(cache.has(key)) return cache.get(key);
  const parser = new MarkdownIt('commonmark', {
  html: false, linkify: false, typographer: false, breaks: false, maxNesting: 20,
});
// Explicitly enable only the selected extended syntax. No embedded image loads.
parser.disable(['image']);
installExtendedMarkdown(parser);
  if(!enabled[0]) parser.disable('table');
  if(!enabled[1]) parser.disable('fence');
  if(!enabled[2]) parser.disable('strikethrough');
  if(!enabled[3]) parser.disable(['mgu_math_block','mgu_math_inline']);
  if(!enabled[4]) parser.disable('mgu_double_rule');
const originalValidate = parser.validateLink.bind(parser);
parser.validateLink = (url) => {
  if (typeof url !== 'string' || /[\u0000-\u0020\u007f\\]/.test(url)) return false;
  // Only ordinary web/mail links and relative references; no protocol-relative URLs.
  if (url.startsWith('//')) return false;
  const scheme = /^[a-z][a-z0-9+.-]*:/i.exec(url);
  return (!scheme || /^(https?:|mailto:)$/i.test(scheme[0])) && originalValidate(url);
};
const renderLinkOpen = parser.renderer.rules.link_open;
const renderLinkClose = parser.renderer.rules.link_close;
parser.renderer.rules.link_open = (tokens, idx, options, env, self) => env.inertLinks
  ? '<span class="preview-link">'
  : (renderLinkOpen || self.renderToken.bind(self))(tokens, idx, options, env, self);
parser.renderer.rules.link_close = (tokens, idx, options, env, self) => env.inertLinks
  ? '</span>'
  : (renderLinkClose || self.renderToken.bind(self))(tokens, idx, options, env, self);

  cache.set(key,parser);
  return parser;
}
function headingText(inline){
  return (inline?.children||[]).map(token=>['text','code_inline','mgu_math_inline'].includes(token.type)?token.content: ['softbreak','hardbreak'].includes(token.type)?' ':'').join('').trim();
}
/** Pure synchronous application-independent interface. HTML is a fragment, not a page. */
export function renderMarkdown(source, { inertLinks = false, sourceMap = false, outline = false, headingIds = false, features = {} } = {}) {
  if (typeof source !== 'string') throw new TypeError('Markdown source must be a string.');
  if (source.length > MAX_SOURCE_LENGTH) {
    return { html: '', diagnostics: [{ severity: 'error', code: 'SOURCE_LIMIT', message: `Preview limit: ${MAX_SOURCE_LENGTH.toLocaleString('en-US')} UTF-16 code units. Source remains intact.` }] };
  }
  try {
    const parser = getParser(features);
    const diagnostics = [];
    const env = { inertLinks: Boolean(inertLinks), diagnostics };
    if (!sourceMap && !outline && !headingIds) return { html: parser.render(source, env), diagnostics };
    const tokens = parser.parse(source, env);
    const headings = [];
    if(outline || headingIds) for(let i=0;i<tokens.length;i++){
      const token=tokens[i];
      if(token.type==='heading_open' && Array.isArray(token.map)){
        const id=`mgu-heading-${headings.length+1}`;
        if(headingIds)token.attrSet('id',id);
        headings.push({level:Number(token.tag.slice(1)),line:token.map[0],text:headingText(tokens[i+1])||'(Untitled heading)',...(headingIds?{id}:{})});
      }
    }
    if(sourceMap) for (const token of tokens) {
      if (token.block && !token.hidden && (token.nesting === 1 || ['code_block', 'hr', 'fence', 'mgu_double_rule', 'mgu_math_block', 'mgu_page_break'].includes(token.type)) &&
          Array.isArray(token.map) && Number.isSafeInteger(token.map[0]) && Number.isSafeInteger(token.map[1]) && token.map[0] >= 0 && token.map[1] > token.map[0]) {
        token.attrSet('data-source-line', String(token.map[0]));
        token.attrSet('data-source-end', String(token.map[1]));
      }
    }
    return { html: parser.renderer.render(tokens, parser.options, env), diagnostics, ...(outline?{outline:headings}:{}) };
  } catch {
    return { html: '', diagnostics: [{ severity: 'error', code: 'RENDER_FAILED', message: 'Rendering failed. Your source has not been modified.' }] };
  }
}
