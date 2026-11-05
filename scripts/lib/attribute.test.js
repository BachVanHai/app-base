const test = require('node:test');
const assert = require('node:assert');
const { SourceMapGenerator } = require('source-map');
const { structuredPatch } = require('diff');
const { buildDeclIndex, attributeHunks } = require('./attribute');

test('buildDeclIndex maps declaration to source', () => {
  const code = 'var a = 1;\n\nfunction Select() {}\n';
  const gen = new SourceMapGenerator({ file: 'index.js' });
  gen.addMapping({
    generated: { line: 3, column: 0 },
    original: { line: 1, column: 0 },
    source: '../src/components/Select.js',
  });
  const index = buildDeclIndex(code, JSON.parse(gen.toString()));
  assert.strictEqual(index.get('Select'), 'components/Select.js');
  assert.ok(!index.has('a')); // no mapping for line 1
});

test('buildDeclIndex strips rollup suffix from names', () => {
  const code = 'const goBack$1 = () => {};\n';
  const gen = new SourceMapGenerator({ file: 'index.js' });
  gen.addMapping({ generated: { line: 1, column: 0 }, original: { line: 1, column: 0 }, source: '../src/x.js' });
  assert.strictEqual(buildDeclIndex(code, JSON.parse(gen.toString())).get('goBack'), 'x.js');
});

const baseline = 'function A() {}\nfunction B() {\n  x;\n}\n';

test('attributeHunks assigns hunk to enclosing declaration', () => {
  const target = 'function A() {}\nfunction B() {\n  y;\n}\n';
  const { hunks } = structuredPatch('a', 'b', baseline, target, '', '', { context: 3 });
  const index = new Map([['A', 'a.js'], ['B', 'b.js']]);
  const result = attributeHunks(baseline, hunks, index);
  assert.deepStrictEqual(Object.keys(result), ['b.js']);
  assert.strictEqual(result['b.js'].length, 1);
});

test('unmatched hunks go to __new__', () => {
  const target = 'function A() {}\nfunction B() {\n  y;\n}\n';
  const { hunks } = structuredPatch('a', 'b', baseline, target, '', '', { context: 3 });
  const result = attributeHunks(baseline, hunks, new Map([['A', 'a.js']]));
  assert.deepStrictEqual(Object.keys(result), ['__new__']);
});
