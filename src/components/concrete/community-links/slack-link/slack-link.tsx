import React from 'react';
import classNames from 'classnames';
import { CommunityLink as BaseCommunityLink } from '../../../base/community-link';
import styles from './slack-link.module.scss';
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

export function SlackLink({ className, href, ...rest }: GithubLinkProps) {
	return (
		<BaseCommunityLink
			{...rest}
			href={href}
			className={classNames(baseStyles.communityLink, styles.slackLink, className)}
		>
			<Icon of="slack" className={classNames(styles.icon)} />
			<span>bit-dev-community</span>
		</BaseCommunityLink>
	);
}
