import fs from 'node:fs';
import path from 'node:path';

const hooksDir = path.resolve('.git-hooks');

export const createHooksDir = () => {
  if (!fs.existsSync(hooksDir)) {
    fs.mkdirSync(hooksDir);
    console.log('✅ Created .git-hooks');
  } else {
    console.log('ℹ️ .git-hooks already exists');
  }
};
