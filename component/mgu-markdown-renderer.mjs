/**
 * MGU website Markdown renderer — independent of the Markdown Editor.
 * One local module; markdown-it is supplied by the root npm installation.
 * Returns HTML fragments, not complete website pages. No filesystem or DOM access.
 */
import MarkdownIt from 'markdown-it';

export const RENDERER_NAME = 'mgu-website-markdown-renderer';
export const RENDERER_VERSION = '1.0.0';
export const MAX_SOURCE_LENGTH = 200_000;
const cache = new Map();

export function safeHref(url) {
  return typeof url === 'string' && url.length > 0 &&
    !/[\u0000-\u0020\u007f\\]/.test(url) && !url.startsWith('//') &&
    (!/^[a-z][a-z0-9+.-]*:/i.test(url) || /^(https?:|mailto:)/i.test(url));
}

// Preserve TeX as escaped source, rather than interpreting it as Markdown.
// Typesetting is deliberately left to a future website presentation component.
function installMathSource(parser) {
  const escaped = (s, pos) => {
    let n = 0;
    while (pos > 0 && s[--pos] === '\\') n++;
    return n % 2 !== 0;
  };
  parser.inline.ruler.before('escape', 'mgu_math_inline', (state, silent) => {
    const start = state.pos;
    const s = state.src;
    const dollar = s[start] === '$' && s[start + 1] !== '$' && !escaped(s, start);
    const paren = s.startsWith('\\(', start) && !escaped(s, start);
    if (!dollar && !paren) return false;
    const open = dollar ? '$' : '\\(';
    const close = dollar ? '$' : '\\)';
    const bodyStart = start + open.length;
    if (dollar && (!s[bodyStart] || /\s/.test(s[bodyStart]))) return false;
    let end = bodyStart;
    while ((end = s.indexOf(close, end)) !== -1 && end < state.posMax) {
      if (s.slice(bodyStart, end).includes('\n')) return false;
      if (!escaped(s, end) && end > bodyStart && (!dollar ||
        (!/\s/.test(s[end - 1]) && s[end + 1] !== '$' && !/\d/.test(s[end + 1] || '')))) {
        if (!silent) {
          const token = state.push('mgu_math_inline', 'span', 0);
          token.content = s.slice(bodyStart, end);
          token.markup = open;
          token.meta = { close };
        }
        state.pos = end + close.length;
        return true;
      }
      end += close.length;
    }
    return false;
  });
  parser.block.ruler.before('fence', 'mgu_math_block', (state, start, end, silent) => {
    if (state.sCount[start] - state.blkIndent >= 4) return false;
    const line = n => state.src.slice(state.bMarks[n] + state.tShift[n], state.eMarks[n]);
    const first = line(start).trim();
    const open = first.startsWith('$$') ? '$$' : first.startsWith('\\[') ? '\\[' : null;
    if (!open) return false;
    const close = open === '$$' ? '$$' : '\\]';
    const rest = first.slice(open.length);
    let last = start;
    let content;
    if (rest.endsWith(close) && rest.length > close.length) {
      content = rest.slice(0, -close.length).trim();
    } else {
      // Multiline math requires a standalone closing delimiter.
      const lines = rest.trim() ? [rest] : [];
      for (last = start + 1; last < end; last++) {
        if (line(last).trim() === close) break;
        lines.push(line(last));
      }
      if (last >= end) return false;
      content = lines.join('\n');
    }
    if (!content.trim()) return false;
    if (silent) return true;
    const token = state.push('mgu_math_block', 'div', 0);
    token.block = true;
    token.map = [start, last + 1];
    token.markup = open;
    token.content = content;
    token.meta = { close };
    state.line = last + 1;
    return true;
  }, { alt: ['paragraph', 'reference', 'blockquote', 'list'] });
  const mathHTML = (tokens, i, options, env, self) => {
    const t = tokens[i];
    const block = t.type === 'mgu_math_block';
    const tag = block ? 'div' : 'span';
    t.attrSet('class', block ? 'mgu-math-source mgu-math-block' : 'mgu-math-source mgu-math-inline');
    const content = t.markup + (block ? '\n' : '') + t.content + (block ? '\n' : '') + t.meta.close;
    return `<${tag}${self.renderAttrs(t)}>${parser.utils.escapeHtml(content)}</${tag}>${block ? '\n' : ''}`;
  };
  parser.renderer.rules.mgu_math_inline = mathHTML;
  parser.renderer.rules.mgu_math_block = mathHTML;
}

