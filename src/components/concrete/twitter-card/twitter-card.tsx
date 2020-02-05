import React, { ReactNode, ReactChild } from 'react';

import { staticStorageUrl } from '../../../themes/storage';
import { PossibleSizes } from '../../../themes/sizes';

import { Paragraph } from '../../base/paragraph';
import { Card } from '../../base/card';
import { H3 } from '../heading';

import styles from './twitter-card.module.scss';

type TwitterCardProps = {
	title: ReactNode;
	children: ReactChild;
	image: string;
	// icon: string;
	verified: boolean;

	//ids:
	titleId?: string;
	textId?: string;
};

const twitterVerifiedIcon = `${staticStorageUrl}/homepage/join-fold/twitter_verified.png`;

export function TwitterCard(props: TwitterCardProps) {
	const { title, children, image, verified, titleId, textId } = props;
	return (
		<Card className={styles.twitterCard} elevation="medium">
			<img src={image} className={styles.avatar} alt="twitter avatar" />
			<div>
				<H3 size={PossibleSizes.sm}>
					<span id={titleId}>{title}</span>
					{verified && (
						<img src={twitterVerifiedIcon} className={styles.icon} alt="verified" />
					)}
				</H3>
				<Paragraph className={styles.text} id={textId}>
					{children}
				</Paragraph>
			</div>
		</Card>
	);
}
