import React from 'react';
import classNames from 'classnames';

import styles from './primary-link.module.scss';

import { Link, LinkProps } from '@bit/bit.base-ui.atoms.link';

export type PrimaryLinkProps = LinkProps;

/**
 * base 'community link' component.
 * 
 * Used as a template for Github-link, twitter-link, etc.
 */
export function PrimaryLink({ className, href, ...rest }: PrimaryLinkProps) {
	return (
		<Link
			{...rest}
			href={href}
			className={classNames(styles.primaryLink, className)}
		></Link>
	);
}
