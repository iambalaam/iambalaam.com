const { resolve } = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const BUILD_COMMIT = process.env.BUILD_COMMIT || 'dist';

module.exports = {
    entry: resolve(__dirname, 'src', 'client'),
    output: {
        filename: 'hydration.js'
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
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ["postcss-preset-env", { /* Options */ }]
                                ]
                            }
                        }
                    }, {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    publicPath: `/static/${BUILD_COMMIT}/dist/`
                }
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'bundle-analyzer.html',
            openAnalyzer: false
        }),
    ]
}