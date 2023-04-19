const { resolve, parse } = require('path');
const { readFileSync } = require('fs');
const { process } = require('jest-css-modules-transform');
const ROOT_DIR = resolve(__dirname, '../..');

// Environment setup
global.BUILD_COMMIT = 'dist';

// .module.scss mocking
require.extensions['.scss'] = (module, filename) => {
    const src = readFileSync(filename).toString();
    const js = process(src, filename, { rootDir: ROOT_DIR }).code;
    module._compile(js, filename);
}

// static mocking
const esModuleTemplate = (data) => `
"use strict";
const data = ${JSON.stringify(data)}
if (typeof module === 'object' && module) {
    Object.defineProperty(module, "__esModule", {
        value: true
    });
    module.exports = { default: data };
} else {
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = data;
}
`;
const staticMock = (module, filename) => {
    const { name, ext } = parse(filename);
    const js = esModuleTemplate(`/static/${BUILD_COMMIT}/dist/${name}${ext}`)
    module._compile(js, filename);
}
require.extensions['.gif'] = staticMock;
require.extensions['.jpg'] = staticMock;
require.extensions['.jpeg'] = staticMock;
require.extensions['.png'] = staticMock;