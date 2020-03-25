import React from 'react';
import classNames from 'classnames';

import styles from './talk-to-experts.module.scss';

import { PossibleSizes } from '@bit/bit.base.theme.sizes';
import { Paragraph } from '@bit/bit.base.atoms.paragraph';
import { justifyItems, alignItems, text, marginCenter } from '@bit/bit.base.layout.align';

import { H2 } from '../../components/concrete/heading';
import { PrimaryLink } from '../../components/concrete/primary-link';
import { EvaButton } from '../../components/concrete/eva-button';

/**
 * @name TalkToExperts
 * @description
 * A static section, calling users to contact us.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function TalkToExperts(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(
				props.className,
				styles.talkToExperts,
				justifyItems.center,
				alignItems.center,
				text.center,
				text.sm.left
			)}
			data-bit-id="bit.evangelist/sections/talk-to-experts"
		>
			<div className={marginCenter}>
				<H2 size={PossibleSizes.xs}>
					Exploring component reuse? Talk to world experts
				</H2>
				<Paragraph size={PossibleSizes.xl}>
					We help the best teams reuse components together. Get in touch with our
					expert architects to find the best solution for your team!
				</Paragraph>
			</div>
			<div>
				<PrimaryLink href="https://bit.dev/contact-sales">
					<EvaButton importance="cta">Get in touch</EvaButton>
				</PrimaryLink>
			</div>
		</div>
	);
}
