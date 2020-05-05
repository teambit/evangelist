import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Card } from '@bit/bit.base-ui.surfaces.card';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { MutedText, mutedText } from '@bit/bit.base-ui.text.muted-text';
import { TextSeparator } from '@bit/bit.base-ui.text.text-separator';
import { fullWidth, marginCenter } from '@bit/bit.base-ui.layout.align';

import { Button } from '../../../elements/button';
import { H4 } from '../../../elements/heading';

import styles from './sales-cta.module.scss';
import { margin } from '../spacing';
import { ContactForm } from './contact-form';
import { ContactValues } from './contact-values';

export type EnterpriseCtaProps = {
	onSubmitCta?: (values: ContactValues) => any | Promise<any>;
	onBookMeeting?: () => any;
} & HTMLAttributes<HTMLDivElement>;

export const SalesCta = (props: EnterpriseCtaProps) => (
	<div {...props} className={classNames(styles.particlesBg, props.className)}>
		<Card className={classNames(styles.formCard, marginCenter)}>
			<H4 size={PossibleSizes.xs}>Let’s talk </H4>
			<MutedText className={margin[30]}>
				Drop a message below and we’ll get back to you shortly.
			</MutedText>

			<ContactForm onSubmitMessage={props.onSubmitCta} />

			<TextSeparator className={classNames(mutedText, styles.margin, styles.separator)}>
				OR
			</TextSeparator>

			<Button importance="muted" onClick={props.onBookMeeting} className={fullWidth}>
				Book Intro
			</Button>
		</Card>

		<div className={styles.particlesContainer}>
			<div className={styles.redParticle} />
		</div>
	</div>
);
