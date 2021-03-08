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
            description={<>
                <p>
                    Hi, I'm Guy.
                </p>
                <p>
                    I'm a software developer with 4 years experience, and also an avid Mathematician with a first class degree.
                </p>
                <p>
                    I love playing games and I skateboard a lot.
                </p>
            </>}
        />
    </>)
}