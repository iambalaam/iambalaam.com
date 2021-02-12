import { renderCSSTriangles, requiredCSSRules } from 'dae2css';
import { resolve } from 'path';
import { readdirSync, writeFileSync } from 'fs'

const MODEL_DIR = resolve(__dirname, '..', 'models');
const modelFiles = readdirSync(MODEL_DIR);

(async () => {

    for (const file of modelFiles) {
        const [filename, ext] = file.split('.');
        if (ext !== 'dae') continue;

        const html = await renderCSSTriangles(`${MODEL_DIR}/${file}`, 200, `triangle ${filename}`);
        const htmlTemplateFile = `${MODEL_DIR}/${file.replace('.dae', '.xhtml.js')}`;
        writeFileSync(htmlTemplateFile, `module.exports = { html: '${html}' }`);
    }

    writeFileSync(`${MODEL_DIR}/required.module.scss`, `:global .triangle {${requiredCSSRules}}`);

})()
