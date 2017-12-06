const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const extractPlugin = new ExtractTextPlugin({
   filename: '[name].bundle.css'
});

module.exports = {
    entry: {
      app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ["env", "stage-3"],
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
                test: /\.pug$/,
                use: 'pug-loader'
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif|svg|ico)$/,
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
        new CleanWebpackPlugin(['dist'],{
            watch: true,
        }),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          hash: false,
          template: 'src/index.html',
        }),
        new HtmlWebpackPlugin({
          filename: 'page.html',
          template: 'src/page.html',
        }),
        new HtmlWebpackPlugin({
            filename: 'animate1.html',
            template: 'src/animate1.html',
        }),
        // new HtmlWebpackPlugin({
        //     inject: true,
        //     chunks: ['contact', 'app'],
        //     filename: 'contact-detail.html',
        //     template: './src/contact-detail.pug',
        // }),
        // new webpack.ProvidePlugin({
        //   $: 'jquery',
        //   jQuery: 'jquery'
        // }),
    ]
};