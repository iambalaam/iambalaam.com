/** @jsx h */
import { h } from 'preact';

import { html as websiteInside } from '../../models/website-inside.xhtml.ts';
import { html as websiteOutside } from '../../models/website-outside.xhtml.ts';
import { html as icosphere } from '../../models/icosphere.xhtml.ts';

import { html as rewiredAntenna } from '../../models/rewired-antenna.xhtml.ts';
import { html as rewiredBody } from '../../models/rewired-body.xhtml.ts';
import { html as rewiredTops } from '../../models/rewired-tops.xhtml.ts';
import { html as rewiredSides } from '../../models/rewired-sides.xhtml.ts';
import { html as rewiredBottoms } from '../../models/rewired-bottoms.xhtml.ts';
import { html as rewiredEye } from '../../models/rewired-eye.xhtml.ts';
import { html as rewiredLens } from '../../models/rewired-lens.xhtml.ts';

import { html as pencilLead } from '../../models/pencil-lead.xhtml.ts';
import { html as pencilWood } from '../../models/pencil-wood.xhtml.ts';
import { html as pencilBlack } from '../../models/pencil-black.xhtml.ts';
import { html as pencilYellow } from '../../models/pencil-yellow.xhtml.ts';
import { html as pencilMetal } from '../../models/pencil-metal.xhtml.ts';
import { html as pencilRubber } from '../../models/pencil-rubber.xhtml.ts';

import { html as skateboardGriptape } from '../../models/skateboard-griptape.xhtml.ts';
import { html as skateboardWood } from '../../models/skateboard-wood.xhtml.ts';
import { html as skateboardGraphic } from '../../models/skateboard-graphic.xhtml.ts';
import { html as skateboardTrucks } from '../../models/skateboard-trucks.xhtml.ts';
import { html as skateboardWheels } from '../../models/skateboard-wheels.xhtml.ts';

import { html as emailBack } from '../../models/email-back.xhtml.ts';
import { html as emailBottom } from '../../models/email-bottom.xhtml.ts';
import { html as emailFlap } from '../../models/email-flap.xhtml.ts';
import { html as emailInside } from '../../models/email-inside.xhtml.ts';
import { html as emailOutside } from '../../models/email-outside.xhtml.ts';
import { html as emailTriangles } from '../../models/email-triangles.xhtml.ts';

import { html as tickFront } from '../../models/tick-front.xhtml.ts';
import { html as tickSides } from '../../models/tick-sides.xhtml.ts';


export function WebsiteInside() {
    return (
        <div className={'webFrame'}>
            <div className={'spin'} dangerouslySetInnerHTML={{ __html: websiteInside }}></div>
        </div>
    );
}

export function WebsiteOutside() {
    return (
        <div className={'webFrame'}>
            <div className={'spin'} dangerouslySetInnerHTML={{ __html: websiteOutside }}></div>
        </div>
    );
}

export function RewiredBot() {
    return (
        <div className={'rewiredFrame'}>
            <div className={'spin'} dangerouslySetInnerHTML={{ __html: rewiredAntenna + rewiredBody + rewiredTops + rewiredSides + rewiredBottoms + rewiredEye + rewiredLens }}></div>
        </div>
    );
}

export function Pencil() {
    return (
        <div className={'pencilFrame'}>
            <div className={'tiltAndSpin'} dangerouslySetInnerHTML={{ __html: pencilLead + pencilWood + pencilBlack + pencilYellow + pencilMetal + pencilRubber }}></div>
        </div>
    );
}

export function Skateboard() {
    return (
        <div className={'skateboardFrame'}>
            <div className={'kickflip'} dangerouslySetInnerHTML={{ __html: skateboardGriptape + skateboardWood + skateboardGraphic + skateboardTrucks + skateboardWheels }}></div>
        </div>
    )
}

export function Tick() {
    return (
        <div className={'tickFrame'}>
            <div className={'bob'} dangerouslySetInnerHTML={{ __html: tickFront + tickSides }}></div>
        </div>
    );
}

export function Email() {
    return (
        <div className={'emailFrame'}>
            <div className={'offAngle'}>
                <div className={'openClose'} dangerouslySetInnerHTML={{ __html: emailFlap }}></div>
                <div className={'envelope'} dangerouslySetInnerHTML={{ __html: emailBack + emailBottom + emailInside + emailOutside + emailTriangles }}></div>
                <div className={'letter'}>hi</div>
            </div>
        </div>
    );
}

export default function Icosphere() {
    return <div className={'icoFrame'} dangerouslySetInnerHTML={{ __html: icosphere }}></div>
}