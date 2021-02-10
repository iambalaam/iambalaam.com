import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom'

import * as s from './Header.module.scss';

export default function Header() {
    const path: string = useLocation().pathname;
    return (<>
        <header className={s.header}>
            <span className={s.static}>
                <span className={s.me}>Guy Balaam</span>
                <span className={s.typeof}>:&nbsp;</span>
            </span>
            <span className={s.typing}>
                <span className={s.type}>Software Developer</span>
                <span className={s.semicolon}>;</span>
            </span>
        </header>
        <nav>{
            ['About', 'Projects', 'Experience', 'Contact'].map((Route) => {
                const route = Route.toLowerCase();
                const target = '/' + route;
                return (path === target)
                    ? <span className={s.selected}>{Route}</span>
                    : <NavLink to={target}>{Route}</NavLink>
            })
        }</nav>
    </>);
}