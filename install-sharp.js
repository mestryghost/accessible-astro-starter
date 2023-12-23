const { execSync } = require('child_process');

const os = process.platform;

if (os === 'linux') {
  execSync('npm install --force @img/sharp-linux-x64@^0.33.1', { stdio: 'inherit' });
} else if (os === 'darwin') {
  execSync('npm install --os=darwin --cpu=x64 sharp@^0.33.1', { stdio: 'inherit' });
}
