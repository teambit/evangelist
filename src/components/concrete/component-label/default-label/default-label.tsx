import React from 'react';
import classNames from 'classnames';

import { Card, CardProps } from '@bit/bit.base-ui.atoms.card';
import { pillClass } from '@bit/bit.base-ui.atoms.pill';

import styles from './default-label.module.scss';

export function DefaultLabel(props: CardProps) {
	const { className, ...rest } = props;
	return <Card {...rest} className={classNames(className, pillClass, styles.defaultLabel)} />;
}
