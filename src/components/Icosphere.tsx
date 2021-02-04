import * as React from 'react';
import { html } from '../../models/icosphere.xhtml.js';
import './icosphere.module.scss';
import '../../models/required.module.scss';


export default function Icosphere() {
    return (
        <div id="ico-frame" dangerouslySetInnerHTML={{ __html: html }}></div>
    )
}