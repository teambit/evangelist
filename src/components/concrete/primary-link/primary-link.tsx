import React from 'react';
import classNames from 'classnames';

import { Link, LinkProps } from '@bit/bit.base-ui.elements.link';

import styles from './primary-link.module.scss';

/**
 * A concrete link, styled for Evangelist, extending [base link](https://bit.dev/bit/base/atoms/link).
 *
 * The link will use these css variables, when available:
 * -   --primary-link-color, or --base-color, for text color.
 * -   --primary-link-highlight, or --base-highlight, for text color on hover.
 *
 * @example
 * <PrimaryLink href="https://google.com">look it up!</PrimaryLink>
 */
export function PrimaryLink(props: LinkProps) {
	return <Link {...props} className={classNames(props.className, styles.primaryLink)} />;
}
