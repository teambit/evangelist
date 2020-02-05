import React from 'react';
import { singleColumn } from '../../components/layout/grid';
import classnames from 'classnames';

import styles from './cta-fold.module.scss';
import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../themes/sizes';
import { CtaButton } from '../../components/concrete/cta-button';

export function CtaFold() {
	return (
		<div className={classnames(singleColumn, styles.ctaFold)}>
			<H2 size={PossibleSizes.sm}>Ready to try Bit?</H2>
			Add your first component in minutes.
			<CtaButton>Get Started for free</CtaButton>
		</div>
	);
}
