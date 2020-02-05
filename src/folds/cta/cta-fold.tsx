import React from 'react';
import { centerColumn } from '../../components/layout/grid';
import classnames from 'classnames';

import styles from './cta-fold.module.scss';
import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { CtaButton } from '../../components/concrete/cta-button';

export function CtaFold(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classnames(centerColumn, styles.ctaFold, props.className)}>
			<H2 size={PossibleSizes.sm}>Ready to try Bit?</H2>
			Add your first component in minutes.
			<CtaButton>Get Started for free</CtaButton>
		</div>
	);
}
