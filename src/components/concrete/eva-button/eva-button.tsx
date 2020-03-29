import React from 'react';
import classNames from 'classnames';

import BaseButton, { ButtonProps as BaseProps } from '@bit/bit.base.atoms.button';

import styles from './eva-button.module.scss';
import elevations from './elevations.module.scss';

export type ButtonProps = {
	/**
	 * style the button with shadow and click effect.
	 */
	elevation?: 'none' | 'low' | 'medium' | 'high';
	/**
	 * style variance ('cta', 'normal')
	 */
	importance?: 'normal' | 'cta';
} & BaseProps;

/**
 * Button component with click effect and built in loader.
 * Supports all props from native html button.
 * @example
 * 	<EvaButton importance="cta" elevation="medium" loading loader={<Loader/>}>Click me!</EvaButton>
 */
export function EvaButton({
	className,
	importance = 'normal',
	elevation = 'low',
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

EvaButton.defaultProps = {
	importance: 'normal',
	elevation: 'low',
};
