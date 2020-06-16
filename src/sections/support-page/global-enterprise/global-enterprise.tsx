import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { Card, CardProps } from '@bit/bit.base-ui.surfaces.card';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';

import { Button } from '../../../elements/button';
import { H3, H2 } from '../../../elements/heading';
import { Image } from '../../../elements/image';

import styles from './global-enterprise.module.scss';
import { Link } from '../../../elements/link';

type GlobalEnterpriseProps = {} & HTMLAttributes<HTMLElement>;

/**
 * Opening section for the Support offering page.
 * @name EcoSystem
 */
export function GlobalEnterprise({ className, ...rest }: GlobalEnterpriseProps) {
	const cards = [
		{
			iconUrl: 'support-page/support.svg',
			title: 'Response time SLA',
			text:
				"We'll respond quick and with effective solutions to make sure you never slow down.",
			alt: 'Bit - support time',
		},
		{
			iconUrl: 'support-page/bulb.svg',
			title: 'Expert consultation',
			text:
				"We'll review and consult on building a great front-end infrastructure and design-system.",
			alt: 'Bit - support consultation',
		},
		{
			iconUrl: 'support-page/team.svg',
			title: 'Team on-boarding',
			text: "We'll get your team up and running with Bit components from zero to hero.",
			alt: 'Bit - support team on-boarding',
		},
		{
			iconUrl: 'support-page/extensions.svg',
			title: 'Custom extensions, integrations',
			text:
				'We’ll design and provide the solutions to root Bit into your enterprise ecosystem.',
			alt: 'Bit - custom extensions and integrations',
		},
	];

	return (
		<div
			className={className}
			{...rest}
			data-bit-id="bit.evangelist/sections/support-page/global-enterprise"
		>
			<div className={classNames(styles.topSection, marginCenter, text.center)}>
				<H2 size={PossibleSizes.sm}>We support global enterprises</H2>
				<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
					Bit enterprise helps global teams to speed up and standardize modern web
					development. We’re here to help hands-on every step of the way.
				</Paragraph>

				<div className={styles.buttons}>
					<Link
						className={styles.link}
						href="/contact-sales?redirectUri=%2Fsupport-plans"
					>
						<Button className={styles.button} importance="cta">
							Contact sales
						</Button>
					</Link>

					<div className={styles.spacer} />
					<Link className={styles.link} href="/enterprise">
						<Button className={styles.button}>
							Bit enterprise
						</Button>
					</Link>
				</div>
			</div>
			<Grid colL={2} className={classNames(text.center, text.l.left, styles.mainGrid)}>
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
} & CardProps;

function GlobalEnterpriseCard({
	iconUrl,
	title,
	text,
	alt,
	className,
	...rest
}: GlobalEnterpriseCardProps) {
	return (
		<Card
			elevation="low"
			roundness="medium"
			className={classNames(styles.card, className)}
			{...rest}
		>
			<div className={styles.top}>
				<Image alt={alt} src={iconUrl} className={styles.image} />
				<H3 size={PossibleSizes.xs} className={styles.title}>
					{title}
				</H3>
			</div>
			<Paragraph>{text}</Paragraph>
		</Card>
	);
}
