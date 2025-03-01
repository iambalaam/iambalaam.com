/** @jsx h */
import { h, Fragment } from 'preact';
import Project from '../components/Project.tsx';
// import { Email } from '../components/Models.tsx';

export default function Contact() {
    return (<>
        <Project
            title="Get in touch"
            id="contact"
            techUsed={[]}
            // frame={<Email />}
            frame={<></>}
            description={
                <p>
                    Let's work together!
                    <br />
                    <a href="mailto:hi@iambalaam.com">hi@iambalaam.com</a>
                </p>
            }
        />
    </>)
}