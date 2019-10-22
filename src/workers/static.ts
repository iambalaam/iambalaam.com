/**
 * This worker is only used to cache assets from github.
 * This is not currently published from this workspace.
 * To update manually go through cloudflare console.
 * https://github.com/cloudflare/wrangler/pull/224
 */

import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

const ASSET_ROOT = '/static/';
const ASSET_HOSTING_URL = 'https://raw.githubusercontent.com/iambalaam/iambalaam.com';

const handleRequest = async (event: FetchEvent) => {
    const { pathname } = new URL(event.request.url);
    if (pathname && pathname.startsWith(ASSET_ROOT)) {
        const assetPath = pathname.slice(ASSET_ROOT.length);
        return fetch(`${ASSET_HOSTING_URL}/${assetPath}`);
    } else {
        return new Response('Resource not found', { status: 404 });
    }
}

self.addEventListener('fetch', event => {
    event.respondWith(handleRequest(event))
})