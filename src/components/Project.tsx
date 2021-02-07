import * as React from 'react';
import * as s from './Project.module.scss';

export interface ProjectProps {
    title: string,
    techUsed: string[],
    frame: JSX.Element,
    images?: string[]
}

export default function Project(p: ProjectProps) {
    return (
        <div>
            <h2>{p.title}</h2>
            {p.techUsed.map((t) => <span className={s.techUsed} key={t}>{t}</span>)}
            <hr />
            <div className={s.container}>
                <div className={s.frame3d}>
                    {p.frame}
                </div>
                {p.images && p.images.map((imgSrc, i) => <div className={`image${i}`}><img key={imgSrc} src={imgSrc} /></div>)}
                <p className={s.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    );
}