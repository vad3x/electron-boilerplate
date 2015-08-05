'use strict';

var gulp     = require('gulp');
var fs       = require('fs');
var electron = require('gulp-electron');

gulp.task('release', ['build'], function() {
    var packageJson = JSON.parse(fs.readFileSync('./build/package.json'));

    return gulp.src('')
        .pipe(electron({
            src: './build',
            packageJson: packageJson,
            release: './releases',
            cache: './cache',
            version: 'v0.26.1',
            packaging: false,
            asar: false,
            platforms: ['darwin-x64'],
            platformResources: {
                darwin: {
                    CFBundleDisplayName: packageJson.name,
                    CFBundleIdentifier: packageJson.name,
                    CFBundleName: packageJson.name,
                    CFBundleVersion: packageJson.version,
                    //icon: 'gulp-electron.icns'
                }
            }
        }))
        .pipe(gulp.dest(''));
});
