import React from 'react';
import classNames from 'classnames';

import BaseButton, { ButtonProps as BaseProps } from '../../base/button';

import styles from './eva-button.module.scss';
import elevations from './elevations.module.scss';

/**
 * Button component
 */
export type ButtonProps = {
	/**
	 * to control the shadow effect of a button.
	 */
	elevation?: 'none' | 'low' | 'medium' | 'high';
	importance?: 'normal' | 'cta';
} & BaseProps;

export function EvaButton({
	className,
	importance = 'normal',
	elevation = 'none',
	...rest
}: ButtonProps) {
	return (
		<BaseButton
			className={classNames(styles.evaButton, elevations[elevation], className)}
			data-bit-id="bit.evangelist/atom/eva-button"
			data-variation={importance}
			{...rest}
		/>
	);
}

// EvaButton.defaultProps = {
// 	elevation: 'low',
// 	importance: 'normal',
// };
