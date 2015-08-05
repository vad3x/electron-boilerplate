'use strict';

var gulp       = require('gulp');
var less       = require('gulp-less');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var config     = require('../config');

gulp.task('less', function() {
    return gulp.src(config.less, {
            base: config.appDir
        })
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.buildDir))
        .pipe(livereload());
});
