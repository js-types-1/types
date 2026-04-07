export const preCommitHook = `#!/usr/bin/env node

import { execSync } from 'node:child_process';

console.log('🚀 pre-commit hook started');

try {
  execSync('npm run lint', { stdio: 'inherit' });
  execSync('npm run test', { stdio: 'inherit' });

  console.log('✅ pre-commit passed');
} catch (error) {
  console.error('❌ pre-commit failed');
  process.exit(1);
}
`;
