import MarkdownIt from 'markdown-it';
import {installExtendedMarkdown} from './extended-markdown.mjs';

export const RENDERER_VERSION = '0.3.0';
export const MAX_SOURCE_LENGTH = 200_000;
const parser = new MarkdownIt('commonmark', {
  html: false, linkify: false, typographer: false, breaks: false, maxNesting: 20,
});
// Explicitly enable only the selected extended syntax. No embedded image loads.
parser.disable(['image']);
installExtendedMarkdown(parser);
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

/** Pure synchronous application-independent interface. HTML is a fragment, not a page. */
export function renderMarkdown(source, { inertLinks = false, sourceMap = false } = {}) {
  if (typeof source !== 'string') throw new TypeError('Markdown source must be a string.');
  if (source.length > MAX_SOURCE_LENGTH) {
    return { html: '', diagnostics: [{ severity: 'error', code: 'SOURCE_LIMIT', message: `Preview limit: ${MAX_SOURCE_LENGTH.toLocaleString('en-US')} UTF-16 code units. Source remains intact.` }] };
  }
  try {
    const diagnostics = [];
    const env = { inertLinks: Boolean(inertLinks), diagnostics };
    if (!sourceMap) return { html: parser.render(source, env), diagnostics };
    const tokens = parser.parse(source, env);
    for (const token of tokens) {
      if (token.block && !token.hidden && (token.nesting === 1 || ['code_block', 'hr', 'fence', 'mgu_double_rule', 'mgu_math_block'].includes(token.type)) &&
          Array.isArray(token.map) && Number.isSafeInteger(token.map[0]) && Number.isSafeInteger(token.map[1]) && token.map[0] >= 0 && token.map[1] > token.map[0]) {
        token.attrSet('data-source-line', String(token.map[0]));
        token.attrSet('data-source-end', String(token.map[1]));
      }
    }
    return { html: parser.renderer.render(tokens, parser.options, env), diagnostics };
  } catch {
    return { html: '', diagnostics: [{ severity: 'error', code: 'RENDER_FAILED', message: 'Rendering failed. Your source has not been modified.' }] };
  }
}
