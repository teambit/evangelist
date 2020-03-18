import React from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '../../../constants/sizes';
import styles from './paragraph.module.scss';

export type ParagraphProps = {
	/**
	 * heading font size.
	 */
  size: PossibleSizes;
  /**
   * type of dom element
   */
	element: 'p' | 'div' | 'span';
} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * text component
 */
export function Paragraph({ className, size, element: Element, ...rest }: ParagraphProps) {
	return (
		<Element
			className={classNames(styles[size], className)}
			data-bit-id="bit.base/atoms/paragraph"
			{...rest}
		/>
	);
}

Paragraph.defaultProps = {
	size: 'md',
	element: 'p',
};
