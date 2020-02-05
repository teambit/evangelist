import React, { ReactNode } from 'react';
import {PrimaryButton} from '../../base/primary-button';

import styles from './cta-button.module.scss';

type CtaButtonProps = {
    children: ReactNode;
    className: string;
}
export function CtaButton({className, ...rest}:CtaButtonProps) {
    return <PrimaryButton className={styles.ctaButton} {...rest} />
}