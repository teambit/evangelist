import React from 'react';
import classNames from 'classnames';

import styles from './cta-section.module.scss';

import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { CtaButton } from '../../components/concrete/cta-button';
import { Paragraph } from '../../components/base/paragraph';
import { Grid } from '../../components/layout/grid-component';
import { justifyItems, alignItems, text } from '../../components/layout/align';
import { PrimaryLink } from '../../components/concrete/community-links/primary-link';
import { EvaButton } from '../../components/concrete/eva-button';

//don't abuse!! fork this component if you need to much customizations
type CtaProps = {
	title?: string;
	buttonText?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function CtaSection(props: CtaProps) {
	const { ...rest } = props;

	return (
		<Grid
			{...rest}
			colSm={2}
			className={classNames(
				props.className,
				styles.ctaSection,
				justifyItems.center,
				alignItems.center,
				text.center,
				text.sm.left
			)}
			data-bit-id="sections/cta"
		>
			<div>
				<H2 size={PossibleSizes.xs}>Ready to try Bit?</H2>
				<Paragraph size={PossibleSizes.lg}>
					Empower your team to build faster together.
				</Paragraph>
			</div>
			<PrimaryLink href="https://bit.dev/signup">
				<EvaButton importance="cta">Start for free</EvaButton>
			</PrimaryLink>
		</Grid>
	);
}
