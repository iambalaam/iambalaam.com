import * as React from 'react';

import '../../models/required.module.scss';
import * as s from './Models.module.scss';

import { html as websiteInside } from '../../models/website-inside.xhtml.js';
import { html as websiteOutside } from '../../models/website-outside.xhtml.js';
import { html as icosphere } from '../../models/icosphere.xhtml.js';

import { html as rewiredAntenna } from '../../models/rewired-antenna.xhtml.js';
import { html as rewiredBody } from '../../models/rewired-body.xhtml.js';
import { html as rewiredTops } from '../../models/rewired-tops.xhtml.js';
import { html as rewiredSides } from '../../models/rewired-sides.xhtml.js';
import { html as rewiredBottoms } from '../../models/rewired-bottoms.xhtml.js';
import { html as rewiredEye } from '../../models/rewired-eye.xhtml.js';
import { html as rewiredLens } from '../../models/rewired-lens.xhtml.js';

import { html as pencilLead } from '../../models/pencil-lead.xhtml.js';
import { html as pencilWood } from '../../models/pencil-wood.xhtml.js';
import { html as pencilBlack } from '../../models/pencil-black.xhtml.js';
import { html as pencilYellow } from '../../models/pencil-yellow.xhtml.js';
import { html as pencilMetal } from '../../models/pencil-metal.xhtml.js';
import { html as pencilRubber } from '../../models/pencil-rubber.xhtml.js';

import { html as skateboardGriptape } from '../../models/skateboard-griptape.xhtml.js';
import { html as skateboardWood } from '../../models/skateboard-wood.xhtml.js';
import { html as skateboardGraphic } from '../../models/skateboard-graphic.xhtml.js';
import { html as skateboardTrucks } from '../../models/skateboard-trucks.xhtml.js';
import { html as skateboardWheels } from '../../models/skateboard-wheels.xhtml.js';

import { html as emailBack } from '../../models/email-back.xhtml.js';
import { html as emailBottom } from '../../models/email-bottom.xhtml.js';
import { html as emailFlap } from '../../models/email-flap.xhtml.js';
import { html as emailInside } from '../../models/email-inside.xhtml.js';
import { html as emailOutside } from '../../models/email-outside.xhtml.js';
import { html as emailTriangles } from '../../models/email-triangles.xhtml.js';

import { html as tickFront } from '../../models/tick-front.xhtml.js';
import { html as tickSides } from '../../models/tick-sides.xhtml.js';


export function WebsiteInside() {
    return (
        <div className={s.webFrame}>
            <div className={s.spin} dangerouslySetInnerHTML={{ __html: websiteInside }}></div>
        </div>
    );
}

export function WebsiteOutside() {
    return (
        <div className={s.webFrame}>
            <div className={s.spin} dangerouslySetInnerHTML={{ __html: websiteOutside }}></div>
        </div>
    );
}

export function RewiredBot() {
    return (
        <div className={s.rewiredFrame}>
            <div className={s.spin} dangerouslySetInnerHTML={{ __html: rewiredAntenna + rewiredBody + rewiredTops + rewiredSides + rewiredBottoms + rewiredEye + rewiredLens }}></div>
        </div>
    );
}

export function Pencil() {
    return (
        <div className={s.pencilFrame}>
            <div className={s.tiltAndSpin} dangerouslySetInnerHTML={{ __html: pencilLead + pencilWood + pencilBlack + pencilYellow + pencilMetal + pencilRubber }}></div>
        </div>
    );
}

export function Skateboard() {
    return (
        <div className={s.skateboardFrame}>
            <div className={s.kickflip} dangerouslySetInnerHTML={{ __html: skateboardGriptape + skateboardWood + skateboardGraphic + skateboardTrucks + skateboardWheels }}></div>
        </div>
    )
}

export function Tick() {
    return (
        <div className={s.tickFrame}>
            <div className={s.bob} dangerouslySetInnerHTML={{ __html: tickFront + tickSides }}></div>
        </div>
    );
}

export function Email() {
    return (
        <div className={s.emailFrame}>
            <div className={s.offAngle}>
                {/* <div className={s.flapOffset}> */}
                <div className={s.openClose} dangerouslySetInnerHTML={{ __html: emailFlap }}></div>
                {/* </div> */}
                <div className={s.envelope} dangerouslySetInnerHTML={{ __html: emailBack + emailBottom + emailInside + emailOutside + emailTriangles }}></div>
                <div className={s.letter}>hi</div>
            </div>
        </div>
    );
}

export default function Icosphere() {
    return <div className={s.icoFrame} dangerouslySetInnerHTML={{ __html: icosphere }}></div>
}