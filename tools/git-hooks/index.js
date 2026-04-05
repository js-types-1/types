import { fileURLToPath } from 'node:url';
import { setupHooksPath } from './setupHooksPath.js';
import { createHooksDir } from './createHooksDir.js';
import { installHooks } from './installHooks.js';

export const run = () => {
  console.log('🚀 Setting up Git hooks...\n');

  setupHooksPath();
  createHooksDir();
  installHooks();

  console.log('\n✅ Git hooks ready');
};

const isDirectRun = fileURLToPath(import.meta.url) === process.argv[1];

if (isDirectRun) {
  run();
}
