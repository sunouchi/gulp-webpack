// Require
var path = require('path');
var webpack = require('webpack');

// Paths
var src = path.resolve('./src');
var dest = path.resolve('./build');
// var src = './src';
// var dest = './build';
var root = path.join(__dirname, '..');

// Config
module.exports = {
  dest: dest,

  src: src,

  webpack: {
    entry: {
      top: src + '/coffee/top.coffee',
      app: src + '/coffee/app.coffee'
    },
    output: {
      path: dest,
      filename: '[name].bundle.js',
      chunkFilename: '[id].common.js'
    },
    resolve: {
      root: [root, 'bower_components'],
      extensions: ['', 'js', 'coffee'],
      moduleDirectories: ['node_modules', 'bower_components', 'web_modules'],
      alias: {
        // davis: root + '/bower_components/davis/davis.js'
      }
    },
    externals: {
      // 'director': 'director'
      // Davis: Davis
    },
    devtool: '#souce-map',
    stats: {
      colors: true
    },
    plugins: [
      new webpack.ResolverPlugin([
        new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
      ]),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.AggressiveMergingPlugin(),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        'window.jQuery': 'jquery',
        _: 'lodash'
      })
    ],
    module: {
      loaders: [
        // { test: /\.html$/, loader: 'html?minimize' },
        // { test: /\.scss$/, loader: 'style!css!sass' },
        // { test: /\.(png|jpg)$/, loader: 'url?limit=8192' }
        { test: /\.coffee$/, loader: 'coffee' }
      ]
    }
  },

  webpackDevServer: {
    // entry: {
    //   app: ['./app/main.js']
    // },
    // output: {
    //   path: './build',
    //   publicPath: '/assets/',
    //   filename: 'bundle.js'
    // }

    // contentBase: dest,
    // hot: true,
    // quiet: false,
    // noInfo: false

    contentBase: dest,
    hot: true,
    stats: { color: true },
    publicPath: '/assets/',
    historyApiFallback: true
    // proxy: {
    //   '*': 'http://localhost:9090'
    // }
  }
};