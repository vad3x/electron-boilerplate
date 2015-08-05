'use strict';

var gulp       = require('gulp');
var livereload = require('gulp-livereload');
var config     = require('../config');


// TODO change
gulp.task('copy', ['clean'], function() {
    return gulp.src(config.mainFiles.concat(config.copy), {
            base: config.appDir
        })
        .pipe(gulp.dest(config.buildDir));
});
