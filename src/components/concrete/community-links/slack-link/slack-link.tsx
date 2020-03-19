import React from 'react';
import classNames from 'classnames';

import styles from './slack-link.module.scss';

import { PrimaryLink } from '../primary-link';
import { Icon } from '../../icon';


/**
 * concrete community link component - pill flavor for base link component
 */
export type SlackLinkProps = {
	/**
	 * override className for styling
	 */
	className?: string;
	/**
	 * the link to refer to
	 */
	href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function SlackLink({ className, href, ...rest }: SlackLinkProps) {
	return (
		<PrimaryLink
			{...rest}
			href={href}
			className={classNames(styles.slackLink, className)}
			data-bit-id="bit.evangelist/atom/community-links/slack-link"
		>
			<Icon of="slack" className={classNames(styles.icon)} />
			<span>bit-dev-community</span>
		</PrimaryLink>
	);
}
