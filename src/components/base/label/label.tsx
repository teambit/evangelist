import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './label.module.scss';

type LabelProps = {
	children: ReactNode;
	className?: string;
	color?: string;
};

export function Label({ children, color, className }: LabelProps) {
	return (
		<div
			className={classNames(styles.label, className)}
			style={{ background: color }}
			data-bit-id="base/label"
		>
			{children}
		</div>
	);
}
