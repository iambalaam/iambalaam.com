import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.module.scss';

import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import NotFound from './pages/404';

import GithubCorner from './components/GithubCorner';

const App = () =>
    <div>
        <Header />
        <main>
            <GithubCorner />
            <Switch>
                <Route exact path={['/', '/about']} component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/experience' component={Experience} />
                <Route render={(routeProps) => (<NotFound {...routeProps} />)} />
            </Switch>
        </main>
    </div>

export default App;