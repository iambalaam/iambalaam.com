import * as React from 'react';
import Project from '../components/Project';
import { Email } from '../components/Models';

export default function Contact() {
    return (<>
        <Project
            title="Get in touch"
            id="contact"
            techUsed={[]}
            frame={<Email />}
            description={
                <p>
                    Let's work togther!
                    <br />
                    <a href="mailto:hi@iambalaam.com">hi@iambalaam.com</a>
                </p>
            }
        />
    </>)
}