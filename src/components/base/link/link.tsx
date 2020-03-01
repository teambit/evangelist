import React from 'react';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
	external?: boolean;
}

export function Link(props: LinkProps) {
	const { external, children, ...rest } = props;

	const externalProps = external ? { rel: 'noopener', target: '_blank' } : {};

	return (
		<a {...externalProps} {...rest}>
			{children}
		</a>
	);
}
