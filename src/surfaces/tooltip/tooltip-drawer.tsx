import React from 'react';
import { Drawer, DrawerProps } from '@bit/bit.base-ui.surfaces.drawer';
import classNames from 'classnames';

import { fadeInOutClass } from '../../css-components/fade-in-out';
import { TooltipMenu } from './tooltip-card';
import { Position } from '@bit/bit.base-ui.surfaces.abs-container';
import { ElevationHeight } from '@bit/bit.base-ui.css-components.elevation';
import { Arrow } from './tooltip-arrow';
import styles from './tooltip-drawer.module.scss';

export type TooltipDrawerProps = {
	position: Position;
	tooltipClass?: string;
	arrowClass?: string;
	elevation?: ElevationHeight;
} & DrawerProps;

export function TooltipDrawer({
	children,
	className,
	position = 'bottom',
	elevation,
	tooltipClass,
	arrowClass,
	...rest
}: TooltipDrawerProps) {
	return (
		<Drawer className={classNames(styles.drawer, className)} {...rest}>
			<TooltipMenu
				position={position}
				elevation={elevation}
				className={classNames(tooltipClass, fadeInOutClass, styles.tooltip)}
			>
				{children}
			</TooltipMenu>
			<Arrow
				position={position}
				className={classNames(arrowClass, fadeInOutClass, styles.arrow)}
			/>
		</Drawer>
	);
}

TooltipDrawer.defaultProps = {
	hoverToOpen: false,
	position: 'bottom',
};
