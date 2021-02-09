import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom'

import * as s from './Header.module.scss';

export default function Header() {
    const path: string = useLocation().pathname;
    return (<>
        <header className={s.header}> Guy Balaam - Software Developer </header>
        <nav>{
            ['About', 'Projects', 'Experience', 'Contact'].map((Route) => {
                const route = Route.toLowerCase();
                const target = '/' + route;
                return (path === target)
                    ? <span>{Route}</span>
                    : <NavLink to={target}>{Route}</NavLink>
            })
        }</nav>
    </>);
}