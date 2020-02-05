import React from 'react';
import classNames from 'classnames';
import { CommunityLink as BaseCommunityLink } from '../../../base/community-link';
import styles from './twitter-link.module.scss';
import baseStyles from '../community-link.module.scss';
import { Icon } from '../../icon';

/**
 * concrete community link component - pill flavor for base link component
 */
export type GithubLinkProps = {
	/**
	 * override className for styling
	 */
	className?: string;
	/**
	 * the link to refer to
	 */
	href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function TwitterLink({ className, href, ...rest }: GithubLinkProps) {
	return (
		<BaseCommunityLink
			href={href}
			className={classNames(baseStyles.communityLink, styles.twitterLink, className)}
			{...rest}
		>
			<Icon of="twitter-logo" className={classNames(styles.icon)} />
			<span>@bitdev_</span>
		</BaseCommunityLink>
	);
}
