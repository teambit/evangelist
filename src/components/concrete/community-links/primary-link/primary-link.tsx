import React from 'react';
import classNames from 'classnames';

import styles from './primary-link.module.scss';

import { Link, LinkProps } from '@bit/bit.base.atoms.link';

export type PrimaryLinkProps = LinkProps;

/**
 * @name PrimaryLink
 * @description
 * concrete community link component - pill flavor for base link component
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
