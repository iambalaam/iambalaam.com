import * as React from 'react';
import Project from '../components/Project';
import { RewiredBot } from '../components/Models';

export default function Home() {
    return (
        <>
            <Project
                title="iambalaam.com"
                techUsed={['Cloudflare', 'GitHub Actions']}
                frame={<RewiredBot />}
            />
        </>
    )
};