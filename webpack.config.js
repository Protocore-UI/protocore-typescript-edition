'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

var config = {
  entry: './src/main.ts',

  output: {
    path: './dist/',
    filename: 'bundle.min.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ["", ".ts", ".js"]
  },

  module: {
    loaders: [{
      test: /\.ts?$/,
      exclude: /node_modules/,
      loader: 'ts-loader'
    }, {
      test: /\.(jpg|jpeg|png|gif|svg)$/i,
      loader: 'file'
    }, {
      test: /\.handlebars$/i,
      loader: 'handlebars-loader'
    }, {
      test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "file"
    }, {
      test: /\.less$/,
      loader: 'style-loader!css-loader!less-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: "url-loader?limit=10000&mimetype=application/font-woff"
    }]
  }
};

module.exports = config;
