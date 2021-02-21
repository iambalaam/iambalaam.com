import * as React from 'react';
import './Debug.module.scss';

export function DebugCheckbox() {
    return <input id="debug-input" type="checkbox" />
}

export function DebugSwitch() {
    return <label id="debug-label" htmlFor="debug-input"></label>
}