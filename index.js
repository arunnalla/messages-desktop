const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets/icon.png'),
  });
  win.setMenuBarVisibility(false);

  win.loadURL(
    url.format({
      pathname: 'messages.google.com/web',
      protocol: 'https',
      slashes: true,
    })
  );
}

app.on('ready', createWindow);
