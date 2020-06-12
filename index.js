const electron = require('electron');
const url = require('url');
const path = require('path');
const {app,BrowserWindow} = electron;
app.on('ready',() => {
    mainWindow = new BrowserWindow({});
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'public/mainWindow.html'),
        protocol: 'file:',
        slashes: true
    }));
    mainWindow.on('close', () => {
        app.quit()
    });
});