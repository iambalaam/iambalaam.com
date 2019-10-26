const { resolve } = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

console.log('process.env.BUILD_COMMIT');
console.log(process.env.BUILD_COMMIT);
const BUILD_COMMIT = process.env.BUILD_COMMIT || 'dist';

module.exports = {
    entry: resolve(__dirname, 'src', 'workers'),
    output: {
        filename: 'main.js'
    },
    mode: process.env.NODE_ENV || 'production',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            },
            {
                test: /\.module\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: { localIdentName: '[local]' },
                        }
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new webpack.DefinePlugin({ BUILD_COMMIT: JSON.stringify(BUILD_COMMIT) })
    ]
}