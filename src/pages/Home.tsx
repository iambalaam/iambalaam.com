import * as React from 'react';
import Project from '../components/Project';
import { Pencil, RewiredBot, Tick } from '../components/Models';

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
            />
            <Project
                title="Amazon"
                techUsed={['lots']}
                frame={<Tick />}
            />
        </>
    )
};