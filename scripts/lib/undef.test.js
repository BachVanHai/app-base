const test = require('node:test');
const assert = require('node:assert');
const { findUndefined } = require('./undef');

test('reports identifiers used but never declared or imported', () => {
  assert.deepStrictEqual(findUndefined('export const f = () => toastInfo("x")'), ['toastInfo']);
});

test('does not report imported or locally declared names', () => {
  const code = "import { Info } from 'react-feather'\nconst a = 1\nfunction g(b) { return a + b + Info }";
  assert.deepStrictEqual(findUndefined(code), []);
});

test('reports unbound JSX components but not intrinsic elements', () => {
  const code = "import React from 'react'\nexport const C = () => <div><Bell size={2} /></div>";
  assert.deepStrictEqual(findUndefined(code), ['Bell']);
});

test('ignores browser and language globals', () => {
  assert.deepStrictEqual(findUndefined('window.x = Promise.resolve(localStorage.getItem("a"))'), []);
});
