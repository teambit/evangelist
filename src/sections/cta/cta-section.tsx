import React from 'react';
import classNames from 'classnames';

import styles from './cta-section.module.scss';

import { H2 } from '../../elements/heading';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { justifyItems, alignItems, text } from '@bit/bit.base-ui.layout.align';
import { PrimaryLink } from '../../marketing/community-links/community-link';
import { Button } from '../../elements/button';

type CtaProps = React.HTMLAttributes<HTMLDivElement>;

/**
 * @name CtaSection
 * @description
 * Best section yet! Encourage the user to signup with a big and responsive call to action.
 * Assumes the consuming component to supply className with width and other styles.
 */

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
			data-bit-id="bit.evangelist/sections/cta"
		>
			<div>
				<H2 size={PossibleSizes.xs}>Ready to try Bit?</H2>
				<Paragraph size={PossibleSizes.lg}>
					Empower your team to build faster together.
				</Paragraph>
			</div>
			<PrimaryLink href="https://bit.dev/signup">
				<Button importance="cta">Start for free</Button>
			</PrimaryLink>
		</Grid>
	);
}
