import * as React from 'react';

import { Tick } from '../components/Models';
import Project from '../components/Project';

export default function Experience() {
    return (<>
        <Project
            title={{ text: 'Amazon', href: '#' }}
            tagline="Prime Video"
            techUsed={[{ text: 'lots', href: '#' }]}
            frame={<Tick />}
        />
    </>)
}