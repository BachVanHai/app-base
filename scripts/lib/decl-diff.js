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

// Statements are grouped by name; within a group, identical texts are matched first (so module
// reordering between builds does not mis-pair same-named declarations), then leftovers are paired
// in order as "changed", with surplus reported as removed/added. Keys come from the baseline for
// changed/removed and from the target for added.
function diffDeclarations(baselineCode, targetCode) {
  const group = (code) => {
    const g = new Map();
    for (const s of splitStatements(code)) {
      if (!g.has(s.name)) g.set(s.name, []);
      g.get(s.name).push(s);
    }
    return g;
  };
  const A = group(baselineCode);
  const B = group(targetCode);
  const changed = [];
  const removed = [];
  const added = [];
  for (const [name, as] of A) {
    const bs = [...(B.get(name) || [])];
    const leftA = [];
    for (const a of as) {
      const j = bs.findIndex((b) => b.text === a.text);
      if (j >= 0) bs.splice(j, 1);
      else leftA.push(a);
    }
    leftA.forEach((a, i) => (i < bs.length ? changed : removed).push(a.key));
    bs.slice(leftA.length).forEach((b) => added.push(b.key));
  }
  for (const [name, bs] of B) if (!A.has(name)) bs.forEach((b) => added.push(b.key));
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
