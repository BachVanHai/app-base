const test = require('node:test');
const assert = require('node:assert');
const { normalizeBundle } = require('./normalize');

test('normalize strips rollup numeric suffixes', () => {
  assert.strictEqual(
    normalizeBundle('var React__default$1 = a;'),
    normalizeBundle('var React__default = a;')
  );
});

test('normalize is formatting-insensitive', () => {
  assert.strictEqual(
    normalizeBundle('function f(){return 1}'),
    normalizeBundle('function f() {\n  return 1;\n}')
  );
});

test('normalize keeps real identifier differences', () => {
  assert.notStrictEqual(normalizeBundle('var a = 1;'), normalizeBundle('var b = 1;'));
});

test('normalize tolerates css prettier cannot parse', () => {
  const broken = '.a {\n  animation: 1s linear infinite :local(bar); }\n';
  const reformatted = '.a{animation:1s linear infinite :local(bar);}';
  assert.strictEqual(normalizeBundle(broken, 'css'), normalizeBundle(reformatted, 'css'));
});

test('normalize formats css', () => {
  assert.strictEqual(normalizeBundle('a{color:red}', 'css'), normalizeBundle('a {\n  color: red;\n}', 'css'));
});
