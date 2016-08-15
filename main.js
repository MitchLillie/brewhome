var app = require('app')
var BrowserWindow = require('browser-window')
require('crash-reporter').start()
// var Electron = require('electron')
// var BW = Electron.BrowserWindow
//
// let installed = BW.getDevToolsExtensions()
// console.log(installed)

app.on('window-all-closed', function () {
  if (process.platform != 'darwin') {
    app.quit()
  }
})

app.on('ready', function () {
  // BrowserWindow.addDevToolsExtension('/Users/mitch/Library/Application\ Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/0.15.0_0')
  // let installed = BrowserWindow.getDevToolsExtensions().hasOwnProperty('devtron')
  // console.log(installed)

  mainWindow = new BrowserWindow({width: 1360, height: 800})

  mainWindow.loadUrl('file://' + __dirname + '/public/index.html')

  mainWindow.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
})
