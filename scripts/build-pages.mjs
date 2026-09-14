import { cpSync, existsSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const build = spawnSync(process.platform === 'win32' ? 'npm.cmd' : 'npm', ['run', 'build'], {
  cwd: root,
  stdio: 'inherit',
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: '' },
});
if (build.error) throw build.error;
if (build.status !== 0) process.exit(build.status ?? 1);
const output = path.join(root, 'out');
if (!existsSync(path.join(output, 'index.html'))) throw new Error('Static export is missing.');
// Preserve old hashed assets so cached HTML keeps working during a deployment.
for (const name of readdirSync(output)) {
  cpSync(path.join(output, name), path.join(root, name), { recursive: true });
}
console.log('GitHub Pages files are ready at the repository root.');
