import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter, StaticContext } from 'react-router';
import htmlDocument from './html';
import App from './App';

const handleEvent = async (event: FetchEvent) => {
    const context: StaticContext = {};
    const content: string = renderToStaticMarkup(
        <StaticRouter location={event.request.url} context={context} >
            <App />
        </StaticRouter>
    );
    const statusCode = context.statusCode || 200;
    return new Response(htmlDocument({
        title: 'iambalaam.com',
        desc: 'The newest and greatest site on the web!',
        content
    }), { status: statusCode, headers: { 'content-type': 'text/html; charset=UTF-8' } });
}
self.addEventListener('fetch', (event) => {
    event.respondWith(handleEvent(event))
});

