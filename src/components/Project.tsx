import * as React from 'react';
import * as s from './Project.module.scss';
import { Link } from '../util/types';

export interface ProjectProps {
    title: Link,
    tagline?: string;
    techUsed: Link[],
    frame: JSX.Element,
    images?: string[]
    description?: React.ReactChild
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function Project(p: ProjectProps) {
    return (
        <div>
            <h2><a href={p.title.href}>{p.title.text}</a></h2>
            {p.tagline && <h3><a href={p.title.href}>{p.tagline}</a></h3>}
            {p.techUsed.map((link) => <a className={s.techUsed} key={link.href} href={link.href}>{link.text}</a>)}
            <hr />
            <div className={s.container}>
                <div className={s.frame3d}>
                    {p.frame}
                </div>
                {p.images && p.images.map((imgSrc, i) => <div className={`image${i}`} key={imgSrc}><img src={imgSrc} /></div>)}
                <div className={s.description}>{p.description || <p>{lorem}</p>}</div>
            </div>
        </div>
    );
}