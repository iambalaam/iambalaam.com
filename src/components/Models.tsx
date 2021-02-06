import * as React from 'react';

import '../../models/required.module.scss';
import * as s from './Models.module.scss';

import { html as website } from '../../models/website.xhtml.js';
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

import { html as tick } from '../../models/tick.xhtml.js';


export function WebsiteModel() {
    return (
        <div className={s.webFrame}>
            <div className={s.spin} dangerouslySetInnerHTML={{ __html: website }}></div>
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

export function Tick() {
    return (
        <div className={s.tickFrame}>
            <div className={s.bob} dangerouslySetInnerHTML={{ __html: tick }}></div>
        </div>
    );
}

export default function Icosphere() {
    return <div className={s.icoFrame} dangerouslySetInnerHTML={{ __html: icosphere }}></div>
}