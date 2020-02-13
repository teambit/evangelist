import React from 'react';
import classNames from 'classnames';
import { CommunityLink as BaseCommunityLink } from '../../../base/community-link';
import styles from './primary-link.module.scss';


export type PrimaryLinkProps = {
	/**
	 * override className for styling
	 */
	className?: string;
	/**
	 * the link to refer to
	 */
	href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

/**
 * concrete community link component - pill flavor for base link component
 */
export function PrimaryLink({ className, href, ...rest }: PrimaryLinkProps) {
	return (
		<BaseCommunityLink
			{...rest}
			href={href}
			className={classNames(styles.primaryLink, className)}
		>
		</BaseCommunityLink>
	);
}
