/** @jsx h */
import { h, Fragment } from 'preact';
import { useContext } from 'preact/hooks';


import Project from '../components/Project.tsx';
import { StatusCtx } from "../main.tsx";

const NotFound = ({ path }: { path: string }) => {
    const ctx = useContext(StatusCtx);
    ctx.status = 404;
    return (
        <Project
            title="404"
            techUsed={[]}
            frame={<></>}
            tagline="Page not found"
            description={`Apologies, I haven't made ${path} yet!`}
        />
    )
}

export default NotFound;