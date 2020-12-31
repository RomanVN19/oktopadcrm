const { shell } = require('electron');
function openApp() {
  shell.openExternal('http://localhost:1122/');
}

const sharedData = require('electron').remote.require('./shared');
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dataDir').innerText = sharedData.dataDir;
});

function openDir() {
  shell.openPath(sharedData.dataDir);
}
