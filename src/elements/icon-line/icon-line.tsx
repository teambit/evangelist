import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import { Image } from '../image';

import styles from './icon-line.module.scss';

const staticPrefix = 'brands';

type IconLineProps = {
	/**
	 * Array of icon urls to display.  
	 * Icons are expected to load from our Static Storage CDN, and not have full URL.
	 */
	icons?: string[];
	/**
	 * Content to put before the images
	 */
	pre?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A concrete line of icons, used by the landing section.
 * @name IconLine
 * @example
 * <IconLine icons=['logo-react', 'logo-vue', 'logo-angular'] />
 */

export function IconLine({ icons, className, pre }: IconLineProps) {
	if (!icons) return null;
	return (
		<div
			className={classNames(styles.iconLine, className)}
			data-bit-id="bit.evangelist/elements/icon-line"
		>
			{pre}
			{icons.map((icon: string, index: number) => (
				<Image
					alt={icon}
					className={styles.icon}
					key={index}
					src={`${staticPrefix}/${icon}.svg`}
				/>
			))}
		</div>
	);
}
