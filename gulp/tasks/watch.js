'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');
var livereload  = require('gulp-livereload');
var config      = require('../config');

gulp.task('watch', function (cb) {
    livereload.listen();

    gulp.watch(config.mainFiles, { cwd: 'app' }, ['copy']);
    gulp.watch(config.less, ['less']);
    gulp.watch(config.scripts, ['transpile']);
});
