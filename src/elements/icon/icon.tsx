import React from 'react';

import { BaseIcon, BaseIconProps } from '@bit/bit.base-ui.elements.icon';

const iconSetPrefix = 'bitcon';

export type IconProps = BaseIconProps;

/**
 * Placeholder for an icon, from Bit.dev's icon font.
 *
 * (Make sure [IconFont](https://bit.dev/bit/evangelist/theme/icon-font) is present in the page, for the icons to load).
 * @name Icon
 * @example
 * // Embed icon at the document root:
 * <EvaIconFont query="sdfj4k2d"/>
 *
 * // Then use icon anywhere in the document:
 * <Icon of="spinner"/>
 */

export function Icon({ className, of: iconName, ...rest }: IconProps) {
	return (
		<BaseIcon
			of={`${iconSetPrefix}-${iconName}`}
			className={className}
			data-bit-id="bit.evangelist/elements/icon"
			{...rest}
		/>
	);
}
