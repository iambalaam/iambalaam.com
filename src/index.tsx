import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import htmlDocument from './html';

const H1: React.ComponentType = ({ children }) => <h1>{children}</h1>

const handleRequest = async (_request: FetchEvent) => {
    const content: string = renderToStaticMarkup(<H1>Hello Head!</H1>);
    return new Response(htmlDocument({
        title: 'iambalaam.com',
        desc: 'The newest and greatest site on the web!',
        content: content
    }), { status: 200, headers: { 'content-type': 'text/html; charset=UTF-8' } });
}
self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event))
});

