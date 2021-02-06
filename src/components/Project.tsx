import * as React from 'react';
import * as s from './Project.module.scss';

export interface ProjectProps {
    title: string,
    techUsed: string[],
    frame: JSX.Element
}

export default function Project(p: ProjectProps) {
    return (
        <div>
            <h2>{p.title}</h2>
            {p.techUsed.map((t) => <span className={s.techUsed} key={t}>{t}</span>)}
            <hr />
            {p.frame}
        </div>
    );
}