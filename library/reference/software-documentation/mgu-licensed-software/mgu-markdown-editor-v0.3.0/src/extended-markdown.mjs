// Restricted MGU extensions. The caller owns parser configuration and escaping.
import katex from 'katex';
export const DOUBLE_RULE_MARKER = ':::mgu-double-rule';
export const MAX_FORMULA_LENGTH = 4096;
export const MAX_FORMULAS = 500;
const escaped = (text, at) => { let n = 0; while (at > 0 && text[--at] === '\\') n++; return n % 2 === 1; };
const lineText = (state, line) => state.src.slice(state.bMarks[line] + state.tShift[line], state.eMarks[line]);
const isIndented = (state, line) => state.sCount[line] - state.blkIndent >= 4;

function doubleRule(state, start, end, silent) {
  if (isIndented(state, start) || lineText(state, start).trimEnd() !== DOUBLE_RULE_MARKER) return false;
  if (silent) return true;
  const token = state.push('mgu_double_rule', 'hr', 0);
  token.block = true; token.map = [start, start + 1]; state.line = start + 1;
  return true;
}

function mathBlock(state, start, end, silent) {
  if (isIndented(state, start)) return false;
  const first = lineText(state, start).trimEnd();
  const open = first.startsWith('$$') ? '$$' : first.startsWith('\\[') ? '\\[' : null;
  if (!open || (open === '$$' && first.startsWith('$$$'))) return false;
  const close = open === '$$' ? '$$' : '\\]';
  let content = first.slice(open.length), next = start + 1;
  const sameLineEnd = content.length - close.length;
  if (sameLineEnd >= 0 && content.endsWith(close) && !escaped(content, sameLineEnd)) {
    content = content.slice(0, sameLineEnd);
  } else {
    // Require an opener on its own line and a matching standalone closer.
    if (content.trim()) return false;
    const lines = []; let size = 0, found = false;
    for (; next < end; next++) {
      if (state.sCount[next] < state.blkIndent && !state.isEmpty(next)) break;
      const line = lineText(state, next);
      if (line.trim() === close && !isIndented(state, next)) { found = true; next++; break; }
      // Do not swallow a later opener/other block delimiter or an unlimited document.
      if (line.trim() === '\\[' || /^\s*(```|~~~)/.test(line)) break;
      size += line.length + 1;
      if (size > MAX_FORMULA_LENGTH) return false;
      lines.push(line);
    }
    if (!found) return false;
    content = lines.join('\n');
  }
  if (!content.trim() || content.length > MAX_FORMULA_LENGTH) return false;
  if (silent) return true;
  const token = state.push('mgu_math_block', 'div', 0);
  token.block = true; token.map = [start, next]; token.content = content; token.markup = open;
  state.line = next; return true;
}

function mathInline(state, silent) {
  const {src, pos, posMax} = state;
  let open, close;
  if (src.startsWith('\\(', pos)) {open = '\\('; close = '\\)';}
  else if (src[pos] === '$' && src[pos-1] !== '$' && src[pos+1] !== '$' && src[pos+1] && !/\s/.test(src[pos+1])) {open = close = '$';}
  else return false;
  const start = pos + open.length;
  const limit = Math.min(posMax, start + MAX_FORMULA_LENGTH + close.length);
  for (let i = start; i + close.length <= limit; i++) {
    if (src[i] === '\n') return false;
    if (!src.startsWith(close, i) || escaped(src, i)) continue;
    if (i === start) return false;
    if (close === '$' && (src[i-1] === '$' || src[i+1] === '$' || /\s/.test(src[i-1]) || /\d/.test(src[i+1] || ''))) return false;
    const content = src.slice(start, i);
    if (!content.trim()) return false;
    if (!silent) { const token = state.push('mgu_math_inline', 'span', 0); token.content = content; token.markup = open; }
    state.pos = i + close.length; return true;
  }
  return false;
}

export function installExtendedMarkdown(parser) {
  parser.enable(['table','fence','strikethrough']);
  parser.block.ruler.before('fence','mgu_double_rule',doubleRule,{alt:['paragraph','reference','blockquote','list']});
  parser.block.ruler.before('fence','mgu_math_block',mathBlock,{alt:['paragraph','reference','blockquote','list']});
  parser.inline.ruler.before('escape','mgu_math_inline',mathInline);
  parser.renderer.rules.mgu_double_rule = (tokens,i,opts,env,self) => {
    tokens[i].attrSet('class','mgu-double-rule');
    return `<hr${self.renderAttrs(tokens[i])}>\n`;
  };
  function renderMath(tokens,i,opts,env,self,displayMode) {
    const token=tokens[i];
    const close=token.markup==='\\('? '\\)' : token.markup==='\\[' ? '\\]' : token.markup;
    let result;
    try {
      env.mathCount = (env.mathCount || 0) + 1;
      if (env.mathCount > MAX_FORMULAS) throw new Error('formula limit');
      // MathML avoids external webfonts/stylesheets; scripts and trusted TeX features stay disabled.
      result = katex.renderToString(token.content, {output:'mathml',displayMode,trust:false,throwOnError:true,maxExpand:100,maxSize:10,strict:'error'});
    } catch {
      result = `<span class="mgu-math-error">${parser.utils.escapeHtml(token.markup+token.content+close)}</span>`;
      if (!env.mathWarning) {
        env.mathWarning=true;
        env.diagnostics?.push({severity:'warning',code:'MATH_FALLBACK',message:'Some math could not be rendered (unsupported syntax, invalid formula or formula limit); original notation is shown.'});
      }
    }
    const tag=displayMode?'div':'span'; token.attrSet('class',displayMode?'mgu-math-block':'mgu-math-inline');
    return `<${tag}${self.renderAttrs(token)}>${result}</${tag}>${displayMode?'\n':''}`;
  }
  parser.renderer.rules.mgu_math_inline=(t,i,o,e,s)=>renderMath(t,i,o,e,s,false);
  parser.renderer.rules.mgu_math_block=(t,i,o,e,s)=>renderMath(t,i,o,e,s,true);
}
