import React from 'react';
import classnames from 'classnames';

export type BaseIconProps = { of: string } & React.HTMLAttributes<HTMLSpanElement>;

/**
 * Base template component for icons.  
 * Compose this class to make a specific icon component for a font-set
 * @name BaseIcon
 * @param {string} of ClassName identifying icon
 */
export function BaseIcon({ of: iconName, className, ...rest }: BaseIconProps) {
	return <span {...rest} className={classnames(iconName, className)} />;
}
