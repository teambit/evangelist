import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';

import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { text } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';

import { H3, H2 } from '../../../elements/heading';
import { Image } from '../../../elements/image';

import styles from './support-developers.module.scss';
import { Link } from '../../../elements/link';
import { links } from '../../../content/links';

type SupportDevelopersProps = {} & HTMLAttributes<HTMLElement>;

/**
 * Support section elaborating on the benefits of our support packages
 * @name SupportDevelopers
 */
export function SupportDevelopers(props: SupportDevelopersProps) {
	const { className, ...rest } = props;

	const cards = [
		{
			iconUrl: 'support-page/tool.svg',
			title: 'By core maintainers',
			text: (
				<Paragraph>
					Get support from the core developers who actually build the tools you work
					with.
				</Paragraph>
			),
			alt: 'Bit - support tools',
		},
		{
			iconUrl: 'support-page/support.svg',
			title: 'We respond fast',
			text: (
				<Paragraph>
					We always do our best to make sure you never have to wait for support when
					you need it.
				</Paragraph>
			),
			alt: 'Bit - support time',
		},
		{
			iconUrl: 'support-page/eye.svg',
			title: 'We see things through',
			text: (
				<Paragraph>
					Work is not done until the problem is solved and everyone are happy with the
					result.
				</Paragraph>
			),
			alt: 'Bit - support platform',
		},
		{
			iconUrl: 'support-page/book.svg',
			title: 'With extensive resources',
			text: (
				<Paragraph>
					We constantly write{' '}
					<Link external href={links.docs}>
						documentation
					</Link>
					, tutorials and guides to support every use case.
				</Paragraph>
			),
			alt: 'Bit - support guides',
		},
	];

	return (
		<div
			className={className}
			{...rest}
			data-bit-id="bit.evangelist/sections/support-page/support-developers"
		>
			<div className={classNames(styles.content, text.center)}>
				<H2 size={PossibleSizes.sm}>We got you covered</H2>
				<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
					We provide the support we would like to get as developers.
				</Paragraph>
			</div>
			<Grid colMd={2} className={classNames(props.className, text.center, styles.grid)}>
				{cards.map((card, index) => (
					<SupportDevelopersCard
						key={index}
						iconUrl={card.iconUrl}
						title={card.title}
						alt={card.alt}
						className={classNames(text.center, styles.supportCard)}
					>
						{card.text}
					</SupportDevelopersCard>
				))}
			</Grid>
		</div>
	);
}

type SupportDevelopersCardProps = {
	iconUrl: string;
	alt: string;
	title?: string;
} & HTMLAttributes<HTMLDivElement>;

export function SupportDevelopersCard({
	iconUrl,
	title,
	alt,
	className,
	children,
	...rest
}: SupportDevelopersCardProps) {
	return (
		<div className={classNames(className)} {...rest}>
			<Image alt={alt} src={iconUrl} className={styles.cardIcon} />
			<H3 size={PossibleSizes.xs} className={styles.cardTitle}>
				{title}
			</H3>
			{children}
		</div>
	);
}
