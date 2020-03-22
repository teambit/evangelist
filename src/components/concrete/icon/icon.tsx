import React from 'react';

import { BaseIcon, BaseIconProps } from '../../base/icon';

const iconSetPrefix = 'bitcon';

export type IconProps = BaseIconProps;

/**
 * Icon element for Bit's icon font at IcoMoon.
 * @name BitIcon
 * @param {string} of icon name
 * @example
 * Embed icon at the document root:
 * ```tsx
 * <EmbedIconSet query="sdfj4k2d"/>
 * ```
 *
 * Then use icon anywhere in the document:
 * ```tsx
 * <Icon of="spinner"/>
 * ```
 */

export function Icon({ className, of: iconName, ...rest }: IconProps) {
	return <BaseIcon of={`${iconSetPrefix}-${iconName}`} className={className} {...rest} />;
}
