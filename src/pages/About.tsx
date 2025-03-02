/** @jsx h */
import { h, Fragment } from 'preact';
import { Skateboard } from '../components/Models.tsx';

import Project from '../components/Project.tsx';

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
                    I'm a software developer with 6 years experience, and also an avid Mathematician with a first class degree.
                </p>
                <p>
                    Passionate about games and I skateboard a lot.
                </p>
            </>}
        />
    </>)
}
