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
                    Hi, I'm Guy
                </p>
                <p>
                    I'm a software developer with 4 years experience, I have a first class Mathematics degree and I get a thrill out of geometry.
                </p>
                <p>
                    I like playing games
                </p>
                <p>
                    I also like skateboarding a lot.
                </p>
            </>}
        />
    </>)
}