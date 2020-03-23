import React from 'react';

export type HeadingProps = {
	element?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * Title component
 * @name Heading
 * @param element underlying html element ("h1", "h2", etc)
 * @example
 * <Heading element="h3">This is a title</Heading>
 */
export function Heading(props: HeadingProps) {
	const { element, ...rest } = props;
	const Element = element || 'h1';

	return <Element data-bit-id="bit.base/atoms/heading" {...rest} />;
}

Heading.defaultProps = {
	size: 'md',
	element: 'h1',
};
