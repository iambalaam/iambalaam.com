import * as React from 'react';
import Project from '../components/Project';
import * as s from '../components/Project.module.scss';
import { Pencil, RewiredBot, WebsiteInside, WebsiteOutside } from '../components/Models';

import RewiredLogo from '../../static/rewired-logo.jpg';
import RewiredFallOff from '../../static/rewired-fall-off.gif';

import Jousting from '../../static/jousting.gif';

import Cat from '../../static/photoshop-js-cat.gif';
import Lightsaber from '../../static/lightsaber.gif';

import Cloudflare from '../../static/cloudflare.jpg';
import GithubActions from '../../static/github-actions.jpg';

import { Link } from '../util/types';

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
                tagline={<>GMTK GameJam 2020: <br className={s.softbreak} />"Out Of Control"</>}
                techUsed={[unity, rewiredItch]}
                frame={<RewiredBot />}
                images={[RewiredLogo, RewiredFallOff]}
                description={<>
                    <p>
                        In the GMTK GameJam 2020 we were given 48 hours to create a game given the brief "<em>Out of Control</em>".
                        I teamed up with a 3D artist to make a our game - all the amazing modelling and texturing is their work, all the game logic and programming is mine.
                        We came up with a fighting game that lets you interfere with your opponents input, leaving them <em>Out Of Control</em>.
                    </p>
                    <p>
                        Instead of getting straight to programming, we tested our idea to see if it was as fun as we'd thought.
                        We played fighting games we already owned and changed eachothers controls to make it as hard as possible.
                        The hook of the game became obvious - changing your opponent's controls just as they learnt to use the previous ones.
                    </p>
                    <p>
                        In the gif you can see the blue player flips forwards/backwards for the orange player.
                    </p>
                    <p>
                        I implemented a dynamic control system that allows remapping at runtime.
                        When a player collects a modifier, another mapping is added to their opponent (who might already have many mappings applied).
                    </p>
                    <p>
                        <a href="https://www.youtube.com/c/DotSlashFrag">DotSlashFrag</a> found our game on Itch independently of the jam and <a href="https://www.youtube.com/watch?v=Xq9xE4kE8xQ">reviewed it in a <em>let's play</em></a>.
                    </p>
                </>}
            />
            <Project
                title="Jousting"
                id="jousting"
                href={joustingItch.href}
                tagline={<>GMTK GameJam 2019: <br className={s.softbreak} />"Only One"</>}
                techUsed={[p5js, socketIO, heroku, joustingItch]}
                frame={<WebsiteOutside />}
                images={[Jousting]}
                description={<>
                    <p>
                        The brief for this game jam was "<em>Only One</em>".
                        I wanted to make a game with <em>Only One</em> input, so it could be played by anyone with a mouse or touch device.
                    </p>
                    <p>
                        I decided to create an online multiplayer game as before this I had only made single player games.
                        As it was my first game jam, and I only had 2 days, I stuck to what I knew and designed it to work in the browser.
                        I learnt to use websockets between players, wrote a simple physics engine and used <a href={p5js.href}>{p5js.text}</a> to render the canvas.
                    </p>
                    <p>
                        I designed the game to reward an aggressive playstyle, so the players sword gets longer the faster they are travelling, encouraging aerial combat.
                    </p>
                    <p>
                        I took inspiraton from <a href="https://www.youtube.com/watch?v=sQwBuaik9lA">Super Pole Riders</a> for the pole vault mechanics.
                    </p>
                </>}
            />
            <Project
                title="photoshop-js"
                id="photoshop-js"
                href="https://iambalaam.github.io/JSToys/photoshop-js/"
                techUsed={[vanillaJS]}
                frame={<Pencil />}
                images={[Cat, Lightsaber]}
                description={<>
                    <p>
                        Drawing anything in the browser that isn't a circle or a rectangle normally relies on rendering pixels on a bitmap canvas.
                        This approach is boring.
                        I set out to challenge these norms and to make a drawing application without using a canvas.
                    </p>
                    <p>
                        I made a <a href="https://codepen.io/iambalaam/pen/vzzjVg">proof of concept</a> drawing a line between two points by positioning DOM elements.
                        Then, I used this to make vector art with hundreds, or thousands, of these line segments.
                    </p>
                    <p>
                        I previously thought that adding this many elements to the DOM in real time would crash the browser.
                        To my surprise it performed perfectly smoothly and challenged assumptions I had about web development.
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
                        I wrote and published my first open source npm module <a href={dae2css.href}><code>dae2css</code></a> that renders 3D models as individual DOM elements.
                        You can highlight the elements by hovering over models, or tapping on them with touch devices.
                    </p>
                    <p>
                        Following my 2D vector art with <a href="#photoshop-js">photoshop-js</a>, I wanted to test how well the browser would render 3D models using CSS and DOM elements.
                        At the same time I was practising low-poly modelling in blender to help speed up creation of game prototypes in Unity and I realised I could showcase these on this website.
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
                images={[Cloudflare, GithubActions]}
                description={<>
                    <p>
                        I wanted to serve this website in a unique way, with a few moving parts as possible.
                        After attending <a href="https://2019.jsconf.eu/ashley-williams/javascripts-journey-to-the-edge.html">a talk by Ashley Williams at JS Conf EU 2019</a>, I wanted to try out Cloudflare Workers.
                    </p>
                    <p>
                        This architecture would allow me to forget about a fleet of servers to host the website, and where continuous integration or file hosting would take place.
                        I wanted to make a proof of concept (if you're reading this - it worked!).
                    </p>
                    <p>
                        Github Actions handle testing, building and deploying my code.  It also <a href="https://github.com/iambalaam/iambalaam.com/commits/dist">commits my build artifacts</a> to serve as free file hosting.
                    </p>
                    <p>
                        Cloudflare Workers serverside render the website to improve page performance, and also act as a CDN for static assets.
                    </p>
                </>}
            />
        </>
    )
};