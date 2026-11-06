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

// Files the build reads. If any is uncommitted, the working-tree build is not the build of the
// commit being pushed/tagged, so refuse instead of passing by accident.
const INPUTS = 'src scripts package.json package-lock.json .npmrc .gitattributes';

function verifyDist({ cwd = process.cwd(), exec } = {}) {
  const run =
    exec ||
    ((cmd) => execSync(cmd, { cwd, encoding: 'utf8', stdio: cmd.startsWith('npm') ? 'inherit' : 'pipe' }));
  const dirtyInputs = parsePorcelain(run(`git status --porcelain --untracked-files=all -- ${INPUTS}`) || '');
  if (dirtyInputs.length) return { ok: false, dirtyInputs, changed: [] };
  run('npm run build');
  const changed = parsePorcelain(run('git status --porcelain --untracked-files=all -- dist') || '');
  return { ok: changed.length === 0, dirtyInputs, changed };
}

if (require.main === module) {
  const { ok, changed, dirtyInputs } = verifyDist();
  if (dirtyInputs.length) {
    console.error('Có thay đổi chưa commit trong mã nguồn build. Commit hoặc stash trước khi verify/push/release:');
    for (const f of dirtyInputs) console.error('  ' + f);
    process.exit(1);
  }
  if (!ok) {
    console.error('dist/ không khớp src/. Chạy "npm run build" và commit dist/.');
    for (const f of changed) console.error('  ' + f);
    process.exit(1);
  }
  console.log('dist/ khớp src/.');
}

module.exports = { parsePorcelain, verifyDist };
