import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Card, CardProps } from '@bit/bit.base-ui.atoms.card';
import { Paragraph } from '@bit/bit.base-ui.atoms.paragraph';
import { Label } from '@bit/bit.base-ui.atoms.label';
import { Link } from '@bit/bit.base-ui.atoms.link';

import { H1 } from '../heading';
import { Icon } from '../icon';

import styles from './marketing-card.module.css';

type MarketingCardProps = {
	/**
	 * Controls the title content.
	 */
	title: string;
	/**
	 * Color for label and link.
	 */
	ctaColor?: string;
	/**
	 * Text content for label.
	 */
	label: string;
	/**
	 * Text content for main link.
	 */
	linkText?: string;
	/**
	 * Link target.
	 */
	to?: string;
} & CardProps;

/**
 * A concrete card template, with a title, label, and a link.
 * @name MarketingCard
 *
 * @example
 * <MarketingCard
 * 	className={styles.marketingCard}
 *	ctaColor={'#37b26c'}
 *	linkText="learn more"
 *	label="Build"
 *	title="Empower autonomous teams to deliver"
 * >
 *	Empower every team to independently build their components in their own
 *	codebase. Let each team integrate and deploy components
 * </MarketingCard>
 */
export function MarketingCard(props: MarketingCardProps) {
	const { title, children, className, ctaColor, label, to, linkText, ...rest } = props;
	// const accentColor = {};// [styles.accentVar]: ctaColor };

	return (
		<Card
			{...rest}
			className={classNames(styles.card, className)}
			// style={accentColor}
			data-bit-id="bit.evangelist/atom/marketing-card"
		>
			<Label className={styles.ctaLabel}>{label}</Label>
			<H1 element="h5" size={PossibleSizes.xs}>
				{title}
			</H1>
			<Paragraph className={classNames(styles.text)}>{children}</Paragraph>
			<Link className={styles.ctaLink} href={to || '#'}>
				{linkText} <Icon of="right_arrow" className={styles.icon} />
			</Link>
		</Card>
	);
}

