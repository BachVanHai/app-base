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

test('normalize ignores comments', () => {
  assert.strictEqual(
    normalizeBundle('try { a() } catch (e) {\n  // ignore\n}'),
    normalizeBundle('try { a() } catch (e) {}')
  );
});

test('normalize lowers optional chaining and nullish coalescing the same way babel does', () => {
  const lowered = require('@babel/core').transformSync('const t = a.b?.c ?? d;', {
    configFile: false,
    babelrc: false,
    plugins: ['@babel/plugin-proposal-optional-chaining', '@babel/plugin-transform-nullish-coalescing-operator'],
  }).code;
  assert.strictEqual(normalizeBundle('const t = a.b?.c ?? d;'), normalizeBundle(lowered));
});

test('normalize treats escaped and literal unicode strings as equal', () => {
  assert.strictEqual(normalizeBundle('const a = "Th\\xF4ng b\\xE1o";'), normalizeBundle('const a = "Thông báo";'));
});

test('normalize applies the modern build preset (edge default-parameter renaming)', () => {
  const a = 'const f = ({ isRequired: _isRequired = true, b: _b = 1 }) => _isRequired && _b;';
  const b = 'const f = ({ isRequired: _isRequired = true, b = 1 }) => _isRequired && b;';
  assert.strictEqual(normalizeBundle(a), normalizeBundle(b));
});

test('normalize ignores numbering of babel tagged-template cache variables', () => {
  assert.strictEqual(
    normalizeBundle('const A = styled.div(_t4 || (_t4 = _2`a`));'),
    normalizeBundle('const A = styled.div(_t8 || (_t8 = _2`a`));')
  );
});

test('normalize treats JSX-spread helpers and shorthand properties as equal', () => {
  assert.strictEqual(
    normalizeBundle('f(Object.assign({}, props, { appId: appId }));'),
    normalizeBundle('f(_extends({}, props, { appId }));')
  );
});

test('normalize tolerates css prettier cannot parse', () => {
  const broken = '.a {\n  animation: 1s linear infinite :local(bar); }\n';
  const reformatted = '.a{animation:1s linear infinite :local(bar);}';
  assert.strictEqual(normalizeBundle(broken, 'css'), normalizeBundle(reformatted, 'css'));
});

test('normalize formats css', () => {
  assert.strictEqual(normalizeBundle('a{color:red}', 'css'), normalizeBundle('a {\n  color: red;\n}', 'css'));
});
