#!/usr/bin/env node
// Runs after microbundle:
// 1. dist/index.css and dist/index.modern.css = src/styles/base-app.legacy.css (verbatim, NOT run
//    through postcss/autoprefixer) + whatever microbundle compiled from src/styles/custom.scss.
// 2. Copy fonts next to the CSS so `url("./assets/fonts/...")` resolves from dist/.
const fs = require('fs');
const path = require('path');

function assembleCss(legacyCss, customCss) {
  if (!customCss || !customCss.trim()) return legacyCss;
  return `${legacyCss}\n/* custom.scss */\n${customCss.trim()}\n`;
}

function postbuild(root) {
  const dist = path.join(root, 'dist');
  const legacy = fs.readFileSync(path.join(root, 'src', 'styles', 'base-app.legacy.css'), 'utf8');
  for (const name of ['index.css', 'index.modern.css']) {
    const file = path.join(dist, name);
    const custom = fs.existsSync(file) ? fs.readFileSync(file, 'utf8') : null;
    fs.writeFileSync(file, assembleCss(legacy, custom));
  }
  const fontsFrom = path.join(root, 'src', 'assets', 'fonts');
  const fontsTo = path.join(dist, 'assets', 'fonts');
  fs.mkdirSync(fontsTo, { recursive: true });
  for (const f of fs.readdirSync(fontsFrom)) fs.copyFileSync(path.join(fontsFrom, f), path.join(fontsTo, f));
}

module.exports = { assembleCss, postbuild };

if (require.main === module) {
  postbuild(path.join(__dirname, '..'));
  console.log('postbuild: assembled dist/index.css, dist/index.modern.css; copied fonts');
}
