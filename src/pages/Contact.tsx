import * as React from 'react';
import Project from '../components/Project';
import { WebsiteModel } from '../components/Models';

export default function Contact() {
    return (<>
        <Project
            title="Get in touch"
            techUsed={[]}
            frame={<WebsiteModel />}
        />
    </>)
}