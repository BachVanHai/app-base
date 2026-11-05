#!/usr/bin/env node
// Normalize and diff two bundle directories, attributing JS hunks to original source files.
// Usage: node scripts/bundle-diff.js <baselineDir> <targetDir> <outDir>
// <baselineDir>/index.modern.js.map must belong to <baselineDir>/index.modern.js.
const fs = require('fs');
const path = require('path');
const { structuredPatch } = require('diff');
const { normalizeBundle } = require('./lib/normalize');
const { buildDeclIndex, attributeHunks } = require('./lib/attribute');

const FILES = ['index.js', 'index.modern.js', 'index.css', 'index.modern.css'];

function formatPatch(file, hunks) {
  const out = [`--- baseline/${file}`, `+++ target/${file}`];
  for (const h of hunks) {
    out.push(`@@ -${h.oldStart},${h.oldLines} +${h.newStart},${h.newLines} @@`, ...h.lines);
  }
  return out.join('\n') + '\n';
}

function bundleDiff(baselineDir, targetDir, outDir) {
  fs.mkdirSync(path.join(outDir, 'norm', 'baseline'), { recursive: true });
  fs.mkdirSync(path.join(outDir, 'norm', 'target'), { recursive: true });
  const summary = {};
  for (const file of FILES) {
    const parser = file.endsWith('.css') ? 'css' : 'babel';
    const read = (dir) => fs.readFileSync(path.join(dir, file), 'utf8').replace(/\r\n/g, '\n');
    const baseRaw = read(baselineDir);
    const base = normalizeBundle(baseRaw, parser);
    const target = normalizeBundle(read(targetDir), parser);
    fs.writeFileSync(path.join(outDir, 'norm', 'baseline', file), base);
    fs.writeFileSync(path.join(outDir, 'norm', 'target', file), target);
    const { hunks } = structuredPatch(file, file, base, target, '', '', { context: 3 });
    fs.writeFileSync(path.join(outDir, `${file}.patch`), formatPatch(file, hunks));

    if (file === 'index.modern.js') {
      const map = JSON.parse(fs.readFileSync(path.join(baselineDir, 'index.modern.js.map'), 'utf8'));
      const grouped = attributeHunks(base, hunks, buildDeclIndex(baseRaw, map));
      summary[file] = Object.fromEntries(Object.entries(grouped).map(([k, v]) => [k, v.length]));
      fs.writeFileSync(path.join(outDir, `${file}.by-source.json`), JSON.stringify(grouped, null, 2));
    } else {
      summary[file] = hunks.length ? { __all__: hunks.length } : {};
    }
  }
  return summary;
}

module.exports = { bundleDiff };

if (require.main === module) {
  const [baselineDir, targetDir, outDir] = process.argv.slice(2);
  if (!baselineDir || !targetDir || !outDir) {
    console.error('Usage: node scripts/bundle-diff.js <baselineDir> <targetDir> <outDir>');
    process.exit(2);
  }
  console.log(JSON.stringify(bundleDiff(baselineDir, targetDir, outDir), null, 2));
}
