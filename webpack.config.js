var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'public', 'browser');
var JS_DIR = path.resolve(__dirname, 'public', 'src');

var config = {
  entry: JS_DIR + '/index.jsx',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: JS_DIR,
        loader: 'babel-loader',
        query: {
          "presets": ["es2015", "react"]
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
};

module.exports = config;
