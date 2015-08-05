'use strict';

var appDir = './app/';

module.exports = {
    appDir: appDir,
    buildDir: './build/',
    bundle: 'app',
    appHtml: appDir + 'app.html',

    less: [appDir + 'styles/main.less'],

    scripts: [appDir + 'browser/**/*.js',
              appDir + 'browser/**/*.es6'],

    mainFiles: [appDir + 'main.js',
                appDir + 'app.html',
                appDir + 'package.json',
                appDir + 'app-config.js',
                appDir + 'system.js'],

    copy: [appDir + 'node_modules/**/*.*',
             appDir + 'jspm_packages/*.*',
             appDir + 'jspm_packages/**/babel-core*/*.*',
             appDir + 'jspm_packages/**/babel-core*.*',
             appDir + 'server/**/*.*']
};
