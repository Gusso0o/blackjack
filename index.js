const { app, BrowserWindow } = require('electron');
const path = require('path');


if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {

  const mainWindow = new BrowserWindow({
    width: 1006,
    height: 670,
    icon: 'icon.ico',
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false,
    fullscreen: false,
  });

  mainWindow.loadFile(path.join(__dirname, 'index.html'));

};


app.on('ready', createWindow);

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

