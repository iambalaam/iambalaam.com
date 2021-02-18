import * as React from 'react';
import { Skateboard } from '../components/Models';

import Project from '../components/Project';

export default function About() {
    return (<>
        <Project
            title="About me"
            id="about"
            techUsed={[]}
            frame={<Skateboard />}
        />
    </>)
}