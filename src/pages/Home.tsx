import * as React from 'react';
import Project from '../components/Project';
import { Pencil, RewiredBot, Tick, WebsiteModel } from '../components/Models';

import RewiredLogo from '../../static/rewired-logo.jpg';
import RewiredFallOff from '../../static/rewired-fall-off.gif';

import Jousting from '../../static/jousting.gif';

import Cat from '../../static/photoshop-js-cat.gif';
import Lightsaber from '../../static/lightsaber.gif';

export default function Home() {
    return (
        <>
            <h1>Projects</h1>
            <Project
                title="GMTK GameJam 2020: Rewired"
                techUsed={['Unity', 'Itch.io']}
                frame={<RewiredBot />}
                images={[RewiredLogo, RewiredFallOff]}
            />
            <Project
                title="GMTK GameJam 2019: Jousting"
                techUsed={['P5.js', 'Itch.io']}
                frame={<WebsiteModel />}
                images={[Jousting]}
            />
            <Project
                title="photoshop-js"
                techUsed={['vanillaJS']}
                frame={<Pencil />}
                images={[Cat, Lightsaber]}
            />
            <Project
                title="Amazon"
                techUsed={['lots']}
                frame={<Tick />}
            />
        </>
    )
};