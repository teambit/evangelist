import React from 'react';
import classNames from 'classnames';

import styles from './primary-link.module.scss';

import {
	CommunityLink as BaseCommunityLink,
	CommunityLinkProps,
} from '../../../base/community-link';

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
