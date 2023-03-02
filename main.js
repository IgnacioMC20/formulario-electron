const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');


let ventana;
const createWindow = () => {
  ventana = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  ventana.loadFile('index.html')
}

let welcome;
const createWindowWelcome = () => {
  welcome = new BrowserWindow({
    width: 600,
    height: 600,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'preload.js')
    }
  })
  welcome.loadFile('welcome.html')
}

ipcMain.on('registroValido', (event, args) => {
  console.log({args})
  createWindowWelcome()
  welcome.webContents.on('did-finish-load', () => {
    welcome.webContents.send('inicioCorrecto', args)
  })
})


app.whenReady().then(createWindow)