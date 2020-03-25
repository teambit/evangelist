import React from 'react';

import { BaseIcon, BaseIconProps } from '@bit/bit.base.atoms.icon';

const iconSetPrefix = 'bitcon';

export type IconProps = BaseIconProps;

/**
 * Icon element for Bit's icon font at IcoMoon.
 * @name BitIcon
 * @param {string} of icon name
 * @example
 * // Embed icon at the document root:
 * <EmbedIconSet query="sdfj4k2d"/>
 *
 * // Then use icon anywhere in the document:
 * <Icon of="spinner"/>
 */

export function Icon({ className, of: iconName, ...rest }: IconProps) {
	return <BaseIcon of={`${iconSetPrefix}-${iconName}`} className={className} {...rest} />;
}
