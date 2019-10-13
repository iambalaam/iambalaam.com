import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/404';

const App = () =>
    <main>
        <Switch>
            <Route render={(routeProps) => (<NotFound {...routeProps} />)} />
        </Switch>
    </main>

export default App;