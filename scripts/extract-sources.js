#!/usr/bin/env node
// Extract original source files from a source map's sourcesContent.
// Usage: node scripts/extract-sources.js <mapFile> <outDir>
const fs = require('fs');
const path = require('path');

function extractSources(map, outDir) {
  const root = path.resolve(outDir);
  const byLower = new Map(); // lowercased rel path -> { rel, content }
  const entries = [];

  map.sources.forEach((source, i) => {
    if (source.includes('node_modules')) return;
    const rel = source.replace(/^\.\.\/src\//, '');
    const target = path.resolve(root, rel);
    if (target !== root && !target.startsWith(root + path.sep)) {
      throw new Error(`Source path resolves outside outDir: ${source}`);
    }
    const content = (map.sourcesContent[i] || '').replace(/\r\n/g, '\n');
    const key = rel.toLowerCase();
    const prev = byLower.get(key);
    if (prev) {
      if (prev.content !== content) {
        throw new Error(`case-only collision with different content: ${prev.rel} vs ${rel}`);
      }
      return;
    }
    byLower.set(key, { rel, content });
    entries.push({ rel, target, content });
  });

  for (const { target, content } of entries) {
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.writeFileSync(target, content);
  }
  return entries.map((e) => e.rel);
}

module.exports = { extractSources };

if (require.main === module) {
  const [mapFile, outDir] = process.argv.slice(2);
  if (!mapFile || !outDir) {
    console.error('Usage: node scripts/extract-sources.js <mapFile> <outDir>');
    process.exit(2);
  }
  const written = extractSources(JSON.parse(fs.readFileSync(mapFile, 'utf8')), outDir);
  console.log(`Wrote ${written.length} files to ${outDir}`);
}
