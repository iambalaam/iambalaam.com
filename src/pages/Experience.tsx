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
                <>
                    <h3>Web Team</h3>
                    <p>
                        I was part of the Prime Video website team of 50 developers, designers, QAs and managers.
                        The Team is split up into subteams of around 10 working on features, as well as a separate platform and infrastructure team that I was a part of.
                    </p>
                    <p>
                        It was great to work with such a large team towards a shared goal.
                        We all brought our own strengths and specialisms to the table, allowing everyone to learn.
                        Sometimes the needs of feature teams and the platform team were at odds; the different viewpoints and the comprimises we made lead to a better overall product and experience for the customer.
                    </p>
                    <hr />

                    <h3>Rendering Framework</h3>
                    <p>
                        Rendering is getting all the elements in a webpage ready.
                        Clientside rendering (CSR) is creating all the elements needed in the page and drawing them to the screen.
                        Serverside rendering (SSR) is generating a string of html to send to the customer and can be vital for performance.
                        {/* Google have written a great summary of <a href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web">rendering on the web</a>. */}
                    </p>
                    <p>
                        I proposed a new artitecture and lead development of Prime Video website's rendering framework.
                        The new design aimed to unify a fragmented code base.
                    </p>
                    <p>
                        It allowed feature developers to write in a single code base that runs on the client and the server.
                        We could now profile our code and our builds, finding bottle-necks for our customers and our developers.
                        One investigation found we could drastically reduce the CSS sent to customers, reducing the size by 47%.
                        Another optimisation from this approach reduced build times for our code from 45 minutes to 10.
                    </p>
                    <p>
                        I also worked to provide a range of in-built tooling, most notably:
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
                    <hr />

                    <h3>Security Training</h3>
                    <p>
                        I worked with the Prime Video InfoSec team to create a series of security training sessions focused on cross site scripting (XSS).
                        These took the form of interactive, hands-on workshop sessions for the whole team.
                    </p>
                    <p>
                        I built a dummy version of the website and included many XSS vulnerabilities for the team to find.
                        They would then create exploits to demonstrate how our customers could be attacked.
                    </p>
                    <p>
                        I learnt a lot from the research involved in creating these sessions, and discovered some XSS vulnerabilities in the live website.
                        The workshop Prime Video InfoSec team took these workshops to the Amazon internal security conference.
                    </p>

                    <hr />

                    <h3>Integration Testing</h3>
                    <p>
                        Selenium is a tool that allows us to run integration testing on websites by controlling a real browser.
                        This allows our testing methods to be as close to how a customer would use our website as possible.
                    </p>
                    <p>
                        When I first joined the Prime Video website team, all our selenium integration testing was written in a Java framework using <a href={testNG.href}>TestNG</a>.
                        None of the website was written in Java, so this was an additional burden to learn, and was a obsticle for developers to thoroughly test their features.
                    </p>
                    <p>
                        After developers expressed an interest in writing these integration tests in JavaScript, I prototyped multiple Node.JS based selenium frameworks and presented each the team.
                    </p>
                    <hr />

                    <h3>Game Nights</h3>
                    <p>
                        To organise a social event for the team, I sought to expense a copy of <a href="https://store.steampowered.com/app/4000/Garrys_Mod/">Garry's Mod</a> for every member of the platform team.
                        (Thanks Jeff Bezos!)
                    </p>
                    <p>
                        This went down so well with platform team that we turned these into a regular occurence and got the wider web team to participate.
                    </p>
                    <p>
                        These game nights are still going strong, and I stil get a +1 invite.
                    </p>
                </>
            }
        />
    </>)
}