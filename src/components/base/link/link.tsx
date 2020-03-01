import React from 'react';

export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
	return <a {...props}>{props.children}</a>;
}
