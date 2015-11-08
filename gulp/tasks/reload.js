var browser = require('browser-sync');
var gulp = require('gulp');

gulp.task('reload', function() {
  browser.reload();
});