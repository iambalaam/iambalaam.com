import * as express from 'express';
import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../../src/App';

const PORT = process.env.port || 3000;
const server = express();

server.get('*', (request, response) => {
    const content = renderToStaticMarkup(
        <StaticRouter location={request.url} >
            <App />
        </StaticRouter>
    );
    response.send(content);
});

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})