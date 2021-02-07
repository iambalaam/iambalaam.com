import * as React from 'react';
import Project from '../components/Project';
import { Pencil, RewiredBot, Tick } from '../components/Models';

import RewiredLogo from '../../static/rewired-logo.jpg';
import RewiredFallOff from '../../static/rewired-fall-off.gif';

import Cat from '../../static/photoshop-js-cat.gif';
import Lightsaber from '../../static/lightsaber.gif';

export default function Home() {
    return (
        <>
            <h1>Projects</h1>
            <Project
                title="Rewired"
                techUsed={['Unity', 'Itch.io']}
                frame={<RewiredBot />}
                images={[RewiredLogo, RewiredFallOff]}
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