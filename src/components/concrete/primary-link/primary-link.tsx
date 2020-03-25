import React from 'react';
import classNames from 'classnames';

import { Link, LinkProps } from '@bit/bit.base.atoms.link';

import styles from './primary-link.module.scss';

/**
 * @name PrimaryLink
 * @description A concrete link, styled for Evangelist.
 * The link will use these css variables, when available:
 * -   --primary-link-color, or --base-color, for text color.
 * -   --primary-link-highlight, or --base-highlight, for text color on hover.
 * @example
 * <PrimaryLink href="https://google.com">look it up!</PrimaryLink>
 */
export function PrimaryLink(props: LinkProps) {
	return <Link {...props} className={classNames(props.className, styles.primaryLink)} />;
}
