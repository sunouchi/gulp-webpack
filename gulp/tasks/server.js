var browser = require('browser-sync');
var config = require('../config.js');
var gulp = require('gulp');

gulp.task('server', function() {
  browser({
    server: {
      baseDir: config.dest
    },
    open: 'external'
  });
  gulp.watch(config.src + '/sass/**/*scss', ['sass', 'reload']);
  gulp.watch(config.src + '/**/*.html', ['copy', 'reload']);
  gulp.watch(config.src + '/coffee/**/*coffee', ['webpack', 'reload']);
  gulp.watch(config.src + '/images/**/*', ['images', 'reload']);
  // return gulp.watch([
  //   config.src + '/js/**/*js',
  //   config.src + '/!js/min/**/*js'],
  //   ['webpack', 'reload']
  // );
});