/** @jsx h */
import { h } from 'preact';

import Header from './components/Header.tsx';
import About from './pages/About.tsx';
import Projects from './pages/Projects.tsx';
import Experience from './pages/Experience.tsx';
import Contact from './pages/Contact.tsx';
import NotFound from './pages/404.tsx';

const App = ({ path }: { path: string }) =>
    <div id="app">
        <Header path={path} />
        <main>
            {{
                '/': <About />,
                '/about': <About />,
                '/experience': <Experience />,
                '/projects': <Projects />,
                '/contact': <Contact />,
            }[path] ?? <NotFound path={path} />}
        </main>
    </div>

export default App;