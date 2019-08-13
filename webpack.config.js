const { resolve } = require('path');

module.exports = {
    entry: resolve(__dirname, 'src'),
    mode: 'production',
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