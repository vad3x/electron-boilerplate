'use strict';

var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('start', function(cb) {
    runSequence('less', 'electron', 'watch', cb);
});
