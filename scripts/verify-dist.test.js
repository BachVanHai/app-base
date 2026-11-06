const test = require('node:test');
const assert = require('node:assert');
const { parsePorcelain } = require('./verify-dist');

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
