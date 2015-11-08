var config = require('../config.js');
var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');

gulp.task("webpack", function(callback) {
  // console.log('webpack loaded.');
  // run webpack
  webpack(config.webpack, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log("[webpack]", stats.toString({
      // output options
    }));
    callback();
  });
});