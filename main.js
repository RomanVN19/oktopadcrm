const { app, BrowserWindow } = require('electron');
const serverLib = require('./lib/server');
const os = require('os');
const fs = require('fs');
const path = require('path');
const sharedData = require('./shared');

const dataDirname = 'Oktopad CRM';
const dataFilename = 'oktopad.db';

function createWindow () {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
    autoHideMenuBar: true,
  });

  win.loadFile('app/index.html');
  // win.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const homeDir = os.homedir();

const dataDir = path.join(homeDir, dataDirname);
const dataFile = path.join(dataDir, dataFilename);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
  fs.copyFileSync(dataFilename, dataFile);
  console.log('Created starter db');
} else {
  console.log('Using existing database');
}

sharedData.dataDir = dataDir;

const server = serverLib.getServer(dataFile);
server.run();
