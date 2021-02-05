import * as React from 'react';

export interface ProjectProps {
    title: string,
    techUsed: string[],
    frame: JSX.Element
}

export default function Project(p: ProjectProps) {
    return (
        <div>
            <h2>{p.title}</h2>
            {p.techUsed.map((t) => <span key={t}>{t}</span>)}
            <hr />
            {p.frame}
        </div>
    );
}