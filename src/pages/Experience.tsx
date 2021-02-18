import * as React from 'react';

import { Tick } from '../components/Models';
import Project from '../components/Project';
import { Link } from '../util/types';

const reactJS: Link = { text: 'React', href: 'https://reactjs.org/' };
const express: Link = { text: 'Express', href: 'https://expressjs.com/' };
const nodeJS: Link = { text: 'Node.js', href: 'https://nodejs.org/' };
const selenium: Link = { text: 'Selenium', href: 'https://www.selenium.dev/' };
const testNG: Link = { text: 'TestNG', href: 'https://testng.org/doc/' };

export default function Experience() {
    return (<>
        <Project
            title="Amazon"
            id="amazon"
            tagline="Prime Video"
            href="https://www.amazon.co.uk/video"
            techUsed={[nodeJS, reactJS, express, selenium, testNG]}
            frame={<Tick />}
            description={
                <p>
                    I designed and lead development of Prime Video website's rendering framework. 
                    
                    It provides the team of 50 with a range of tools, most notably: 
                    <ul>
                        <li>
                            <a href="https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement">Progressive enhancement</a> and <a href="https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation">graceful degredation</a>.
                            All pages are serverside rendered and are fully functional without JavaScript (<em>just like this site</em>).
                        </li>
                        <li>
                            Monitoring and error reporting on the server and in the browser.
                        </li>
                        <li>
                            Development environment with the ability to work with live data, an essential tool for quick prototyping.
                        </li>
                    </ul>
                </p>
            }
        />
    </>)
}