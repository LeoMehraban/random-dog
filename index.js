const {app,BrowserWindow} = require('electron');;
let win;
app.on('ready', () => {
   win = new BrowserWindow();
   win.loadUrl(`https://leomehraban.github.io/random-dog/`);
});
