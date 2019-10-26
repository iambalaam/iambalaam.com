import * as React from 'react';
import * as styles from './Home.module.scss';

export default () =>
    <>
        <h1>iambalaam.com</h1>
        <p>Latest build commit: <span className={styles.red}>{BUILD_COMMIT}</span></p>
    </>