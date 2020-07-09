const htmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        query: {
                            presets: ['@babel/react', '@babel/env'],
                        }
                    }
                ],
                exclude: /node_module/,
            },
            {
                test: /\.html/,
                use: [
                    {
                        loader: 'html-loader',
                        options: { minimize: true }
                    }
                ]
            },
            {
                test: /\.scss/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: './public/index.html',
            filename: __dirname + '/devl/index.html'
        }),
        new miniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: __dirname + '/devl/static/js/'
    },
    devServer: {
        contentBase: path.join(__dirname, 'devl'),
        compress: true,
        port: 9000
    }
}