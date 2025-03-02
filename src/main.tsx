/** @jsx h */
import { h, createContext } from 'preact';
import { route, Route } from '@std/http/unstable-route'
import { serveDir } from "@std/http/file-server";
import { render } from 'preact-render-to-string';

import htmlDocument from './util/html.ts';
import App from './App.tsx';

// Find css
const cssFiles = [];
try {
    for await (const file of Deno.readDir('dist/static')) {
        if (file.name.endsWith('.css')) {
            cssFiles.push(`static/${file.name}`);
        }
    }
} catch (_err) {
    throw new Error('Could not find dist/static');
}
if (cssFiles.length === 0) throw new Error('Could not find css files');
if (cssFiles.length > 1) throw new Error(`Multiple css files found ${cssFiles.join(', ')}`);
const cssFile = cssFiles[0]!;

const defaultCtx = { status: 503 };
export const StatusCtx = createContext(defaultCtx);

const routes: Route[] = [
    {
        pattern: new URLPattern({ pathname: '/static/*' }),
        handler: (req) => serveDir(req, { fsRoot: 'dist', })
    }
];

function indexHtmlHandler(req: Request): Response {
    const ctx = { status: 200 };
    const { pathname } = new URL(req.url);

    try {
        const content = render(<StatusCtx.Provider value={ctx}>
            <App path={pathname} />
        </StatusCtx.Provider>);


        return new Response(htmlDocument({
            title: 'iambalaam.com',
            desc: 'Guy Balaam: Software Developer;',
            head: `<link rel="stylesheet" href="${cssFile}">`,
            content
        }), { status: ctx.status || 200, headers: { 'content-type': 'text/html; charset=UTF-8' } });
    } catch (_err) {
        return new Response(htmlDocument({
            title: 'iambalaam.com',
            desc: 'Uh oh - something broke',
            content: '<h1>Uh oh</h1><p>Something broke, <a href="/">go back</a>?</p>'
        }), { status: 500 })
    }
}

console.log('Starting server')
Deno.serve(route(routes, indexHtmlHandler));