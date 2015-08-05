'use strict';

export default function(remote) {
    var Menu = remote.require('menu');
    var MenuItem = remote.require('menu-item');

    var m1 = {
        label: 'Electron',
        submenu: [
            {
                label: 'About Electron',
                selector: 'orderFrontStandardAboutPanel:'
            },
            {
                type: 'separator'
            },
            {
                label: 'Services',
                submenu: []
            },
            {
                type: 'separator'
            },
            {
                label: 'Hide Electron',
                accelerator: 'Command+H',
                selector: 'hide:'
            },
            {
                label: 'Hide Others',
                accelerator: 'Command+Shift+H',
                selector: 'hideOtherApplications:'
            },
            {
                label: 'Show All',
                selector: 'unhideAllApplications:'
            },
            {
                type: 'separator'
            },
            {
                label: 'Quit',
                accelerator: 'Command+Q',
                selector: 'terminate:'
            },
      ]
    };

    var m2 = {
        label: 'Edit',
        submenu: [
            {
                label: 'Undo',
                accelerator: 'Command+Z',
                selector: 'undo:'
            },
            {
                label: 'Redo',
                accelerator: 'Shift+Command+Z',
                selector: 'redo:'
            },
            {
                type: 'separator'
            },
            {
                label: 'Cut',
                accelerator: 'Command+X',
                selector: 'cut:'
            },
            {
                label: 'Copy',
                accelerator: 'Command+C',
                selector: 'copy:'
            },
            {
                label: 'Paste',
                accelerator: 'Command+V',
                selector: 'paste:'
            },
            {
                label: 'Select All',
                accelerator: 'Command+A',
                selector: 'selectAll:'
            }]
    };

    var m3 = {
        label: 'View',
        submenu: [
            {
                label: 'Reload',
                accelerator: 'Command+R',
                click: function() {
                    remote.getCurrentWindow().reload();
                }
            },
            {
                label: 'Toggle DevTools',
                accelerator: 'Alt+Command+I',
                click: function() {
                    remote.getCurrentWindow().toggleDevTools();
                }
            }]
    };

    var m4 = {
        label: 'Window',
        submenu: [
            {
                label: 'Minimize',
                accelerator: 'Command+M',
                selector: 'performMiniaturize:'
            },
            {
                label: 'Close',
                accelerator: 'Command+W',
                selector: 'performClose:'
            },
            {
                type: 'separator'
            },
            {
                label: 'Bring All to Front',
                selector: 'arrangeInFront:'
            }]
    };

    var m5 = {
        label: 'Help',
        submenu: []
    };

    var template = [m1, m2, m3, m4, m5];

    var menu = Menu.buildFromTemplate(template);

    Menu.setApplicationMenu(menu);
}
