const prettier = require('prettier');

// CSS from the legacy build is not always valid (e.g. leftover `:local(...)`), so prettier
// cannot be relied on. Token-level normalization: one rule/declaration per line, no
// insignificant whitespace, no trailing semicolon before `}`.
function normalizeCss(code) {
  return (
    code
      .replace(/\s+/g, ' ')
      .replace(/\s*([{};,])\s*/g, '$1')
      .replace(/:\s+/g, ':')
      .replace(/;}/g, '}')
      .replace(/([{};])/g, '$1\n')
      .replace(/}/g, '\n}')
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .join('\n') + '\n'
  );
}

// JS: drop comments and lower `?.` / `??` with the same babel plugins the build uses (a hand-edited
// bundle may contain the native syntax), format with prettier, then erase rollup's dedupe suffixes
// (React__default$1 -> React__default) so that builds differing only in those respects compare equal.
function normalizeBundle(code, parser = 'babel') {
  if (parser === 'css') return normalizeCss(code);
  const lowered = require('@babel/core').transformSync(code, {
    configFile: false,
    babelrc: false,
    comments: false,
    compact: false,
    retainLines: false,
    sourceType: 'module',
    // same preset as microbundle's modern build, so hand-written code in a legacy bundle gets the
    // same rewrites (e.g. Edge default-parameter renaming) as compiled code
    presets: [['@babel/preset-modules', { loose: true }]],
    plugins: [
      '@babel/plugin-proposal-optional-chaining',
      '@babel/plugin-transform-nullish-coalescing-operator',
      // print strings from their value, not their original (possibly \x-escaped) source text
      () => ({
        visitor: {
          'StringLiteral|DirectiveLiteral|JSXText'(p) {
            if (p.node.extra) delete p.node.extra.raw;
          },
          // `{ a: a }` and `{ a }` are the same object
          ObjectProperty(p) {
            const { key, value, computed } = p.node;
            if (!computed && key.type === 'Identifier' && value.type === 'Identifier' && key.name === value.name) {
              p.node.shorthand = true;
            }
          },
          // JSX spread compiles to Object.assign({}, ...) or the _extends({}, ...) helper
          CallExpression(p) {
            const c = p.node.callee;
            if (c.type === 'MemberExpression' && c.object.name === 'Object' && c.property.name === 'assign' &&
                p.node.arguments[0] && p.node.arguments[0].type === 'ObjectExpression' &&
                p.node.arguments[0].properties.length === 0) {
              p.node.callee = { type: 'Identifier', name: '_extends' };
            }
          },
        },
      }),
    ],
    generatorOpts: { jsescOption: { minimal: true } },
  }).code;
  const formatted = prettier.format(lowered, { parser, printWidth: 100 });
  return formatted
    .replace(/\b([A-Za-z_][\w]*)\$\d+\b/g, '$1')
    // babel tagged-template cache variables (_t, _t2, ...) and their tag helper (_, _2, ...) are
    // numbered by position in the bundle
    .replace(/\b_t\d*\b/g, '_t')
    .replace(/\b_\d+(?=`)/g, '_');
}

module.exports = { normalizeBundle };
