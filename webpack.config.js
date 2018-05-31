const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const extractPlugin = new ExtractTextPlugin({
  filename: 'app.bundle.css'
});

module.exports = {
  entry: ['babel-polyfill', './src/js/app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['stage-2']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: extractPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: 'fonts/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
      title: 'Vinhomes Homepage',
      inject: true,
      hash: true,
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Vinhomes Products',
      inject: true,
      hash: true,
      filename: 'products.html',
      template: 'src/products.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Vinhomes Products Detail',
      inject: true,
      hash: true,
      filename: 'product-details.html',
      template: 'src/product-details.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Vinhomes Process',
      inject: true,
      hash: true,
      filename: 'process.html',
      template: 'src/process.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Vinhomes Process',
      inject: true,
      hash: true,
      filename: 'process-details.html',
      template: 'src/process-details.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Vinhomes Contacts',
      inject: true,
      hash: true,
      filename: 'contacts.html',
      template: 'src/contacts.html',
    }),
    new CleanWebpackPlugin(['dist'])
  ]
};
