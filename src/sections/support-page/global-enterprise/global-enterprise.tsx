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
import { Link } from '../../../elements/link';

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
			title: 'Response time SLA',
			text:
				'Enjoy industry-leading response times and availability through multiple support channels including named contacts, joint Slack and more. Never slow down.',
			alt: '',
		},
		{
			iconUrl: 'support-page/bulb.svg',
			title: 'Expert consultation',
			text:
				'Get architectural-level consultation from dedicated component experts to review, plan, design and build your frontend infrastructure. We worked with hundreds of teams.',
			alt: '',
		},
		{
			iconUrl: 'support-page/team.svg',
			title: 'Team on-boarding',
			text:
				'Our experts will provide everything your organization needs to get from zero to hero, including hands-on team training, personalized workflows, and integrations.',
			alt: '',
		},
		{
			iconUrl: 'support-page/extensions.svg',
			title: 'Custom extensions, integrations',
			text:
				'We’ll design and provide the workflows and solutions you need to fit your team’s needs, tools and ecosystem.',
			alt: '',
		},
	];

	return (
		<div className={classNames(centerColumn, styles.wrapper)}>
			<div className={classNames(styles.topSection, marginCenter, text.center)}>
				<H1 size={PossibleSizes.sm}>We support global enterprises</H1>
				<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
					Bit enterprise helps global teams to speed up and standardize modern web
					development. We’re here to help hands-on every step of the way.
				</Paragraph>

				<div className={styles.buttons}>
					<Link href="/contact-sales?redirectUri=%2Fenterprise">
						<Button className={styles.button} importance="cta">
							Contact Sales
						</Button>
					</Link>

					<div className={styles.spacer} />
					<Link href="/enterprise?redirectUri=%2Fenterprise">
						<Button
							className={styles.button}
							importance="normal"
						>
							Bit enterprise
						</Button>
					</Link>
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
