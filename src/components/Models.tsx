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

export default function Icosphere() {
    return <div className={s.icoFrame} dangerouslySetInnerHTML={{ __html: icosphere }}></div>
}