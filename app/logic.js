const { shell } = require('electron');
function openApp() {
  shell.openExternal(`http://${sharedData.localAddress}:1122/`);
}

const sharedData = require('electron').remote.require('./shared');
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('dataDir').innerText = sharedData.dataDir;
  document.getElementById('localAddress').innerText = sharedData.localAddress;
});

function openDir() {
  shell.openPath(sharedData.dataDir);
}
