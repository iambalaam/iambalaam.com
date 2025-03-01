/** @jsx h */
import { h } from 'https://esm.sh/preact@10.26.4';
import { render } from 'https://esm.sh/preact-render-to-string@6.5.13';
import App from "./App.tsx";

console.log(render(<App path={'/projects'} />));