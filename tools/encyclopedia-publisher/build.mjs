import {loadConfig,sha256} from './src/config.mjs';
import {discover} from './src/discover.mjs';
import {requireCondition as check} from './src/errors.mjs';
import fs from 'node:fs/promises';
import {preflight,writePreview} from './src/output.mjs';
import {report} from './src/report.mjs';
const usage='Usage: node tools/encyclopedia-publisher/build.mjs --source library/encyclopedia/path/article.md [--dry-run]';
try{
  const args=process.argv.slice(2);
  if(args.length===1&&args[0]==='--help'){console.log(usage);process.exit(0);}
  let source,dryRun=false;
  for(let i=0;i<args.length;i++){
    if(args[i]==='--source'&&!source){source=args[++i];check(source&&!source.startsWith('--'),'CLI_INVALID',usage);}
    else if(args[i]==='--dry-run'&&!dryRun)dryRun=true;
    else check(false,'CLI_INVALID',usage);
  }
  check(source,'CLI_INVALID',usage);
  const c=await loadConfig();
  const {parseSource,normalizeMetadata}=await import('./src/metadata.mjs');
  const {loadRenderer,renderArticle}=await import('./src/render.mjs');
  const {assemble}=await import('./src/template.mjs');
  const {validatePage,validateAssets}=await import('./src/validate.mjs');
  const renderer=await loadRenderer(c);
  await validateAssets(c);
  const input=await discover(source,c);
  const {text,...context}=input;
  const normalized=normalizeMetadata(parseSource(text),context);
  const rendered=renderArticle(normalized.record,renderer);
  const html=await assemble(rendered);validatePage(html,rendered);
  await preflight(c,rendered.record);
  check(sha256(await fs.readFile(input.absolute))===input.sourceHash,'SOURCE_CHANGED','Source changed during build; retry.');
  const output=dryRun?{}:await writePreview(c,rendered.record,html);
  report({record:rendered.record,diagnostics:[...normalized.diagnostics,...rendered.diagnostics],dryRun,...output});
}catch(e){console.error(`FAIL ${e.code??'BUILD_FAILED'}: ${e.message}`);process.exitCode=1;}
