/** @jsx h */
import { h, Fragment, ComponentChildren } from 'preact';
import { Link } from '../util/types.ts';

export interface ProjectProps {
    title: string,
    tagline?: ComponentChildren;
    href?: string;
    id?: string;
    techUsed: Link[],
    frame: ComponentChildren,
    images?: string[]
    description?: ComponentChildren
}

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

export default function Project(p: ProjectProps) {
    const header = p.href
        ? (
            <a href={p.href} target="_blank">
                <h2 className={'title'}>{p.title}</h2>
                {p.tagline && <h3 className={'tagline'}>{p.tagline}</h3>}
            </a>
        )
        : (
            <>
                <h2 className={'title'}>{p.title}</h2>
                {p.tagline && <h3 className={'tagline'}>{p.tagline}</h3>}
            </>
        )

    return (
        <div id={p.id} className={'project'}>
            {header}
            <hr />
            <div className={'techList'}>
                {p.techUsed.map((link) => <a className={'techUsed'} key={link.href} href={link.href}>{link.text}</a>)}
            </div>
            <div className={'container'}>
                <div className={'flex'}>
                    <div className={'description'}>{p.description || <p>{lorem}</p>}</div>
                    {p.images && <div className={'images'}>{p.images.map((imgSrc, i) => <div className={`image${i}`} key={imgSrc}><img src={imgSrc} loading="lazy" /></div>)}</div>}
                </div>
                <div className={'frame3d'}>
                    {p.frame}
                </div>
            </div>
        </div >
    );
}