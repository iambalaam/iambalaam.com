import * as React from 'react';

import { Tick } from '../components/Models';
import Project from '../components/Project';

export default function Experience() {
    return (<>
        <Project
            title="Amazon"
            tagline="Prime Video"
            href="#"
            techUsed={[{ text: 'lots', href: '#' }]}
            frame={<Tick />}
        />
    </>)
}