import {parseDocument, visit} from 'yaml';
import {requireCondition as check, warning} from './errors.mjs';

// Preview adapter, NOT a substitute for the approved editorial standard.
// Only known fields from the planning discussion are consumed. Unknown fields are retained in rawMetadata and reported.
const known = new Set(['title','description','type','tags','language','aliases','related','uploaded','updated','author']);
export function parseSource(text) {
  const normalized = text.replace(/^\uFEFF/,'').replace(/\r\n/g,'\n');
  const lines = normalized.split('\n');
  if (lines[0]!=='---') return {body:normalized, rawMetadata:{}, diagnostics:[warning('LEGACY_METADATA','No YAML front matter: preview will derive title from article H1; unknown fields remain unknown.')]};
  const end = lines.findIndex((v,i)=>i>0 && v==='---');
  check(end>0,'METADATA_INVALID','Opening YAML delimiter has no closing --- line.');
  const yaml = lines.slice(1,end).join('\n');
  check(yaml.length<=16384,'METADATA_INVALID','Front matter exceeds 16,384 UTF-16 code units.');
  const doc = parseDocument(yaml,{schema:'core',uniqueKeys:true,strict:true,customTags:[]});
  check(!doc.errors.length && !doc.warnings.length,'METADATA_INVALID',[...doc.errors,...doc.warnings].map(e=>e.message).join('; '));
  visit(doc,{Alias(){check(false,'METADATA_INVALID','YAML aliases are not accepted in preview metadata.');}, Node(_key,node){check(!node.tag || /^tag:yaml\.org,2002:(?:str|map|seq|int|float|bool|null)$/.test(node.tag),'METADATA_INVALID','Unsupported YAML tag.');}});
  const rawMetadata = doc.toJS({maxAliasCount:0});
  check(rawMetadata && typeof rawMetadata==='object' && !Array.isArray(rawMetadata) && Object.getPrototypeOf(rawMetadata)===Object.prototype,'METADATA_INVALID','Front matter must be a mapping.');
  const diagnostics = [];
  for (const key of Object.keys(rawMetadata)) if (!known.has(key)) diagnostics.push(warning('METADATA_UNMAPPED',`Field '${key}' is not consumed by the provisional preview adapter.`));
  return {body:lines.slice(end+1).join('\n'),rawMetadata,diagnostics};
}
function optionalText(data,key) {
  if (!Object.hasOwn(data,key)) return null;
  const value=data[key];
  check(typeof value==='string' && value.trim() && !/[\x00-\x1f\x7f]/.test(value),'METADATA_INVALID',`${key} must be a nonempty single-line string.`);
  return value.trim();
}
function optionalList(data,key) {
  if (!Object.hasOwn(data,key)) return [];
  check(Array.isArray(data[key]) && data[key].every(v=>typeof v==='string' && v.trim() && !/[\x00-\x1f\x7f]/.test(v)),'METADATA_INVALID',`${key} must be a list of nonempty strings.`);
  return [...new Set(data[key].map(v=>v.trim()))];
}
function dateField(data,key) {
  const value=optionalText(data,key); if(!value) return null;
  const iso=/^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  const us=/^(\d{1,2})-(\d{1,2})-(\d{4})$/.exec(value);
  check(iso||us,'METADATA_INVALID',`${key} must be YYYY-MM-DD or M-D-YYYY in preview.`);
  const [y,m,d]=iso?[+iso[1],+iso[2],+iso[3]]:[+us[3],+us[1],+us[2]];
  const dt=new Date(Date.UTC(y,m-1,d));
  check(dt.getUTCFullYear()===y && dt.getUTCMonth()===m-1 && dt.getUTCDate()===d,'METADATA_INVALID',`Invalid ${key} date.`);
  return `${y}-${String(m).padStart(2,'0')}-${String(d).padStart(2,'0')}`;
}
// Recover only the exact human-readable legacy classification convention supplied by MGU.
// Preserve the original section in the Markdown body; do not rewrite editorial content.
function legacyClassification(body) {
  const lines=body.split('\n'); const start=lines.findIndex(l=>/^## Classification\s*$/.test(l));
  if(start<0)return {};
  const values={};
  for(const line of lines.slice(start+1)){
    if(/^#{1,2}\s/.test(line))break;
    const m=/^[-*]\s+\*\*(Collection|Division|Category|Subjects):\*\*\s+(.+?)\s*$/.exec(line);
    if(m)values[m[1].toLowerCase()]=m[2];
  }
  return values;
}
export function normalizeMetadata(parsed,context) {
  const d=parsed.rawMetadata;
  const uploaded=dateField(d,'uploaded'),updated=dateField(d,'updated');
  check(!uploaded||!updated||updated>=uploaded,'METADATA_INVALID','updated precedes uploaded.');
  const language=optionalText(d,'language') || 'en';
  check(/^[a-z]{2,8}(?:-[A-Za-z0-9]{1,8})*$/.test(language),'METADATA_INVALID','Invalid language tag.');
  const diagnostics=[...parsed.diagnostics,warning('SCHEMA_PENDING','Final approved metadata standard was not supplied; this is a provisional preview adapter, not certified editorial validation.')];
  const legacy=legacyClassification(parsed.body);
  const tags=Object.hasOwn(d,'tags')?optionalList(d,'tags'):(legacy.subjects??'').split(',').map(v=>v.trim()).filter(Boolean);
  const record={...context,body:parsed.body,title:optionalText(d,'title'),description:optionalText(d,'description'),contentType:optionalText(d,'type'),language,tags:[...new Set(tags)],legacyClassification:legacy,aliases:optionalList(d,'aliases'),related:optionalList(d,'related'),author:optionalText(d,'author'),uploaded,updated};
  if(legacy.subjects&&!Object.hasOwn(d,'tags'))diagnostics.push(warning('LEGACY_TAGS','Tags recovered from legacy Classification section for preview only.'));
  for(const [label,index] of [['division',0],['category',1]]) {
    const expected=context.classification?.path?.[index];
    if(legacy[label]&&expected&&legacy[label].toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'')!==expected)diagnostics.push(warning('CLASSIFICATION_REVIEW',`Legacy ${label} differs from directory hierarchy; review before publication.`));
  }
  for(const field of ['description','contentType','uploaded','updated']) if(!record[field]) diagnostics.push(warning('METADATA_UNKNOWN',`${field} not supplied; not invented.`));
  return {record,diagnostics};
}
