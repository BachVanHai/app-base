const test = require('node:test');
const assert = require('node:assert');
const { splitStatements, diffDeclarations, attributeDeclarations } = require('./decl-diff');

test('splitStatements keys imports, exports and declarations', () => {
  const code = [
    'import React from "react";',
    'const A = 1;',
    'function B() {',
    '  return A;',
    '}',
    'B.propTypes = {};',
    'export { A, B };',
  ].join('\n');
  const keys = splitStatements(code).map((s) => s.key);
  assert.deepStrictEqual(keys, ['import:react', 'A', 'B', 'export:local']);
  assert.match(splitStatements(code)[2].text, /B\.propTypes/);
});

test('splitStatements gives duplicate names per-name ordinals', () => {
  const keys = splitStatements('const x = 1;\nconst y = 2;\nconst x = 3;').map((s) => s.key);
  assert.deepStrictEqual(keys, ['x', 'y', 'x#2']);
});

test('diffDeclarations ignores reordering', () => {
  const a = 'const A = 1;\nconst B = 2;';
  const b = 'const B = 2;\nconst A = 1;';
  assert.deepStrictEqual(diffDeclarations(a, b), { changed: [], removed: [], added: [] });
});

test('diffDeclarations reports changed, removed and added', () => {
  const a = 'const A = 1;\nconst B = 2;\nconst C = 3;';
  const b = 'const A = 1;\nconst B = 20;\nconst D = 4;';
  assert.deepStrictEqual(diffDeclarations(a, b), { changed: ['B'], removed: ['C'], added: ['D'] });
});

test('diffDeclarations matches same-name statements by content, not ordinal', () => {
  const a = 'const x = 1;\nconst y = 0;\nconst x = 2;';
  const b = 'const x = 2;\nconst y = 0;\nconst x = 1;';
  assert.deepStrictEqual(diffDeclarations(a, b), { changed: [], removed: [], added: [] });
});

test('diffDeclarations reports only unmatched same-name statements', () => {
  const a = 'const x = 1;\nconst x = 2;';
  const b = 'const x = 3;\nconst x = 1;';
  assert.deepStrictEqual(diffDeclarations(a, b), { changed: ['x#2'], removed: [], added: [] });
});

test('attributeDeclarations maps added decls to the source of the nearest preceding known decl', () => {
  const target = 'const A = 1;\nconst New1 = 2;\nconst New2 = 3;';
  const result = { changed: ['A'], removed: [], added: ['New1', 'New2'] };
  const grouped = attributeDeclarations(result, target, new Map([['A', 'a.js']]));
  assert.deepStrictEqual(grouped, {
    'a.js': { changed: ['A'], removed: [], added: ['New1', 'New2'] },
  });
});

test('attributeDeclarations puts unknown decls under __new__', () => {
  const grouped = attributeDeclarations(
    { changed: [], removed: ['Gone'], added: ['Top'] },
    'const Top = 1;',
    new Map()
  );
  assert.deepStrictEqual(grouped, { __new__: { changed: [], removed: ['Gone'], added: ['Top'] } });
});
