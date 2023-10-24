/* eslint-disable @typescript-eslint/no-var-requires */
var spawnSync = require('child_process').spawnSync;
const result = spawnSync('npm run validate', {
  stdio: 'inherit',
  shell: true,
});
if (result.status !== 0) {
  process.exit(result.status);
}
console.log('ALL GOOD ✅');
