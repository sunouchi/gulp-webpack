var browser = require('browser-sync');
var config = require('../config.js');
var gulp = require('gulp');
var plumber = require('gulp-plumber');

gulp.task('images', function() {
  gulp.src(
      [config.src + '/images/**/*'],
      {base: config.src}
    )
    .pipe(plumber())
    .pipe(gulp.dest(config.dest));
});