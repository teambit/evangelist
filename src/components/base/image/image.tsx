import React from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';

export type BaseImageProps = {
	/**
	 * alt text
	 */
	alt: string;
	/**
	 * src of image
	 */
	src: string;
	/**
	 * className for styles overrides
	 */
	className?: string;
} & React.HTMLAttributes<HTMLImageElement>;

/**
 *
 * Image component - base image
 */
export function BaseImage({ alt, src, className, ...rest }: BaseImageProps) {
	return (
		<img
			data-bit-id="bit.base/atoms/image"
			alt={alt}
			src={src}
			{...rest}
			className={classNames(styles.image, className)}
		/>
	);
}
