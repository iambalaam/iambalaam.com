import * as React from 'react';
import { RouteComponentProps } from 'react-router'
import Project from '../components/Project';

const NotFound: React.SFC<RouteComponentProps> = (props: RouteComponentProps) => {
    const { staticContext, location } = props;
    if (staticContext) staticContext.statusCode = 404;
    const page = location
        ? location.pathname
        : 'this page'
    return (
        <Project
            title="404"
            techUsed={[]}
            frame={<></>}
            tagline="Page not found"
            description={`Apologies, I haven't made ${page} yet!`}
        />
    )
}

export default NotFound;