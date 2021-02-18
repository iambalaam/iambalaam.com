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
                        I teamed up with a 3D artist to make a game in 48 hours - all the amazing modelling and texturing is their work, all the game logic and programming is mine.
                        We designed a fighting game that lets you interfere with your opponents input, leaving them <em>Out Of Control</em>.
                    </p>
                    <p>
                        We managed to prototype our game in the first 10 minutes of the jam by maliciously setting each others controls on games we already owned.
                        Immediately we found the hook of the game was when you change your opponent's controls just as they learn to use the previous ones, so we implemented dynamic remapping to our control system.
                        Controller support came as an added bonus for free as we could remap it in the same way.
                    </p>
                    <p>
                        <a href="https://www.youtube.com/c/DotSlashFrag">DotSlashFrag</a> found our game on Itch independently of the jam and <a href="https://www.youtube.com/watch?v=Xq9xE4kE8xQ">uploaded a let's play</a>.
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
                        I set out to make a drawing application in the browser without drawing on a <code>&lt;canvas /&gt;</code>.
                        I made vector art by positioning DOM elements, even though I thought it wouldn't be performant enough to use.
                    </p>
                    <p>
                        The prototype performed smoothy and worked much better than expected, and challenged a lot of assumptions I had about the browser.
                    </p>
                </>}
            />
            <Project
                title="iambalaam.com"
                id="iambalaam-frontend"
                href="https://iambalaam.com/"
                tagline="Front End"
                techUsed={[dae2css, reactJS]}
                frame={<WebsiteOutside />}
                description={<>
                    <p>
                        Following my 2D vector art with <a href="#photoshop-js">photoshop-js</a>, I wanted to test how well the browser would render 3D models using CSS and DOM elements.
                    </p>
                    <p>
                        I wrote and published my first npm module <a href={dae2css.href}><code>dae2css</code></a> to encapsulate all the fun linear algebra.
                    </p>
                    <p>
                        There are some rendering bugs (especially on chrome) that I won't be able to fix, but I think it's still an entertaining addition to the site.
                    </p>
                </>}
            />
            <Project
                title="iambalaam.com"
                id="iambalaam-backend"
                href="https://iambalaam.com/"
                tagline="Back End"
                techUsed={[cloudflareWorkers, githubActions]}
                frame={<WebsiteInside />}
                images={[Cloudflare, GithubActions]}
                description={<>
                    <p>
                        I wanted a site with a few moving parts as possible, so I adopted a serverless architecture.
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