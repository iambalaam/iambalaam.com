import * as React from 'react';

import '../../models/required.module.scss';
import * as s from './Models.module.scss';

import { html as website } from '../../models/website.xhtml.js';
import { html as icosphere } from '../../models/icosphere.xhtml.js';


export function WebsiteModel() {
    return <div className={s.webFrame} dangerouslySetInnerHTML={{ __html: website }}></div>;
}

export default function Icosphere() {
    return <div className={s.icoFrame} dangerouslySetInnerHTML={{ __html: icosphere }}></div>
}