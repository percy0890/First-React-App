// In webpack.config.js

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/dist'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}