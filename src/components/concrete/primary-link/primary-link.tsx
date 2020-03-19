import React from 'react';
import classNames from 'classnames';

import { Link, LinkProps } from '../../base/link';

import styles from './primary-link.module.scss';

export function PrimaryLink(props: LinkProps) {
	return <Link {...props} className={classNames(props.className, styles.primaryLink)} />;
}
