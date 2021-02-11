import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.module.scss';

import Header from './components/Header';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Contact from './pages/Contact';
import NotFound from './pages/404';

const App = () =>
    <div>
        <Header />
        <main>
            <Switch>
                <Redirect exact path="/" to="/about" />
                <Route exact path='/about' component={About} />
                <Route exact path='/projects' component={Projects} />
                <Route exact path='/experience' component={Experience} />
                <Route exact path='/contact' component={Contact} />
                <Route render={(routeProps) => (<NotFound {...routeProps} />)} />
            </Switch>
        </main>
    </div>

export default App;