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
                        I spent 4 years working on the platform and infrastructure team for the Amazon Prime Video website, working directly with a team of developers, designers and QAs.
                    </p>
                    <p>
                        The platform team supported other teams creating features for the Prime Video website.
                        We focused on:
                        <ul>
                            <li>Creating tooling and automation to speed up development</li>
                            <li>Improving the website's resilience against outages</li>
                            <li>Investigating and prototyping complex technical challenges</li>
                        </ul>
                    </p>
                    <hr />

                    <h3>Rendering Framework</h3>
                    <p>
                        Rendering is getting all the elements in a webpage ready to display.
                        Clientside rendering (CSR) is creating all the elements needed in the page and drawing them to the screen.
                        Serverside rendering (SSR) is generating a string of html to send to the customer, and this can be vital for performance.
                        {/* Google have written a great summary of <a href="https://developers.google.com/web/updates/2019/02/rendering-on-the-web">rendering on the web</a>. */}
                    </p>
                    <p>
                        I proposed a new architecture and led development of Prime Video website's rendering framework.
                    </p>
                    <p>
                        The new design aimed to unify a fragmented code base.
                        It allowed feature developers to write in a single code base that runs on both the client and the server.
                        We could now profile our code and our builds, finding bottle-necks for our customers and our developers.
                        This drastically reduced the CSS sent to customers, reducing the size by 47%.
                        Another optimisation from this approach reduced build times for our code from 45 minutes to 10.
                    </p>
                    <p>
                        I also worked to provide a range of in-built tooling, most notably:
                    <ul>
                            <li>
                                <a href="https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement" target="_blank">Progressive enhancement</a> and <a href="https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation" target="_blank">graceful degradation</a>.
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
                        The Prime Video InfoSec team took these training sessions to the Amazon internal security conference.
                    </p>

                    <hr />

                    <h3>Integration Testing</h3>
                    <p>
                        Selenium is a tool that runs integration testing on websites by controlling a real browser.
                        This allows our testing methods to be as close as possible to how a customer would use the website.
                    </p>
                    <p>
                        When I first joined the Prime Video website team, all of our Selenium integration testing was written in a Java framework using <a href={testNG.href}>TestNG</a>.
                        None of the website was written in Java.
                        The need to learn an additional language was an unnecessary burden for developers when testing their features.
                    </p>
                    <p>
                        After developers expressed an interest in writing these integration tests in JavaScript, I prototyped multiple Node.JS based Selenium frameworks and presented each to the team.
                    </p>
                    <hr />

                    <h3>Game Nights</h3>
                    <p>
                        I organised a set of social events to share my love of gaming with the Platform team, many of whom didn't game at all.
                        I picked <em>Murder</em> and <em>TTT</em> game modes from <a href="https://store.steampowered.com/app/4000/Garrys_Mod/" target="_blank">Garry's Mod</a> as well as <a href="https://store.steampowered.com/app/945360/Among_Us/" target="_blank">Among Us</a> as these social deduction games rely heavily on social interaction and teamwork.
                        Newer players ended up winning through deception and bluffing instead of mechanical skill.
                    </p>
                    <p>
                        These events grew to include the wider Web team and working from home in lockdown in 2020 made these even more important for team cohesion.
                    </p>
                    <p>
                        These game nights have been running weekly for over a year and despite having left the team, I still get an invite.
                    </p>
                </>
            }
        />
    </>)
}