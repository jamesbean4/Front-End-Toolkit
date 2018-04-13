const gulp = require('gulp'),
    runSequence = require('run-sequence').use(gulp),
    config = require('../gulp.config.js')();

module.exports = function () {
    gulp.watch(
        config.scss.src,
        () => runSequence('compile-scss', 'live-reload')
    );
};
