import React from 'react';
import classNames from 'classnames';

import styles from './slack-link.module.scss';

import { PrimaryLink, PrimaryLinkProps } from '../primary-link';
import { Icon } from '../../icon';

export type SlackLinkProps = PrimaryLinkProps;

export function SlackLink({ className, ...rest }: SlackLinkProps) {
	return (
		<PrimaryLink
			external
			{...rest}
			className={classNames(styles.slackLink, className)}
			data-bit-id="bit.evangelist/atom/community-links/slack-link"
		>
			<Icon of="slack" className={classNames(styles.icon)} />
			<span>bit-dev-community</span>
		</PrimaryLink>
	);
}
