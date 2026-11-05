#!/usr/bin/env node
// Order-insensitive, per-declaration comparison of <baselineDir>/index.modern.js vs
// <targetDir>/index.modern.js, grouped by original source file (via <baselineDir>/index.modern.js.map).
// Usage: node scripts/decl-report.js <baselineDir> <targetDir> <outDir>
// Writes <outDir>/report.json and one patch per differing declaration in <outDir>/decls/.
// Prints a summary and exits 1 when any declaration differs.
const fs = require('fs');
const path = require('path');
const { createTwoFilesPatch } = require('diff');
const { normalizeBundle } = require('./lib/normalize');
const { buildDeclIndex } = require('./lib/attribute');
const { splitStatements, diffDeclarations, attributeDeclarations } = require('./lib/decl-diff');

function declReport(baselineDir, targetDir, outDir) {
  const read = (dir, f) => fs.readFileSync(path.join(dir, f), 'utf8').replace(/\r\n/g, '\n');
  const baseRaw = read(baselineDir, 'index.modern.js');
  const base = normalizeBundle(baseRaw);
  const target = normalizeBundle(read(targetDir, 'index.modern.js'));
  const map = JSON.parse(read(baselineDir, 'index.modern.js.map'));

  const result = diffDeclarations(base, target);
  const grouped = attributeDeclarations(result, target, buildDeclIndex(baseRaw, map));

  const decls = path.join(outDir, 'decls');
  fs.rmSync(decls, { recursive: true, force: true });
  fs.mkdirSync(decls, { recursive: true });
  const textOf = (code) => new Map(splitStatements(code).map((s) => [s.key, s.text]));
  const A = textOf(base);
  const B = textOf(target);
  for (const key of [...result.changed, ...result.removed, ...result.added]) {
    const file = key.replace(/[^\w#.-]/g, '_') + '.patch';
    const patch = createTwoFilesPatch(`baseline/${key}`, `target/${key}`, A.get(key) || '', B.get(key) || '', '', '', { context: 2 });
    fs.writeFileSync(path.join(decls, file), patch);
  }
  fs.writeFileSync(path.join(outDir, 'report.json'), JSON.stringify(grouped, null, 2));
  return grouped;
}

module.exports = { declReport };

if (require.main === module) {
  const [baselineDir, targetDir, outDir] = process.argv.slice(2);
  if (!baselineDir || !targetDir || !outDir) {
    console.error('Usage: node scripts/decl-report.js <baselineDir> <targetDir> <outDir>');
    process.exit(2);
  }
  const grouped = declReport(baselineDir, targetDir, outDir);
  let total = 0;
  for (const [src, g] of Object.entries(grouped)) {
    const n = g.changed.length + g.removed.length + g.added.length;
    total += n;
    console.log(`${src}: changed ${g.changed.length}, removed ${g.removed.length}, added ${g.added.length}`);
  }
  console.log(`TOTAL differing statements: ${total}`);
  process.exit(total ? 1 : 0);
}