function getParser(features = {}, inspection = false) {
  const keys = ['tables', 'fences', 'strikethrough', 'math'];
  const enabled = keys.map(k => features[k] !== false);
  const key = `${inspection}:${enabled.map(Number).join('')}`;
  if (cache.has(key)) return cache.get(key);
  const parser = new MarkdownIt('commonmark', {
    html: inspection, linkify: false, typographer: false, breaks: false, maxNesting: 20
  });
  for (const [i, rule] of ['table', 'fence', 'strikethrough'].entries()) {
    if (enabled[i]) parser.enable(rule); else parser.disable(rule);
  }
  if (enabled[3]) installMathSource(parser);
  if (inspection) {
    // Recognize prohibited syntax and report it rather than hiding it as text.
    parser.validateLink = () => true;
  } else {
    parser.disable('image');
    const originalValidate = parser.validateLink.bind(parser);
    parser.validateLink = url => safeHref(url) && originalValidate(url);
    for (const [rule, fallback] of [['link_open', '<span class="preview-link">'], ['link_close', '</span>']]) {
      const original = parser.renderer.rules[rule];
      parser.renderer.rules[rule] = (tokens, i, options, env, self) => env.inertLinks ? fallback :
        (original || self.renderToken.bind(self))(tokens, i, options, env, self);
    }
  }
  cache.set(key, parser);
  return parser;
}

/** Strict publication preflight; code examples remain valid. */
export function inspectMarkdown(source, { features = {} } = {}) {
  if (typeof source !== 'string') throw new TypeError('Markdown source must be a string.');
  const diagnostics = [];
  if (source.length > MAX_SOURCE_LENGTH) return [{severity:'error', code:'SOURCE_LIMIT', message:'Markdown body exceeds renderer limit.'}];
  const error = (code, message) => diagnostics.push({severity:'error', code, message});
  const visit = tokens => {
    for (const t of tokens) {
      if (t.type === 'image') error('UNSUPPORTED_CONTENT', 'Embedded Markdown images are not supported by this release.');
      if (t.type === 'html_block' || t.type === 'html_inline') error('UNSUPPORTED_CONTENT', 'Raw HTML in article prose is not supported. Use fenced examples for literal HTML.');
      if (t.type === 'link_open' && !safeHref(t.attrGet('href'))) error('UNSAFE_LINK', 'Disallowed hyperlink scheme or characters.');
      if (t.children) visit(t.children);
    }
  };
  visit(getParser(features, true).parse(source, {}));
  return diagnostics;
}

function headingText(inline) {
  return (inline?.children || []).map(t =>
    ['text','code_inline','mgu_math_inline'].includes(t.type) ? t.content :
      ['softbreak','hardbreak'].includes(t.type) ? ' ' : '').join('').trim();
}

/** Compatible with the core renderMarkdown API used by MEPS. */
export function renderMarkdown(source, { inertLinks = false, sourceMap = false, outline = false, headingIds = false, features = {} } = {}) {
  if (typeof source !== 'string') throw new TypeError('Markdown source must be a string.');
  const failure = (code, message) => ({html:'', diagnostics:[{severity:'error', code, message}], ...(outline ? {outline:[]} : {})});
  if (source.length > MAX_SOURCE_LENGTH) return failure('SOURCE_LIMIT', `Source limit: ${MAX_SOURCE_LENGTH} UTF-16 code units.`);
  try {
    const parser = getParser(features);
    const env = {inertLinks:Boolean(inertLinks)};
    const tokens = parser.parse(source, env);
    const headings = [];
    const diagnostics = [];
    let math = false;
    const findMath = list => list.some(t => t.type === 'mgu_math_inline' || t.type === 'mgu_math_block' || (t.children && findMath(t.children)));
    math = findMath(tokens);
    if (math) diagnostics.push({severity:'warning', code:'MATH_SOURCE_ONLY', message:'TeX is preserved safely; mathematical typesetting is not enabled.'});
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if ((outline || headingIds) && t.type === 'heading_open' && Array.isArray(t.map)) {
        const id = `mgu-heading-${headings.length + 1}`;
        if (headingIds) t.attrSet('id', id);
        headings.push({level:Number(t.tag.slice(1)),line:t.map[0],text:headingText(tokens[i+1]) || '(Untitled heading)',...(headingIds ? {id} : {})});
      }
      if (sourceMap && t.block && !t.hidden && (t.nesting === 1 || ['code_block','hr','fence','mgu_math_block'].includes(t.type)) &&
        Array.isArray(t.map) && Number.isSafeInteger(t.map[0]) && Number.isSafeInteger(t.map[1]) && t.map[0] >= 0 && t.map[1] > t.map[0]) {
        t.attrSet('data-source-line', String(t.map[0]));
        t.attrSet('data-source-end', String(t.map[1]));
      }
    }
    return {html:parser.renderer.render(tokens, parser.options, env),diagnostics,...(outline?{outline:headings}:{})};
  } catch (error) {
    return failure('RENDER_FAILED', `Rendering failed: ${error.message}`);
  }
}
