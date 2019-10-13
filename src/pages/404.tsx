import * as React from 'react';
import { RouteProps } from 'react-router'

const NotFound: React.SFC<RouteProps> = (props: RouteProps) => {
    const page = props.location
        ? props.location.pathname
        : 'this page'
    return (
        <main>
            <h1>Page not found</h1>
            <p>Apologies, I haven't made {page} yet!</p>
        </main>
    )
}

export default NotFound;