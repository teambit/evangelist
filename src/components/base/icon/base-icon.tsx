import React from 'react';
import classnames from 'classnames';

export type BaseIconProps = { of: string } & React.HTMLAttributes<HTMLSpanElement>;

/**
 * Template component for specific icon sets
 * @name BaseIcon
 * @param {string} of ClassName identifying icon
 */
export function BaseIcon({ of: iconName, className, ...rest }: BaseIconProps) {
	return <span {...rest} className={classnames(iconName, className)} />;
}
