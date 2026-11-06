// `npm start`: rebuild dist/ (the same full build as `npm run build`) whenever src/ changes.
const fs = require('fs');
const { spawn } = require('child_process');

let timer = null;
let running = false;
let pending = false;

function build() {
  if (running) { pending = true; return; }
  running = true;
  const started = Date.now();
  const p = spawn('npm', ['run', 'build', '--silent'], { stdio: 'inherit', shell: true });
  p.on('exit', (code) => {
    running = false;
    console.log(code === 0 ? `[dev] build xong (${Date.now() - started} ms)` : `[dev] build lỗi (mã ${code})`);
    if (pending) { pending = false; build(); }
  });
}

fs.watch('src', { recursive: true }, () => {
  clearTimeout(timer);
  timer = setTimeout(build, 300);
});
console.log('[dev] theo dõi src/ ...');
build();
