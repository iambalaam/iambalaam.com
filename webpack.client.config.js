const { resolve } = require('path');

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
            }
        ]
    }
}