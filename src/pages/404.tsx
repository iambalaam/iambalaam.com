import * as React from 'react';
import { RouteComponentProps } from 'react-router'

const NotFound: React.SFC<RouteComponentProps> = (props: RouteComponentProps) => {
    const { staticContext, location } = props;
    if (staticContext) staticContext.statusCode = 404;
    const page = location
        ? location.pathname
        : 'this page'
    return (
        <main>
            <h1>Page not found</h1>
            <p>Apologies, I haven't made {page} yet!</p>
        </main>
    )
}

export default NotFound;