import React from 'react';
import classNames from 'classnames';

import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { CtaButton } from '../../components/concrete/cta-button';
import { Paragraph } from '../../components/base/paragraph';
import { Grid } from '../../components/layout/grid-component';
import { justifyItems, alignItems } from '../../components/layout/align';

export function CtaSection(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<Grid
			{...props}
			colSm={2}
			className={classNames(props.className, justifyItems.center, alignItems.center)}
			data-bit-id="ctaSection"
		>
			<div>
				<H2 size={PossibleSizes.xs}>Ready to try Bit?</H2>
				<Paragraph size={PossibleSizes.xl}>
					Add your first component in minutes.
				</Paragraph>
			</div>
			<CtaButton>Get Started for free</CtaButton>
		</Grid>
	);
}
