const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { extractSources } = require('./extract-sources');

const tmp = () => fs.mkdtempSync(path.join(os.tmpdir(), 'extract-'));

test('writes src files without ../src prefix', () => {
  const out = tmp();
  const written = extractSources({ sources: ['../src/a/b.js'], sourcesContent: ['x'] }, out);
  assert.deepStrictEqual(written, ['a/b.js']);
  assert.strictEqual(fs.readFileSync(path.join(out, 'a/b.js'), 'utf8'), 'x');
});

test('normalizes CRLF to LF', () => {
  const out = tmp();
  extractSources({ sources: ['../src/a.js'], sourcesContent: ['a\r\nb'] }, out);
  assert.strictEqual(fs.readFileSync(path.join(out, 'a.js'), 'utf8'), 'a\nb');
});

test('skips node_modules', () => {
  const out = tmp();
  const written = extractSources(
    { sources: ['../node_modules/flatpickr/dist/flatpickr.js', '../src/a.js'], sourcesContent: ['f', 'a'] },
    out
  );
  assert.deepStrictEqual(written, ['a.js']);
  assert.ok(!fs.existsSync(path.join(out, 'flatpickr.js')));
  assert.ok(!fs.existsSync(path.join(out, '..', 'node_modules')));
});

test('rejects paths escaping outDir', () => {
  const out = tmp();
  assert.throws(() => extractSources({ sources: ['../../evil.js'], sourcesContent: ['x'] }, out), /outside/);
});

test('detects case-only collisions with different content', () => {
  const out = tmp();
  assert.throws(
    () =>
      extractSources(
        { sources: ['../src/x/index.js', '../src/x/Index.js'], sourcesContent: ['a', 'b'] },
        out
      ),
    /case/
  );
});

test('case-only collisions with identical content write one file', () => {
  const out = tmp();
  const written = extractSources(
    { sources: ['../src/x/index.js', '../src/x/Index.js'], sourcesContent: ['a', 'a'] },
    out
  );
  assert.deepStrictEqual(written, ['x/index.js']);
});
