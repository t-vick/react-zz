/**
 * DiGiHealth
 */

var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.join(__dirname, 'index.jsx')
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: ['react-hot', 'babel']
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};
