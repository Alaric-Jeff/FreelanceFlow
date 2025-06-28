const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, '../preload/preload.js')
    }
  });

  // and load the index.html of the app.
  // In a real app, you would load your frontend code here.
  // For now, we'll just load a blank window.
  //   mainWindow.loadFile('index.html')
  // Or load a remote URL
  //   mainWindow.loadURL('https://vitejs.dev/guide/')

}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
}); 