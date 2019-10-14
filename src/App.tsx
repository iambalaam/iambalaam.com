import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './pages/404';

const Home = () => <h1>iambalaam.com</h1>

const App = () =>
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route render={(routeProps) => (<NotFound {...routeProps} />)} />
        </Switch>
    </main>

export default App;