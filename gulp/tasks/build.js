'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', ['copy'], function(cb) {
    runSequence('transpile', 'less', 'finalize', cb);
});
