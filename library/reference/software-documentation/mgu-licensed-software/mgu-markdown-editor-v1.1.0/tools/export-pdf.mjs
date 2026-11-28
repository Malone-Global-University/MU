// Local direct PDF generation: a fresh Chromium profile, no application server.
import {readFileSync,statSync,writeFileSync,mkdtempSync,rmSync,copyFileSync,existsSync,constants} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {tmpdir} from 'node:os';
import {resolve,join,basename,dirname} from 'node:path';
import {pathToFileURL} from 'node:url';
import {exportPrintDocument,pdfFilename} from '../public/renderer.mjs';
const usage='node tools/export-pdf.mjs <source.md> <output.pdf> [settings.json] [browser-executable]';
let work;
try{
  const [sourceArg,outputArg,settingsArg,browserArg,...extra]=process.argv.slice(2);
  if(!sourceArg||!outputArg||extra.length)throw new Error(usage);
  const sourcePath=resolve(sourceArg),outputPath=resolve(outputArg);
  if(!/\.(md|markdown|txt)$/i.test(sourcePath)||!/\.pdf$/i.test(outputPath))throw new Error('Use a Markdown input and .pdf output.');
  if(existsSync(outputPath))throw new Error('Output exists; choose a new name. Existing files are never overwritten.');
  if(!statSync(dirname(outputPath)).isDirectory())throw new Error('Output directory must exist.');
  if(statSync(sourcePath).size>800_000)throw new Error('Source exceeds the supported input size.');
  const bytes=readFileSync(sourcePath),source=new TextDecoder('utf-8',{fatal:true}).decode(bytes);
  let settings={};if(settingsArg){if(statSync(settingsArg).size>64_000)throw new Error('Settings file too large.');settings=JSON.parse(readFileSync(settingsArg,'utf8').replace(/^\uFEFF/,''));if(!settings||typeof settings!=='object'||Array.isArray(settings))throw new Error('Settings JSON must be an object.');}
  const r=exportPrintDocument(source,{title:pdfFilename(basename(sourcePath)).slice(0,-4).slice(0,160),...settings});
  for(const d of r.diagnostics)console.error(`${d.severity}: ${d.message}`);
  if(!r.valid)throw new Error('Source could not be rendered.');
  const dirs=[process.env['ProgramFiles(x86)'],process.env.ProgramFiles,process.env.LOCALAPPDATA].filter(Boolean);
  const candidates=dirs.flatMap(d=>[join(d,'Microsoft','Edge','Application','msedge.exe'),join(d,'Google','Chrome','Application','chrome.exe')]);
  candidates.push('/usr/bin/chromium','/usr/bin/google-chrome','/opt/google/chrome/chrome');
  const browser=browserArg?resolve(browserArg):candidates.find(existsSync);
  if(!browser||!existsSync(browser))throw new Error('No supported Chromium browser found. Specify its executable as the fourth argument.');
  work=mkdtempSync(join(tmpdir(),'mgu-pdf-'));const input=join(work,'document.html'),pdf=join(work,'document.pdf');
  writeFileSync(input,r.html,'utf8');
  const result=spawnSync(browser,['--headless','--disable-gpu','--disable-background-networking','--no-first-run','--no-default-browser-check','--no-pdf-header-footer',`--user-data-dir=${join(work,'profile')}`,`--print-to-pdf=${pdf}`,pathToFileURL(input).href],{encoding:'utf8',timeout:120_000,windowsHide:true,maxBuffer:4*1024*1024});
  if(result.error)throw result.error;
  if(result.status!==0||!existsSync(pdf))throw new Error(`Browser PDF generation failed (${result.status}). ${String(result.stderr||'').slice(-1500)}`);
  if(readFileSync(pdf).subarray(0,5).toString()!=='%PDF-')throw new Error('Browser did not produce a valid PDF signature.');
  copyFileSync(pdf,outputPath,constants.COPYFILE_EXCL);
  console.log(`PDF written: ${outputPath}`);
}catch(e){console.error(e.message);process.exitCode=1;}finally{if(work)try{rmSync(work,{recursive:true,force:true,maxRetries:5,retryDelay:200});}catch{console.warn(`Temporary workspace could not be removed: ${work}`);}}
