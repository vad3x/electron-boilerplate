'use strict';

var app           = require('app');
var BrowserWindow = require('browser-window');
var config        = require('./app-config');
var windowState   = require('./server/utils/window-state');

var mainWindow;

// Preserver of the window size and position between app launches.
var mainWindowState = windowState('main', {
    width: 1000,
    height: 600
});

app.on('ready', function() {

    mainWindow = new BrowserWindow({
        x: mainWindowState.x,
        y: mainWindowState.y,
        width: mainWindowState.width,
        height: mainWindowState.height
    });

    if (mainWindowState.isMaximized) {
        mainWindow.maximize();
    }

    mainWindow.loadUrl('file://' + __dirname + '/app.html');

    if (config.name === 'development') {
        mainWindow.openDevTools();
    }

    mainWindow.on('close', function() {
        mainWindowState.saveState(mainWindow);
    });
});

app.on('window-all-closed', function() {
    app.quit();
});
