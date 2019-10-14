import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter, StaticContext } from 'react-router';
import { parse } from 'url';
import htmlDocument from './html';
import App from './App';

const handleEvent = async (event: FetchEvent) => {
    const path = parse(event.request.url);
    const context: StaticContext = {};
    try {
        const content: string = renderToStaticMarkup(
            <StaticRouter location={path} context={context} >
                <App />
            </StaticRouter>
        );
        return new Response(htmlDocument({
            title: 'iambalaam.com',
            desc: 'The newest and greatest site on the web!',
            content
        }), { status: context.statusCode || 200, headers: { 'content-type': 'text/html; charset=UTF-8' } });
    } catch (error) {
        return new Response(htmlDocument({
            title: 'iambalaam.com',
            desc: 'Uh oh - something broke',
            content: process.env.NODE_ENV === 'production'
                ? '<h1>Uh oh</h1><p>Something broke, <a href="/">go back</a>?</p>'
                : `<pre>${error.stack || error}</pre>`
        }), { status: 500 })
    }
}
self.addEventListener('fetch', (event) => {
    event.respondWith(handleEvent(event))
});

