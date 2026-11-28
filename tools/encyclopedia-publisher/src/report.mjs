export function report({record,diagnostics,dryRun,output,outputHash}){
  console.log(`MEPS v0.1.0 | ${dryRun?'DRY RUN':'PREVIEW'} | ${record.title}`);
  for(const d of diagnostics)console.log(`${d.severity.toUpperCase()} ${d.code??'RENDERER'}: ${d.message}`);
  console.log(`Source: ${record.sourcePath}\nSource SHA-256: ${record.sourceHash}\nCandidate canonical: ${record.canonicalUrl}\nPreview: ${output??record.previewPath}`);
  if(outputHash)console.log(`Preview SHA-256: ${outputHash}`);
  console.log(dryRun?'PASS: no files written.':'PASS: isolated preview generated. No production files changed.');
  console.log('Editorial schema approval and browser acceptance remain separate gates.');
}
