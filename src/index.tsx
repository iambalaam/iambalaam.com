import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import htmlDocument from './html';
import App from './App';

const handleEvent = async (event: FetchEvent) => {
    const content: string = renderToStaticMarkup(
        <StaticRouter location={event.request.url} >
            <App />
        </StaticRouter>
    );
    return new Response(htmlDocument({
        title: 'iambalaam.com',
        desc: 'The newest and greatest site on the web!',
        content
    }), { status: 200, headers: { 'content-type': 'text/html; charset=UTF-8' } });
}
self.addEventListener('fetch', (event) => {
    event.respondWith(handleEvent(event))
});

