import React, { AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './component-tooltip.module.scss';

export interface ComponentTooltipProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function ComponentTooltip(props: ComponentTooltipProps) {
	const { children, ...rest } = props; //TODO
	return (
		<a
			{...rest}
			rel="noopener"
			target="_blank"
			data-ignore-component-highlight
			className={classNames(props.className, styles.componentTooltip)}
		>
			{children}
		</a>
	);
}
