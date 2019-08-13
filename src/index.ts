import CloudflareWorkerGlobalScope from 'types-cloudflare-worker';
declare var self: CloudflareWorkerGlobalScope;

const handleRequest = async (_request: FetchEvent) => {
    return new Response('Hello TypeScript!', { status: 200 });
}
self.addEventListener('fetch', (event) => {
    event.respondWith(handleRequest(event))
});

