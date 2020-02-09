import React, { ReactNode, ReactChild } from 'react';
import classNames from 'classnames';

import { staticStorageUrl } from '../../../constants/storage';
import { PossibleSizes } from '../../../constants/sizes';

import { Paragraph } from '../../base/paragraph';
import { Card, CardProps } from '../../base/card';
import { H3 } from '../heading';

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

const twitterVerifiedIcon = `${staticStorageUrl}/homepage/join-fold/twitter_verified.png`;

export function TwitterCard(props: TwitterCardProps) {
	const { title, className, children, image, verified, titleId, textId, ...rest } = props;
	return (
		<Card
			{...rest}
			className={classNames(styles.twitterCard, className)}
			elevation="medium"
		>
			<img src={image} className={styles.avatar} alt="twitter avatar" />
			<div>
				<H3 size={PossibleSizes.xxs} className={styles.title}>
					<span id={titleId}>{title}</span>
					{verified && (
						<img src={twitterVerifiedIcon} className={styles.icon} alt="verified" />
					)}
				</H3>
				<Paragraph className={styles.text} size={PossibleSizes.md} id={textId}>
					{children}
				</Paragraph>
			</div>
		</Card>
	);
}
