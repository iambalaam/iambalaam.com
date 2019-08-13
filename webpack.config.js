const { resolve } = require('path');

module.exports = {
    entry: resolve(__dirname, 'src', 'index.ts'),
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader'
            }
        ]
    }
}