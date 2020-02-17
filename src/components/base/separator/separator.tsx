import React from 'react';
import classNames from 'classnames';
import styles from './separator.module.scss';

export type SeparatorProps = {
	/**
	 * separator should be horizontal or vertical.
	 */
	layout: 'vertical' | 'horizontal';
	/**
	 * override styles.
	 */
	className?: string;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * Separator component divides between different areas to improve readability.
 */
export function Separator({ layout, className, ...rest }: SeparatorProps) {
	return (
		<div
			{...rest}
			className={classNames(styles.separator, styles[layout], className)}
			data-bit-id="separator"
		/>
	);
}

Separator.defaultProps = {
	layout: 'horizontal',
};
