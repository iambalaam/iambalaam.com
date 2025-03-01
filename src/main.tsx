/** @jsx h */
import { h, createContext } from 'preact';
import { render } from 'preact-render-to-string';

import htmlDocument from './util/html.ts';
import App from './App.tsx';


const defaultCtx = { status: 503 };
export const StatusCtx = createContext(defaultCtx);

function handler(req: Request): Response {
    const ctx = { status: 200 };

    try {
        const { pathname } = new URL(req.url);
        const content = render(<StatusCtx.Provider value={ctx}>
            <App path={pathname} />
        </StatusCtx.Provider>);


        return new Response(htmlDocument({
            title: 'iambalaam.com',
            desc: 'Guy Balaam: Software Developer;',
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

Deno.serve(handler)