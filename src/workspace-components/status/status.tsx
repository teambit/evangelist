import React from 'react';
import classNames from 'classnames';
import styles from './status.module.scss';

type StatusProps = {
	text: string;
	color: string;
} & React.HTMLAttributes<HTMLSpanElement>;

export function Status({ text, color, className }: StatusProps) {
	return (
		<span className={classNames(styles.status, className)}>
			<span className={styles.text}>{text}</span>
			<div className={styles.dot} style={{ backgroundColor: color }}></div>
		</span>
	);
}
