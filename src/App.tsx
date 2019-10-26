import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.module.scss';
import Home from './pages/Home';
import NotFound from './pages/404';

const App = () =>
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route render={(routeProps) => (<NotFound {...routeProps} />)} />
        </Switch>
    </main>

export default App;