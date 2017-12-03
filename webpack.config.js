const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const extractPlugin = new ExtractTextPlugin({
    filename: 'css/[name].bundle.css'
});

module.exports = {
    entry: {
        app: './src/js/app.js',
        homepage: './src/js/homepage.js',
        architecture: './src/js/architecture.js',
        contact: './src/js/contact.js',
        darkhorse: './src/js/darkhorse.js',
        portfolio: './src/js/portfolio.js',
        'portfolio-single': './src/js/portfolio-single.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js',
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
        new CleanWebpackPlugin(['dist'],{
            watch: true,
        }),
        extractPlugin,
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['homepage', 'app'],
            filename: 'index.html',
            template: './src/homepage.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['architecture', 'app'],
            filename: 'architecture.html',
            template: './src/architecture.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['darkhorse', 'app'],
            filename: 'darkhorse.html',
            template: './src/darkhorse.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['portfolio', 'app'],
            filename: 'portfolio.html',
            template: './src/portfolio.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['portfolio-single', 'app'],
            filename: 'portfolio-single.html',
            template: './src/portfolio-single.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['contact', 'app'],
            filename: 'contact.html',
            template: './src/contact.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['contact', 'app'],
            filename: 'contact-info.html',
            template: './src/contact-info.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['contact', 'app'],
            filename: 'contact-detail.html',
            template: './src/contact-detail.pug',
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['contact', 'app'],
            filename: 'contact-career.html',
            template: './src/contact-career.pug',
        }),

    ]
};
