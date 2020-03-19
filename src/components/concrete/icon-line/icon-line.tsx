import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import { Image } from '../image';

import styles from './icon-line.module.scss';

const staticPrefix = 'brands';

type IconLineProps = {
	pre?: ReactNode;
	icons?: string[];
	className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function IconLine({ icons, className, pre }: IconLineProps) {
	if (!icons) return null;
	return (
		<div
			className={classNames(styles.iconLine, className)}
			data-bit-id="bit.evangelist/atom/icon-line"
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
