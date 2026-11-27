import assert from 'node:assert/strict';
import {renderMarkdown,exportHTML,RENDERER_VERSION} from '../public/renderer.mjs';
assert.equal(RENDERER_VERSION,'0.4.0');
assert.equal(renderMarkdown('# MGU').html,'<h1>MGU</h1>\n');
assert.match(renderMarkdown('$x^2$').html,/<math\b/);
assert.match(exportHTML('# MGU',{preset:'academic'}).html,/<title>Markdown document<\/title>/);
console.log('Standalone renderer bundle import: PASS');
