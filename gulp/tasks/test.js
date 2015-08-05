'use strict';

var gulp   = require('gulp');
var Server = require('karma').Server;
var config = require('../config');

gulp.task('test', function(cb) {
    new Server({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true
    }, cb).start();
});
