import { test } from 'node:test';
import assert from 'node:assert/strict';
import { decodeDocument, encodeDocument, equalBytes, clampSplit, MAX_FILE_BYTES } from '../src/document-utils.js';
const bytes = value => new TextEncoder().encode(value);
for (const [label,raw,eol,bom] of [
  ['UTF-8 LF','<p>café 😃</p>\n','LF',false],
  ['UTF-8 BOM CRLF','\uFEFF<html>\r\n</html>\r\n','CRLF',true],
  ['CR only','a\rb\r','CR',false],
  ['empty','','LF',false],
  ['no trailing newline','<p>text</p>','LF',false]
]) test(`round trip: ${label}`,()=>{
  const input = bytes(raw), decoded = decodeDocument(input);
  assert.equal(decoded.eol,eol); assert.equal(decoded.bom,bom); assert.equal(decoded.mixed,false);
  assert.deepEqual(encodeDocument(decoded.text,decoded),input);
});
test('mixed line endings detected and normalized to dominant style',()=>{
  const decoded = decodeDocument(bytes('a\r\nb\nc\r\n'));
  assert.equal(decoded.mixed,true); assert.equal(decoded.eol,'CRLF');
  assert.equal(new TextDecoder().decode(encodeDocument(decoded.text,decoded)),'a\r\nb\r\nc\r\n');
});
test('reject malformed UTF-8',()=>assert.throws(()=>decodeDocument(Uint8Array.of(0xff,0xfe))));
test('reject binary NUL',()=>assert.throws(()=>decodeDocument(bytes('a\0b')),/Binary/));
test('reject over-limit input',()=>assert.throws(()=>decodeDocument(new Uint8Array(MAX_FILE_BYTES+1)),/8 MiB/));
test('compare disk bytes',()=>{
  assert.equal(equalBytes(bytes('abc'),bytes('abc')),true);
  assert.equal(equalBytes(bytes('abc'),bytes('abd')),false);
  assert.equal(equalBytes(bytes('abc'),bytes('ab')),false);
});
test('split bounds and rounding',()=>{
  assert.deepEqual([-5,20,50.4,50.6,80,500].map(clampSplit),[20,20,50,51,80,80]);
});
