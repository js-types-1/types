import fs from 'node:fs';
import path from 'node:path';
import { preCommitHook } from './hooks/preCommit.js';

const hooksDir = path.resolve('.git-hooks');

export const installHooks = () => {
  const preCommitPath = path.join(hooksDir, 'pre-commit');

  fs.writeFileSync(preCommitPath, preCommitHook, {
    mode: 0o755,
  });

  console.log('✅ pre-commit installed');
};
