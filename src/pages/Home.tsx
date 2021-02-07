import * as React from 'react';
import Project from '../components/Project';
import { Pencil, RewiredBot, Tick } from '../components/Models';

import Cat from '../../static/photoshop-js-cat.gif';

export default function Home() {
    return (
        <>
            <h1>Projects</h1>
            <Project
                title="Rewired"
                techUsed={['Unity', 'Itch.io']}
                frame={<RewiredBot />}
            />
            <Project
                title="photoshop-js"
                techUsed={['vanillaJS']}
                frame={<Pencil />}
                images={[Cat, Cat]}
            />
            <Project
                title="Amazon"
                techUsed={['lots']}
                frame={<Tick />}
            />
        </>
    )
};