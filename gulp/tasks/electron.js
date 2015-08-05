'use strict';

var gulp         = require('gulp');
var electron     = require('electron-prebuilt');
var childProcess = require('child_process');

gulp.task('electron', function() {
    var app = childProcess.spawn(electron, ['./app'], {
        stdio: 'inherit'
    });

    app.on('close', function(code) {
        // User closed the app. Kill the host process.
        process.exit();
    });
});
