import React from 'react';
import classNames from 'classnames';
import {
	CommunityLink as BaseCommunityLink,
	CommunityLinkProps,
} from '../../../base/community-link';
import styles from './primary-link.module.scss';

/**
 * concrete community link component - pill flavor for base link component
 */
export function PrimaryLink({ className, href, ...rest }: CommunityLinkProps) {
	return (
		<BaseCommunityLink
			{...rest}
			href={href}
			className={classNames(styles.primaryLink, className)}
		></BaseCommunityLink>
	);
}
