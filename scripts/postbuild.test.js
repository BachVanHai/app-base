const test = require('node:test');
const assert = require('node:assert');
const { assembleCss } = require('./postbuild');

test('assembleCss keeps legacy css byte-for-byte first', () => {
  const legacy = '.a{-webkit-box-sizing:border-box;box-sizing:border-box}\n';
  assert.ok(assembleCss(legacy, '.b{color:red}').startsWith(legacy));
});

test('assembleCss appends custom css after legacy', () => {
  assert.strictEqual(assembleCss('.a{}\n', '.b{}'), '.a{}\n\n/* custom.scss */\n.b{}\n');
});

test('assembleCss without custom css returns legacy unchanged', () => {
  assert.strictEqual(assembleCss('.a{}\n', null), '.a{}\n');
  assert.strictEqual(assembleCss('.a{}\n', '  \n'), '.a{}\n');
});
