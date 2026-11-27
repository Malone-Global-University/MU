// Pure file conversion helpers. CodeMirror's internal representation uses LF.
export const MAX_FILE_BYTES = 8 * 1024 * 1024;
export function decodeDocument(bytes) {
  if (bytes.byteLength > MAX_FILE_BYTES) throw new Error('Files larger than 8 MiB are not supported in this build.');
  const raw = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(bytes);
  const bom = raw.startsWith('\uFEFF');
  const text = bom ? raw.slice(1) : raw;
  if (text.includes('\0')) throw new Error('Binary or non-UTF-8 text is not supported.');
  const crlf = (text.match(/\r\n/g) || []).length;
  const remaining = text.replace(/\r\n/g, '');
  const lf = (remaining.match(/\n/g) || []).length;
  const cr = (remaining.match(/\r/g) || []).length;
  const mixed = [crlf, lf, cr].filter(Boolean).length > 1;
  const eol = crlf > 0 && crlf >= lf && crlf >= cr ? 'CRLF' : cr > lf ? 'CR' : 'LF';
  return { text: text.replace(/\r\n|\r/g, '\n'), bom, eol, mixed };
}
export function encodeDocument(text, { bom = false, eol = 'LF' } = {}) {
  const separator = eol === 'CRLF' ? '\r\n' : eol === 'CR' ? '\r' : '\n';
  return new TextEncoder().encode((bom ? '\uFEFF' : '') + text.replace(/\n/g, separator));
}
export function equalBytes(a, b) {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}
export function clampSplit(value) { return Math.round(Math.min(80, Math.max(20, value))); }
