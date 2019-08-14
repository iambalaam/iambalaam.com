import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

const H1: React.ComponentType = ({ children }) => <h1>{children}</h1>

const handleRequest = async (_request: FetchEvent) => {
    const html: string = renderToStaticMarkup(<H1>Hello Github actions!</H1>);
    return new Response(html, { status: 200, headers: { 'content-type': 'text/html; charset=UTF-8' } });
}
self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event))
});

