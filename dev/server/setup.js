const { resolve } = require('path');
const { readFileSync } = require('fs');
const { process } = require('jest-css-modules-transform');
const ROOT_DIR = resolve(__dirname, '../..');
// Environment setup
global.BUILD_COMMIT = 'dist';

// .module.scss mocking
require.extensions['.scss'] = (module, filename) => {
    const src = readFileSync(filename).toString();
    const js = process(src, filename, { rootDir: ROOT_DIR })
    module._compile(js, filename);
}