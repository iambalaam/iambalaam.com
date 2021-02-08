import * as React from 'react';
import Project from '../components/Project';
import { Pencil, RewiredBot, Tick, WebsiteModel } from '../components/Models';

import RewiredLogo from '../../static/rewired-logo.jpg';
import RewiredFallOff from '../../static/rewired-fall-off.gif';

import Jousting from '../../static/jousting.gif';

import Cat from '../../static/photoshop-js-cat.gif';
import Lightsaber from '../../static/lightsaber.gif';
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

export default function Home() {
    return (
        <>
            <h1>Projects</h1>
            <Project
                title={{ text: 'Rewired', href: rewiredItch.href }}
                tagline="GMTK GameJam 2020"
                techUsed={[unity, rewiredItch]}
                frame={<RewiredBot />}
                images={[RewiredLogo, RewiredFallOff]}
            />
            <Project
                title={{ text: 'Jousting', href: joustingItch.href }}
                tagline="GMTK GameJam 2019"
                techUsed={[p5js, socketIO, heroku, joustingItch]}
                frame={<WebsiteModel />}
                images={[Jousting]}
            />
            <Project
                title={{ text: 'photoshop-js', href: 'https://iambalaam.github.io/JSToys/photoshop-js/' }}
                techUsed={[vanillaJS]}
                frame={< Pencil />}
                images={[Cat, Lightsaber]}
            />
            <Project
                title={{ text: 'iambalaam.com', href: 'https://iambalaam.com/' }}
                tagline="Front End"
                techUsed={[dae2css, reactJS]}
                frame={< WebsiteModel />}
            />
            <Project
                title={{ text: 'iambalaam.com', href: 'https://iambalaam.com/' }}
                tagline="Back End"
                techUsed={[]}
                frame={< WebsiteModel />}
            />
            <Project
                title={{ text: 'Amazon', href: '#' }}
                tagline="Prime Video"
                techUsed={[{ text: 'lots', href: '#' }]}
                frame={<Tick />}
            />
        </>
    )
};