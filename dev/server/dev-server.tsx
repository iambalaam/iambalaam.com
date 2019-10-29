import * as express from 'express';
import * as React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter, StaticContext } from 'react-router'
import { resolve } from 'path';
import htmlDocument from '../../src/util/html';
import App from '../../src/App';

const ROOT_DIR = resolve(__dirname, '../..');
const PORT = process.env.port || 3000;
const server = express();

server.use('/static/dist/dist', express.static(resolve(ROOT_DIR, 'dist')));
server.get('*', (request, response) => {
    const context: StaticContext = {};
    try {
        const content = renderToString(
            <StaticRouter location={request.url} context={context} >
                <App />
            </StaticRouter>
        );
        response.status(context.statusCode || 200);
        response.send(htmlDocument({
            title: 'Dev Server',
            desc: 'Placeholder description',
            content
        }));
    } catch (error) {
        response.status(500);
        response.send(htmlDocument({
            title: 'iambalaam.com',
            desc: 'Uh oh - something broke',
            content: process.env.NODE_ENV === 'production'
                ? '<h1>Uh oh</h1><p>Something broke, <a href="/">go back</a>?</p>'
                : `<pre>${error.stack || error}</pre>`
        }))
    }
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})