// starting app
const electron = require('electron');


const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');


// st variables
let win;



// create browser window
function createWindow(){

    win = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }))

// close window event
win.on('closed', () => {
    win = null;
});

console.log("working!");

// end of function createWindow
}



// include the window into the main app
app.on('ready', createWindow);



// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
  
  // In this file you can include the rest of your app's specific main process
  // code. You can also put them in separate files and require them here.



// to hide the sequrity issue from console
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';















