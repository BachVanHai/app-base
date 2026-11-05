const { SourceMapConsumer } = require('source-map');

const DECL = /^(?:export\s+)?(?:async\s+)?(?:function\*?|class|const|let|var)\s+([A-Za-z_$][\w$]*)/;
const stripSuffix = (name) => name.replace(/\$\d+$/, '');
const stripSrc = (source) => source.replace(/^(\.\.\/)*src\//, '');

// Map each top-level declaration name in a built (un-normalized) bundle to its original source file.
function buildDeclIndex(builtCode, map) {
  const consumer = new SourceMapConsumer(map);
  const index = new Map();
  builtCode.split('\n').forEach((text, i) => {
    const m = DECL.exec(text);
    if (!m) return;
    const name = stripSuffix(m[1]);
    if (index.has(name)) return;
    const line = i + 1;
    let pos = consumer.originalPositionFor({ line, column: 0 });
    if (!pos.source) {
      pos = consumer.originalPositionFor({ line, column: 0, bias: SourceMapConsumer.LEAST_UPPER_BOUND });
    }
    if (pos.source && !pos.source.includes('node_modules')) index.set(name, stripSrc(pos.source));
    else if (pos.source) index.set(name, pos.source);
  });
  return index;
}

// Line (1-based, in the old file) of the first changed line of a jsdiff hunk.
function firstChangedOldLine(hunk) {
  let line = hunk.oldStart;
  for (const l of hunk.lines) {
    if (l[0] !== ' ') return line;
    line++;
  }
  return line;
}

// Group hunks by the source file of the nearest top-level declaration above the change.
function attributeHunks(baselineNormalized, hunks, declIndex) {
  const lines = baselineNormalized.split('\n');
  const result = {};
  for (const hunk of hunks) {
    let key = '__new__';
    for (let i = Math.min(firstChangedOldLine(hunk), lines.length) - 1; i >= 0; i--) {
      const m = DECL.exec(lines[i]);
      if (m) {
        key = declIndex.get(stripSuffix(m[1])) || '__new__';
        break;
      }
    }
    (result[key] = result[key] || []).push(hunk);
  }
  return result;
}

module.exports = { buildDeclIndex, attributeHunks };
