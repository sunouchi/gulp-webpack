var browser = require('browser-sync');
var coffee = require('gulp-coffee');
var config = require('../config.js');
var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('coffee', function() {
  gulp.src(config.src + '/coffee/**/*coffee')
    .pipe(plumber())
    .pipe(coffee())
    .pipe(gulp.dest(config.dest + '/js'))
    .pipe(browser.reload({
      stream: true
    })
  );
});