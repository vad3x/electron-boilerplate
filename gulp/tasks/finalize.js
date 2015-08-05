'use strict';

var gulp        = require('gulp');
var jetpack     = require('fs-jetpack');
var htmlreplace = require('gulp-html-replace');
var rename      = require('gulp-rename');
var utils       = require('../util/utils');
var config      = require('../config');

gulp.task('finalize', function() {
    gulp.src('config/env-' + utils.getEnvName() + '.js')
        .pipe(rename('app-config.js'))
        .pipe(gulp.dest(config.buildDir));

    return gulp.src(config.appHtml)
        .pipe(htmlreplace({
            'css': 'styles/main.css',
            'js': 'app.js'
        }))
        .pipe(gulp.dest(config.buildDir));
});
