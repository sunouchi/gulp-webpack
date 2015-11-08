var config = require('../config.js');
var gulp = require('gulp');
var gutil = require("gulp-util");
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

gulp.task("webpack-dev-server", function(callback) {
  var compiler = webpack(config.webpack);
  var server = new WebpackDevServer(compiler, config.webpackDevServer);

  server.listen(8080, "localhost", function(err) {
    if(err) throw new gutil.PluginError("webpack-dev-server", err);
    // Server listening
    gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");
    // keep the server alive or continue?
    // callback();
  });
});