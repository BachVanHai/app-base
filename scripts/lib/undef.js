// Find identifiers that a module references but never declares or imports.
// Rollup treats such names as globals without warning, so a missing import would only fail at runtime.
const { parse } = require('@babel/parser');
const traverse = require('@babel/traverse').default;

const KNOWN_GLOBALS = new Set(
  (
    'undefined NaN Infinity globalThis self window document navigator location history console ' +
    'localStorage sessionStorage fetch FormData Blob File FileReader URL URLSearchParams Headers ' +
    'Request Response AbortController EventSource Event CustomEvent Node HTMLElement Image ' +
    'setTimeout clearTimeout setInterval clearInterval requestAnimationFrame cancelAnimationFrame ' +
    'alert confirm atob btoa encodeURIComponent decodeURIComponent encodeURI decodeURI escape ' +
    'parseInt parseFloat isNaN isFinite Object Array Function String Number Boolean Symbol BigInt ' +
    'Math JSON Date RegExp Error TypeError RangeError SyntaxError Promise Map Set WeakMap WeakSet ' +
    'Reflect Proxy Intl ArrayBuffer Uint8Array DataView TextDecoder TextEncoder arguments ' +
    'process module exports require define jQuery getComputedStyle matchMedia MutationObserver ' +
    'ResizeObserver IntersectionObserver performance crypto screen innerWidth innerHeight'
  ).split(/\s+/)
);

function findUndefined(code, filename = 'file.js') {
  const ast = parse(code, {
    sourceType: 'module',
    sourceFilename: filename,
    plugins: ['jsx', 'classProperties', 'optionalChaining', 'nullishCoalescingOperator', 'decorators-legacy'],
  });
  const found = new Set();
  traverse(ast, {
    Program(path) {
      for (const name of Object.keys(path.scope.globals)) if (!KNOWN_GLOBALS.has(name)) found.add(name);
    },
    JSXOpeningElement(path) {
      let node = path.node.name;
      while (node.type === 'JSXMemberExpression') node = node.object;
      if (node.type !== 'JSXIdentifier') return;
      const name = node.name;
      if (/^[a-z]/.test(name)) return; // intrinsic element like <div>
      if (!path.scope.hasBinding(name) && !KNOWN_GLOBALS.has(name)) found.add(name);
    },
  });
  return [...found].sort();
}

module.exports = { findUndefined };
