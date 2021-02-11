import * as React from 'react';
import { Skateboard } from '../components/Models';

import Project from '../components/Project';

export default function About() {
    return (<>
        <Project
            title={{ text: 'About me', href: '#' }}
            techUsed={[]}
            frame={<Skateboard />}
        />
    </>)
}