import * as React from 'react';
import { StaticRouter } from 'react-router-dom';

const H1: React.ComponentType = ({ children }) => <h1>{children}</h1>;
const App = ({ event }: { event: FetchEvent }) => {

    return (
        <main>
            <StaticRouter location={event.request.url}>
                <H1>Hello Router!</H1>
                <p>{event.request.url}</p>
            </StaticRouter>
        </main>
    );
};

export default App;