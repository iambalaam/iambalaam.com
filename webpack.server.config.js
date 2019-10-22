const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
        new MiniCssExtractPlugin({ filename: '[name].[hash].css' })
    ]
}