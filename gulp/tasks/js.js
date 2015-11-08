var browser = require('browser-sync');
var config = require('../config.js');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');

gulp.task('js', function() {
  console.log(config.src);
  gulp.src([config.src + '/js/**/*js', config.src + '!/js/min/**/*js'])
    .pipe(plumber())
    .pipe(uglify())
    .pipe(gulp.dest(config.dest + '/js/min'))
    .pipe(browser.reload({
      stream: true
    })
  );
});