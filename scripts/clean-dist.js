// Start every build from an empty dist/ so files a build no longer emits do not linger (and would
// otherwise pass `npm run verify` as long as they are committed).
require('fs').rmSync(require('path').join(__dirname, '..', 'dist'), { recursive: true, force: true });
