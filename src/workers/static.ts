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

const contentType = (asset: string): string => {
    const match = asset.match(/(\.\w+(\.map)?)$/);
    const extension = match && match[0];

    switch (extension) {
        // src files
        case '.js': return 'application/javascript';
        case '.css': return 'text/css';
        // images
        case '.bmp': return 'image/bmp';
        case '.gif': return 'image/gif';
        case '.jpg': return 'image/jpeg';
        case '.jpg': return 'image/jpeg';
        case '.png': return 'image/png';
        case '.svg': return 'image/svg+xml';
        case '.webp': return 'image/webp';
        // map files
        case '.js.map':
        case '.css.map':
            return 'application/json';
        default:
            return '';
    }
}

const handleRequest = async (event: FetchEvent) => {
    const { pathname } = new URL(event.request.url);
    if (pathname && pathname.startsWith(ASSET_ROOT)) {
        const assetPath = pathname.slice(ASSET_ROOT.length);
        const response = await fetch(`${ASSET_HOSTING_URL}/${assetPath}`);
        if (response.ok) {
            const content = await response.body;
            return new Response(content, {
                headers: {
                    'content-type': contentType(pathname)
                }
            })
        }
    }
    return new Response('Resource not found', { status: 404 });
}

self.addEventListener('fetch', event => {
    event.respondWith(handleRequest(event))
})