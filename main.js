const { app, BrowserWindow, screen } = require('electron')
const url = require('url')
const path = require('path')

let win = null
const args = process.argv.slice(1)
const serve = args.some(val => val === '--serve')

function createWindow() {
  const workAreaSize = screen.getPrimaryDisplay().workAreaSize
  const size = {
    width: 1024,
    height: 768
  }
  // Create the browser window.
  win = new BrowserWindow({
    x: (workAreaSize.width - size.width) / 2,
    y: (workAreaSize.height - size.height) / 2,
    width: size.width,
    height: size.height,
    webPreferences: {
      nodeIntegration: true,
      allowRunningInsecureContent: serve
    }
  })

  if (serve) {
    require('devtron').install()
    win.webContents.openDevTools()
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    })
    win.loadURL('http://localhost:9527')
  } else {
    win.loadURL(url.format({
      pathname: path.join(__dirname, 'dist/index.html'),
      protocol: 'file:',
      slashes: true
    }))
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })

  return win
}

try {
  app.allowRendererProcessReuse = true
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  // Added 400 ms to fix the black background issue while using transparent window. More detais at https://github.com/electron/electron/issues/15947
  app.on('ready', () => {
    setTimeout(createWindow, 400)
  })

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow()
    }
  })
} catch (e) {
  // Catch Error
  // throw e;
}
