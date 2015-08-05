'use strict';

var gulp       = require('gulp');
var util       = require('gulp-util');
var jspm       = require('jspm');
var livereload = require('gulp-livereload');
var utils      = require('../util/utils');
var config     = require('../config');

gulp.task('transpile', function(cb) {
    jspm.setPackagePath(config.appDir);
    jspm.bundleSFX([config.bundle], config.buildDir + config.bundle + '.js', {
            inject: false,
            minify: false,
            mangle: false,
            sourceMaps: true
        }).then(function() {
            livereload.reload();
            cb();
        })
        .catch(function(ex) {
            cb(new Error(ex));
        });
});
