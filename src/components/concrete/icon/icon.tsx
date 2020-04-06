import React from 'react';

import { BaseIcon, BaseIconProps } from '@bit/bit.base-ui.atoms.icon';

const iconSetPrefix = 'bitcon';

export type IconProps = BaseIconProps;

/**
 * Placeholder for an icon from Bit's icon font.
 *
 * Make sure the page contains [iconFont](https://bit.dev/bit/evangelist/atom/eva-icon-font), or else icons will not load.
 * @name BitIcon
 * @param {string} of icon name
 * @example
 * // Embed icon at the document root:
 * <EvaIconFont query="sdfj4k2d"/>
 *
 * // Then use icon anywhere in the document:
 * <Icon of="spinner"/>
 */

export function Icon({ className, of: iconName, ...rest }: IconProps) {
	return <BaseIcon of={`${iconSetPrefix}-${iconName}`} className={className} {...rest} />;
}
