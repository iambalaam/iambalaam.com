import * as express from 'express';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter, StaticContext } from 'react-router'
import htmlDocument from '../../src/html';
import App from '../../src/App';

const PORT = process.env.port || 3000;
const server = express();

server.get('*', (request, response) => {
    const context: StaticContext = {};
    const content = renderToStaticMarkup(
        <StaticRouter location={request.url} context={context} >
            <App />
        </StaticRouter>
    );
    const statusCode = context.statusCode || 200;
    response.status(statusCode);
    response.send(htmlDocument({
        title: 'Dev Server',
        desc: 'Placeholder description',
        content
    }));
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})