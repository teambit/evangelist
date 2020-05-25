import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { Card } from '@bit/bit.base-ui.surfaces.card';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { centerColumn, textColumn } from '@bit/bit.base-ui.layout.page-frame';

import { Button } from '../../../elements/button';
import { H1, H5 } from '../../../elements/heading';
import { Image } from '../../../elements/image';

import styles from './global-enterprise.module.scss';

type GlobalEnterpriseProps = {
	/** handles 'book meeting' call to action */
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLElement>;

/**
 * Opening section for the Enterprise offering page.
 * @name EcoSystem
 */
export function GlobalEnterprise(props: GlobalEnterpriseProps) {
	const { onBookMeeting, ...rest } = props;

	const cards = [
		{
			iconUrl: 'support-page/support.svg',
			title: 'We respond fast.',
			text:
				'When you contact us, in any channel, our teams gets on the clock to respond with a solution as fast as possible. And, it’s not over until we see things through.',
			alt: '',
		},
		{
			iconUrl: 'support-page/bulb.svg',
			title: 'By core maintainers.',
			text:
				'With Bit, support is a core responsibility of every team building a product. Get support by the developers, architects and industry experts actually building your tools.',
			alt: '',
		},
		{
			iconUrl: 'support-page/team.svg',
			title: 'We see things through.',
			text:
				'Your problem is our problem. Our work is not done until your problem is solved, fixed and won’t happen again. Put together with expert-level support, we got you covered.',
			alt: '',
		},
		{
			iconUrl: 'support-page/extensions.svg',
			title: 'With extensive resources.',
			text:
				'We maintain an ever-growing rich [documentation](https://docs.bit.dev/) for every angle or use case of working with our technology. Always one click away.',
			alt: '',
		},
	];

	return (
		<div>
			<div className={classNames(styles.topSection, marginCenter, text.center)}>
				<H1 size={PossibleSizes.sm}>We support developers.</H1>
				<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
					We provide the support we would like to get as developers.
				</Paragraph>

				<div className={styles.buttons}>
					<a href="/contact-sales?redirectUri=%2Fenterprise">
						<Button className={styles.button} importance="cta">Contact Sales</Button>
					</a>
					
					<div className={styles.spacer} />
					<Button className={styles.button} importance="normal" onClick={props.onBookMeeting}>Book Intro</Button>
				</div>
			</div>
			<Grid
				colL={2}
				{...rest}
				data-bit-id="bit.evangelist/sections/enterprise-offering/hero"
				className={classNames(
					props.className,
					text.center,
					text.l.left,
					styles.mainGrid,
					centerColumn
				)}
			>
				{cards.map((card, index) => (
					<GlobalEnterpriseCard
						key={index}
						iconUrl={card.iconUrl}
						title={card.title}
						text={card.text}
						alt={card.alt}
					/>
				))}
			</Grid>
		</div>
	);
}

type GlobalEnterpriseCardProps = {
	iconUrl: string;
	alt: string;
	title?: string;
	text?: string;
	className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function GlobalEnterpriseCard({
	iconUrl,
	title,
	text,
	alt,
	className,
}: GlobalEnterpriseCardProps) {
	return (
		<Card elevation="high" className={classNames(className)}>
			<div className={styles.top}>
				<Image alt={alt} src={iconUrl} className={styles.image} />
				<H5 className={styles.title}>{title}</H5>
			</div>
			<Paragraph>{text}</Paragraph>
		</Card>
	);
}
