// Rebuild dist/ from src/ and fail if the result differs from what is committed.
// Used by `npm run verify`, `npm run release` and the pre-push hook.
const { execSync } = require('child_process');

// Paths from `git status --porcelain` output (modified, deleted, untracked, ...).
function parsePorcelain(text) {
  return text
    .split(/\r?\n/)
    .filter((l) => l.trim())
    .map((l) => l.slice(3).trim());
}

function verifyDist({ cwd = process.cwd() } = {}) {
  execSync('npm run build', { cwd, stdio: 'inherit' });
  const out = execSync('git status --porcelain --untracked-files=all -- dist', { cwd, encoding: 'utf8' });
  const changed = parsePorcelain(out);
  return { ok: changed.length === 0, changed };
}

if (require.main === module) {
  const { ok, changed } = verifyDist();
  if (!ok) {
    console.error('dist/ không khớp src/. Chạy "npm run build" và commit dist/.');
    for (const f of changed) console.error('  ' + f);
    process.exit(1);
  }
  console.log('dist/ khớp src/.');
}

module.exports = { parsePorcelain, verifyDist };
