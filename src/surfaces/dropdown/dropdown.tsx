import React from 'react';
import classNames from 'classnames';
import { Drawer, DrawerProps } from '@bit/bit.base-ui.surfaces.drawer';

import { Position, ContaineeProps, Containee } from '@bit/bit.base-ui.surfaces.abs-container';
import { elevationClass, ElevationHeight } from '@bit/bit.base-ui.css-components.elevation';
import { roundnessClass, Roundness } from '@bit/bit.base-ui.css-components.roundness';
import { backgrounds } from '@bit/bit.base-ui.surfaces.background';
import styles from './dropdown.module.scss';
import { fadeInOutClass } from '../../css-components/fade-in-out';

export type DropdownProps = { position: Position; dropClass?: string } & DrawerProps;

export function Dropdown({ children, position = 'bottom', dropClass, ...rest }: DropdownProps) {
	return (
		<Drawer {...rest}>
			<DropdownMenu position={position} className={dropClass}>
				{children}
			</DropdownMenu>
		</Drawer>
	);
}

type DropdownMenuProps = {
	position: Position;
	elevation?: ElevationHeight;
	roundness?: Roundness;
} & ContaineeProps;

function DropdownMenu({
	className,
	elevation = 'medium',
	roundness = 'sharp',
	...rest
}: DropdownMenuProps) {
	return (
		<Containee
			{...rest}
			className={classNames(
				styles.dropdown,
				backgrounds.layer,
				elevationClass[elevation],
				roundnessClass[roundness],
				fadeInOutClass,
				className
			)}
		/>
	);
}

Dropdown.defaultProps = {
	// hoverToOpen: false,
	position: 'bottom',
	elevation: 'medium',
	roundness: 'sharp',
};
