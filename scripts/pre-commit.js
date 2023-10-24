/* eslint-disable @typescript-eslint/no-var-requires */
const { spawnSync } = require('child_process');

// Run the command 'npx expo install --check'
const installResult = spawnSync('npx', ['expo', 'install', '--check'], {
  stdio: 'inherit',
  shell: true,
});

if (installResult.status !== 0) {
  console.error('Error installing dependencies with Expo.');
  process.exit(1); // Exit with an error status
}

// Run the command 'npm run validate'
const validateResult = spawnSync('npm', ['run', 'validate'], {
  stdio: 'inherit',
  shell: true,
});

if (validateResult.status !== 0) {
  console.error('Error running "npm run validate".');
  process.exit(1); // Exit with an error status
}

console.log('ALL GOOD ✅');

