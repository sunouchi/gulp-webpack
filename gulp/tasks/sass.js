var config = require('../config.js');
var browser = require('browser-sync');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var pleeease = require('gulp-pleeease');
var rename = require('gulp-rename');

gulp.task('sass', function() {
  gulp.src([config.src + '/sass/**/*sass', config.src + '/sass/**/*scss'])
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(pleeease())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(config.dest + '/css'))
    .pipe(browser.reload({ stream: true})
  );
});