import React from 'react';
import classNames from 'classnames';
import styles from './label.module.scss';

export interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
	color?: string;
}

/**
 * @name Label
 * @param color override label background color
 * @description Short text block with color.
 * 
 * Use the following CSS variables to style:
 * -   --base-color (background color)
 * -   --primary-label-text (text color)
 * -   --primary-label-width (max-width)
 * -   --primary-label-height (height)
 */
export function Label({ color, className, ...rest }: LabelProps) {
	return (
		<div
			className={classNames(styles.label, className)}
			style={{ background: color }}
			data-bit-id="bit.base/atoms/label"
			{...rest}
		/>
	);
}
