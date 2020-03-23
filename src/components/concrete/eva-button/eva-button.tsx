import React from 'react';
import classNames from 'classnames';

import BaseButton, { ButtonProps as BaseProps } from '../../base/button';

import styles from './eva-button.module.scss';
import elevations from './elevations.module.scss';

export interface ButtonProps extends BaseProps {
	elevation?: 'none' | 'low' | 'medium' | 'high';
	importance?: 'normal' | 'cta';
}

/**
 * @description
 * Button component with click effect and built in loader.
 * Supports all props from native html button.
 * @name EvaButton
 * @param {string} elevation style the button with shadow and click effect. (Default - 'low')
 * @param {string} importance style variance ('cta', 'normal')
 * @param {boolean} loading (from BaseButton) replace content with loader
 * @param {ReactNode} loader (from BaseButton) loader to show when loading={true}
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
