const { shell } = require('electron');
function openApp() {
  shell.openExternal('http://localhost:1122/');
}
