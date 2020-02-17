import React, { ReactNode } from 'react';
import classnames from 'classnames';
import { PrimaryButton, ButtonProps } from '../../base/primary-button';

import styles from './cta-button.module.scss';


export function CtaButton({ className, ...rest }: ButtonProps) {
	return <PrimaryButton className={classnames(styles.ctaButton, className)} data-bit-id="ctaButton" {...rest} />;
}
