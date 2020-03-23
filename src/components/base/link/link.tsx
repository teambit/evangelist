import React from 'react';

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	external?: boolean;
}

/**
 * Template components for links ('href')
 * @name Link
 * @param external open link in a new tab
 */
export function Link(props: LinkProps) {
	const { external, children, ...rest } = props;

	const externalProps = external ? { rel: 'noopener', target: '_blank' } : {};

	return (
		<a data-bit-id="bit.base/atoms/link" {...externalProps} {...rest}>
			{children}
		</a>
	);
}
