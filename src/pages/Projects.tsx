/** @jsx h */
import { h, Fragment } from 'preact';
import Project from '../components/Project.tsx';
import { Pencil, RewiredBot, WebsiteInside, WebsiteOutside } from '../components/Models.tsx';

import { Link } from '../util/types.ts';

// Links
const unity: Link = { text: 'Unity', href: 'https://unity.com/' };
const rewiredItch: Link = { text: 'Itch.io', href: 'https://iambalaam.itch.io/rewired' };
const joustingItch: Link = { text: 'Itch.io', href: 'https://iambalaam.itch.io/jousting' };
const p5js: Link = { text: 'p5.js', href: 'https://p5js.org/' };
const heroku: Link = { text: 'Heroku', href: 'https://www.heroku.com/' };
const socketIO: Link = { text: 'Socket.IO', href: 'https://socket.io/' };
const vanillaJS: Link = { text: 'Vanilla JS', href: 'http://vanilla-js.com/' };
const dae2css: Link = { text: 'dae2css', href: 'https://www.npmjs.com/package/dae2css/' };
const reactJS: Link = { text: 'React', href: 'https://reactjs.org/' };
const cloudflareWorkers: Link = { text: 'Cloudflare Workers', href: 'https://workers.cloudflare.com/' }
const githubActions: Link = { text: 'Github Actions', href: 'https://github.com/features/actions' };

export default function Projects() {
    return (
        <>
            <Project
                title="Rewired"
                id="rewired"
                href={rewiredItch.href}
                tagline={<>GMTK GameJam 2020: <br className={'softbreak'} />"Out of Control"</>}
                techUsed={[unity, rewiredItch]}
                frame={<RewiredBot />}
                images={['../../static/rewired-logo.jpg', '../../static/rewired-fall-off.gif']}
                description={<>
                    <p>
                        I teamed up with <a href="https://arnovanavermaet.artstation.com/" target="_blank">Arno Van Avermaet</a>, a 3D artist, for the GMTK 2020 Game Jam - all the amazing modelling and texturing is his work, all the game logic and programming is mine.
                        We were given 48 hours to make a game fitting the brief '<em>Out of Control</em>'.
                        We came up with a fighting game that lets you interfere with your opponent's input, leaving them <em>Out of Control</em>.
                    </p>
                    <p>
                        Before getting to programming, we first tested our idea to see if it was as fun as we had thought.
                        We played fighting games that we already owned and changed each other's controls to make it as hard as possible.
                        The hook of the game became obvious - changing your opponent's controls just as they learnt to use the previous ones.
                    </p>
                    <p>
                        In the gif you can see the blue player flips the orange player's forward/backward controls.
                    </p>
                    <p>
                        I implemented a dynamic control system that allows remapping at runtime.
                        When a player collects a modifier, another mapping is added to their opponent (who might already have many mappings applied).
                    </p>
                    <p>
                        <a href="https://www.youtube.com/c/DotSlashFrag" target="_blank">DotSlashFrag</a> found our game on Itch independently of the jam and <a href="https://www.youtube.com/watch?v=Xq9xE4kE8xQ" target="_blank">reviewed it in a <em>Let's Play</em></a>.
                    </p>
                </>}
            />
            <Project
                title="Jousting"
                id="jousting"
                href={joustingItch.href}
                tagline={<>GMTK GameJam 2019: <br className={'softbreak'} />"Only One"</>}
                techUsed={[p5js, socketIO, heroku, joustingItch]}
                frame={<WebsiteOutside />}
                images={['../../static/jousting.gif']}
                description={<>
                    <p>
                        The brief for this game jam was "<em>Only One</em>".
                        I wanted to make a game with <em>Only One</em> input, so it could be played by anyone with a mouse or touch device.
                    </p>
                    <p>
                        This was my first game jam, and my first attempt at making an online multiplayer game.
                        With only 48 hours I stuck to what I knew and designed it to work in the browser.
                        I learnt to use websockets between players, wrote a simple physics engine and used <a href={p5js.href} target="_blank">{p5js.text}</a> to render the canvas.
                    </p>
                    <p>
                        I designed the game to reward an aggressive playstyle, so the player's sword gets longer the faster they are travelling, encouraging aerial combat.
                    </p>
                    <p>
                        I took inspiration from <a href="https://www.youtube.com/watch?v=sQwBuaik9lA" target="_blank">Super Pole Riders</a> for the pole vault mechanics.
                    </p>
                </>}
            />
            <Project
                title="photoshop-js"
                id="photoshop-js"
                href="https://iambalaam.github.io/JSToys/photoshop-js/"
                techUsed={[vanillaJS]}
                frame={<Pencil />}
                images={['../../static/photoshop-js-cat.gif', '../../static/lightsaber.gif']}
                description={<>
                    <p>
                        Drawing anything in the browser that isn't a circle or a rectangle normally relies on rendering pixels on a bitmap canvas.
                        This approach is boring.
                        So I made my drawing application unique by not using a canvas.
                    </p>
                    <p>
                        As a <a href="https://codepen.io/iambalaam/pen/vzzjVg" target="_blank">proof of concept</a>, I drew a line between two points by positioning DOM elements.
                        Then, I used this to make vector art with hundreds, or thousands, of these line segments.
                    </p>
                    <p>
                        I had previously assumed that adding this many elements to the DOM in real time would crash the browser.
                        To my surprise, it performed perfectly smoothly, challenging assumptions I had about web development.
                    </p>
                </>}
            />
            <Project
                title="dae2css"
                id="dae2css"
                href={dae2css.href}
                techUsed={[dae2css]}
                frame={<WebsiteOutside />}
                description={<>
                    <p>
                        I wrote and published my first open source npm module <a href={dae2css.href} target="_blank"><code>dae2css</code></a>, which renders 3D models as individual DOM elements.
                        You can highlight the elements by hovering over models, or tapping on them with touch devices.
                    </p>
                    <p>
                        Following my 2D vector art with <a href="#photoshop-js">photoshop-js</a>, I wanted to test how well the browser would render 3D models using CSS and DOM elements.
                        At the same time, I was practising low-poly modelling in Blender to help speed up creation of game prototypes in Unity, so I showcased some of these on this website.
                    </p>
                    <p>

                    </p>
                </>}
            />
            <Project
                title="iambalaam.com"
                id="iambalaam-backend"
                href="https://iambalaam.com/"
                tagline="Back End"
                techUsed={[cloudflareWorkers, githubActions, reactJS]}
                frame={<WebsiteInside />}
                images={['../../static/cloudflare.jpg', '../../static/github-actions.jpg']}
                description={<>
                    <p>
                        I wanted to serve this website in a unique way, with as few moving parts as possible.
                    </p>
                    <p>
                        After attending <a href="https://2019.jsconf.eu/ashley-williams/javascripts-journey-to-the-edge.html" target="_blank">a talk by Ashley Williams at JS Conf EU 2019</a>, I decided to try out Cloudflare Workers.
                        This architecture would allow me to forget about a fleet of servers to host the website, and where continuous integration or file hosting would take place.
                        I made a proof of concept (if you're reading this - it worked!).
                    </p>
                    <p>
                        Github Actions handles testing, building and deploying my code.  It also <a href="https://github.com/iambalaam/iambalaam.com/commits/dist" target="_blank">commits my build artifacts</a> to serve as free file hosting.
                    </p>
                    <p>
                        Cloudflare Workers serverside renders the website to improve page performance, and also act as a CDN for static assets.
                    </p>
                </>}
            />
        </>
    )
};