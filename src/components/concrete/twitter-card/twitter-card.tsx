import React, { ReactNode, ReactChild } from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '@bit/bit.base.theme.sizes';

import { Paragraph } from '@bit/bit.base.atoms.paragraph';
import { Card, CardProps } from '@bit/bit.base.atoms.card';

import { H3 } from '../heading';
import { Image } from '../image';

import styles from './twitter-card.module.scss';

type TwitterCardProps = {
	title: ReactNode;
	children: ReactChild;
	image: string;
	verified: boolean;

	//ids:
	titleId?: string;
	textId?: string;
} & CardProps;

const twitterVerifiedIcon = 'homepage/join-fold/twitter_verified.png';

/**
 * @name TwitterCard
 * @description Display a tweet
 * @param {string} title Twitter username
 * @param {string} image User avatar
 * @param {boolean} verified adds a 'verified' logo, when true.
 * @param {ReactNode} children main content
 * @example
 * <TwitterCard
 *	verified
 *	title="@Sketch2R"
 *	image={'homepage-bit/tweets/sketch2r.jpg'}
 * >
 *	Great news! We just published our first Stratos components to
 *	http://bit.dev!
 * </TwitterCard>
 */
export function TwitterCard(props: TwitterCardProps) {
	const { title, className, children, image, verified, titleId, textId, ...rest } = props;
	return (
		<Card
			{...rest}
			className={classNames(styles.twitterCard, className)}
			elevation="medium"
			data-bit-id="bit.evangelist/atom/twitter-card"
		>
			<Image src={image} className={styles.avatar} alt="twitter avatar" />
			<div>
				<H3 size={PossibleSizes.xxs} className={styles.title}>
					<span id={titleId}>{title}</span>
					{verified && (
						<Image
							src={twitterVerifiedIcon}
							className={styles.icon}
							alt="verified"
						/>
					)}
				</H3>
				<Paragraph className={styles.text} size={PossibleSizes.md} id={textId}>
					{children}
				</Paragraph>
			</div>
		</Card>
	);
}
