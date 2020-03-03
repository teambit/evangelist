import React from 'react';
import { Link, LinkProps } from '../../base/link';
import classNames from 'classnames';

import styles from './primary-link.module.scss';

export function PrimaryLink(props: LinkProps) {
	return <Link {...props} className={classNames(props.className, styles.primaryLink)} />;
}
