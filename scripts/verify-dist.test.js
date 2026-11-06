const test = require('node:test');
const assert = require('node:assert');
const { parsePorcelain, verifyDist } = require('./verify-dist');

test('parsePorcelain reports modified', () => {
  assert.deepStrictEqual(parsePorcelain(' M dist/index.js'), ['dist/index.js']);
});

test('parsePorcelain reports untracked', () => {
  assert.deepStrictEqual(parsePorcelain('?? dist/new.js'), ['dist/new.js']);
});

test('parsePorcelain empty', () => {
  assert.deepStrictEqual(parsePorcelain(''), []);
});

test('parsePorcelain handles several lines and CRLF', () => {
  assert.deepStrictEqual(parsePorcelain(' M dist/a.js\r\n D dist/b.js\r\n'), ['dist/a.js', 'dist/b.js']);
});

test('verifyDist refuses uncommitted build inputs without building', () => {
  const calls = [];
  const exec = (cmd) => {
    calls.push(cmd);
    if (cmd.startsWith('git status') && cmd.includes(' src ')) return ' M src/index.js\n';
    return '';
  };
  const r = verifyDist({ exec });
  assert.strictEqual(r.ok, false);
  assert.deepStrictEqual(r.dirtyInputs, ['src/index.js']);
  assert.ok(!calls.some((c) => c.includes('npm run build')), 'build must not run');
});

test('verifyDist builds and reports dist changes when inputs are clean', () => {
  const exec = (cmd) => (cmd.includes('-- dist') ? '?? dist/extra.js\n' : '');
  const r = verifyDist({ exec });
  assert.strictEqual(r.ok, false);
  assert.deepStrictEqual(r.dirtyInputs, []);
  assert.deepStrictEqual(r.changed, ['dist/extra.js']);
});
