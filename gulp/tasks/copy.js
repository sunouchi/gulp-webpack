var browser = require('browser-sync');
var config = require('../config.js');
var gulp = require('gulp');

gulp.task('copy', function() {
  gulp.src(
      [config.src + '/**/*.html'],
      {base: config.src}
    )
    .pipe(gulp.dest(config.dest));
});