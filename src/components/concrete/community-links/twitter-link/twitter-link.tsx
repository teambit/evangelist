import React from 'react';
import classNames from 'classnames';

import styles from './twitter-link.module.scss';

import { PrimaryLink, PrimaryLinkProps } from '../primary-link';
import { Icon } from '../../icon';

/**
 * concrete community link component - pill flavor for base link component
 */
export type TwitterLinkProps = PrimaryLinkProps;

export function TwitterLink({ className, href, ...rest }: TwitterLinkProps) {
	return (
		<PrimaryLink
			external
			{...rest}
			href={href}
			className={classNames(styles.twitterLink, className)}
			data-bit-id="bit.evangelist/atom/community-links/twitter-link"
		>
			<Icon of="twitter-logo" className={classNames(styles.icon)} />
			<span>@bitdev_</span>
		</PrimaryLink>
	);
}
