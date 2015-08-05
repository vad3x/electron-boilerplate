module.exports = function(config) {
    'use strict';
    config.set({
        autoWatch: true,
        singleRun: true,
        basePath: './app',

        frameworks: ['jspm', 'jasmine'],

        jspm: {
            config: './system.js',
            packages: './jspm_packages/',
            loadFiles: [
                'browser/**/*.js'
            ]
        },

        proxies: {
            '/app': '/base/app'
        },

        browsers: ['PhantomJS'],
        reporters: ['progress', 'coverage'],

        files: ['../node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js'],

        preprocessors: {
            'browser/**/!(*spec).js': ['babel', 'sourcemap', 'coverage']
        },

        coverageReporter: {
            instrumenters: {
                isparta: require('isparta')
            },
            instrumenter: {
                'browser/**/*.js': 'isparta'
            },
            reporters: [
                {
                    type: 'text-summary',
                },
                {
                    type: 'html',
                    dir: '../coverage/',
                }
            ]
        },
        babelPreprocessor: {
            options: {
                sourceMap: 'inline',
                blacklist: ['useStrict']
            },
            sourceFileName: function(file) {
                return file.originalPath;
            }
        }
    });
};
