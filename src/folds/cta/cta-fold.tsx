import React from 'react';
import classnames from 'classnames';

import styles from './cta-fold.module.scss';
import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { CtaButton } from '../../components/concrete/cta-button';
import { Paragraph } from '../../components/base/paragraph';

export function CtaFold(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classnames(styles.ctaFold, props.className)}>
			<div>
				<H2 size={PossibleSizes.xs}>Ready to try Bit?</H2>
				<Paragraph size={PossibleSizes.xl}>Add your first component in minutes.</Paragraph>
			</div>
			<CtaButton>Get Started for free</CtaButton>
		</div>
	);
}
