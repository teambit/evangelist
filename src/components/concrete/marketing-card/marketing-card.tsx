import React, { ReactNode, CSSProperties } from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '@bit/bit.base.theme.sizes';
import { Card } from '@bit/bit.base.atoms.card';
import { Paragraph } from '@bit/bit.base.atoms.paragraph';
import { Label } from '@bit/bit.base.atoms.label';
import { Link } from '@bit/bit.base.atoms.link';

import { H1 } from '../heading';
import { Icon } from '../icon';

import styles from './marketing-card.module.css';

type MarketingCardProps = {
	title: ReactNode;
	children: ReactNode;
	className?: string;
	ctaColor?: string;
	label: string;
	linkText?: string;
	to?: string;
};

/**
 * @name MarketingCard
 * @description a concrete card, with label and link.
 * @param {ReactNode} Title
 * @param {ReactNode} children main content
 * @param {label} label content
 * @param {string} [ctaColor] color for label and link
 * @param {string} [to] link target
 * @param {string} [linkText] link content
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

export const MarketingCard = (props: MarketingCardProps) => {
	const { title, children, className, ctaColor, label, to, linkText } = props;
	const accentColor = { [styles.accentVar]: ctaColor } as CSSProperties;

	return (
		<Card
			className={classNames(styles.card, className)}
			style={accentColor}
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
};

export default MarketingCard;
