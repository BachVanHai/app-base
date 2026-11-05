// Order-insensitive comparison of two normalized bundles at top-level statement granularity.
const DECL = /^(?:async\s+)?(?:function\*?|class|const|let|var)\s+([A-Za-z_$][\w$]*)/;
const IMPORT = /^import\b/;
const EXPORT = /^export\b/;
const FROM = /from\s+["']([^"']+)["']|^import\s+["']([^"']+)["']/;

const baseName = (key) => key.replace(/#\d+$/, '');

// Split code into top-level statements. A statement starts at a column-0 declaration, import or
// export; anything else at column 0 (e.g. `X.propTypes = ...`) belongs to the preceding statement.
function splitStatements(code) {
  const out = [];
  const seen = new Map();
  let cur = null;
  const start = (name) => {
    const n = (seen.get(name) || 0) + 1;
    seen.set(name, n);
    cur = { key: n === 1 ? name : `${name}#${n}`, name, lines: [] };
    out.push(cur);
  };
  for (const line of code.split('\n')) {
    let m;
    if ((m = DECL.exec(line))) start(m[1]);
    else if (IMPORT.test(line) || EXPORT.test(line)) start('__pending__');
    else if (!cur) start('__prelude__');
    cur.lines.push(line);
  }
  // Resolve import/export keys once their (possibly multi-line) text is complete.
  seen.clear();
  for (const s of out) {
    s.text = s.lines.join('\n').trim();
    delete s.lines;
    if (s.name === '__pending__') {
      const m = FROM.exec(s.text);
      const mod = m ? m[1] || m[2] : 'local';
      s.name = `${s.text.startsWith('import') ? 'import' : 'export'}:${mod}`;
    }
    const n = (seen.get(s.name) || 0) + 1;
    seen.set(s.name, n);
    s.key = n === 1 ? s.name : `${s.name}#${n}`;
  }
  return out.filter((s) => s.text);
}

function diffDeclarations(baselineCode, targetCode) {
  const A = new Map(splitStatements(baselineCode).map((s) => [s.key, s.text]));
  const B = new Map(splitStatements(targetCode).map((s) => [s.key, s.text]));
  const changed = [];
  const removed = [];
  const added = [];
  for (const [k, v] of A) {
    if (!B.has(k)) removed.push(k);
    else if (B.get(k) !== v) changed.push(k);
  }
  for (const k of B.keys()) if (!A.has(k)) added.push(k);
  return { changed, removed, added };
}

// Group a diffDeclarations result by original source file (declIndex: name -> source path from the
// baseline's source map). Added declarations inherit the source of the nearest preceding statement
// in the target that the index knows; otherwise they go to '__new__'.
function attributeDeclarations(result, targetCode, declIndex) {
  const grouped = {};
  const add = (source, kind, key) => {
    grouped[source] = grouped[source] || { changed: [], removed: [], added: [] };
    grouped[source][kind].push(key);
  };
  for (const kind of ['changed', 'removed']) {
    for (const key of result[kind]) add(declIndex.get(baseName(key)) || '__new__', kind, key);
  }
  const order = splitStatements(targetCode).map((s) => s.key);
  const addedSet = new Set(result.added);
  let lastKnown = null;
  for (const key of order) {
    const known = declIndex.get(baseName(key));
    if (addedSet.has(key)) add(lastKnown || '__new__', 'added', key);
    else if (known) lastKnown = known;
  }
  return grouped;
}

module.exports = { splitStatements, diffDeclarations, attributeDeclarations };
