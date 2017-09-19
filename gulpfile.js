var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    preprocess = require('gulp-preprocess'),
    url = require('url'),
    proxy = require('proxy-middleware');
    wrap = require('gulp-wrap');
    declare = require('gulp-declare');
    concat = require('gulp-concat');
    changed = require('gulp-changed');


gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: ""
        }
    });
});

gulp.task('default', ['browser-sync']);
