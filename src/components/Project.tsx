import * as React from 'react';
import * as s from './Project.module.scss';
import { Link } from '../util/types';

export interface ProjectProps {
    href: string;
    title: string,
    tagline?: React.ReactChild;
    techUsed: Link[],
    frame: JSX.Element,
    images?: string[]
    description?: React.ReactChild
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function Project(p: ProjectProps) {
    return (
        <div className={s.project}>
            <a href={p.href}>
                <h2 className={s.title}>{p.title}</h2>
                {p.tagline && <h3 className={s.tagline}>{p.tagline}</h3>}
            </a>
            <hr />
            <div className={s.techList}>
                {p.techUsed.map((link) => <a className={s.techUsed} key={link.href} href={link.href}>{link.text}</a>)}
            </div>
            <div className={s.container}>
                {p.images && p.images.map((imgSrc, i) => <div className={`image${i}`} key={imgSrc}><img src={imgSrc} /></div>)}
                <div className={s.description}>{p.description || <p>{lorem}</p>}</div>
                <div className={s.frame3d}>
                    {p.frame}
                </div>
            </div>
        </div >
    );
}