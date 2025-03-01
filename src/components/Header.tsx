/** @jsx h */
import { h } from "preact";
import GithubCorner from "./GithubCorner.tsx";

export default function Header({ path }: { path: string }) {
    return <header className={'header'}>
        <GithubCorner />
        <div className={'top'}>
            <span className={'static'}>
                <span className={'me'}>Guy Balaam</span>
                <span className={'typeof'}>:&nbsp;</span>
            </span>
            <span className={'typing'}>
                <span className={'type'}>Software Developer</span>
                <span className={'semicolon'}>;</span>
            </span>
        </div>
        <nav>
            {["About", "Experience", "Projects", "Contact"].map((Route) => {
                const route = Route.toLowerCase();
                const target = "/" + route;
                return (path === target)
                    ? <span key={Route} className={'selected'}>{Route}</span>
                    : <a key={Route} href={target}>{Route}</a>;
            })}
        </nav>
    </header>
}
