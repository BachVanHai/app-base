const prettier = require('prettier');

// CSS from the legacy build is not always valid (e.g. leftover `:local(...)`), so prettier
// cannot be relied on. Token-level normalization: one rule/declaration per line, no
// insignificant whitespace, no trailing semicolon before `}`.
function normalizeCss(code) {
  return (
    code
      .replace(/\s+/g, ' ')
      .replace(/\s*([{};,])\s*/g, '$1')
      .replace(/:\s+/g, ':')
      .replace(/;}/g, '}')
      .replace(/([{};])/g, '$1\n')
      .replace(/}/g, '\n}')
      .split('\n')
      .map((l) => l.trim())
      .filter(Boolean)
      .join('\n') + '\n'
  );
}

// JS: format with prettier, then erase rollup's dedupe suffixes (React__default$1 -> React__default)
// so that two builds differing only in formatting/identifier numbering compare equal.
function normalizeBundle(code, parser = 'babel') {
  if (parser === 'css') return normalizeCss(code);
  const formatted = prettier.format(code, { parser, printWidth: 100 });
  return formatted.replace(/\b([A-Za-z_][\w]*)\$\d+\b/g, '$1');
}

module.exports = { normalizeBundle };
