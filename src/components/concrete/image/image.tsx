import React from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';
import { staticStorageUrl } from '../../../constants/storage';
import { BaseImage, BaseImageProps } from '../../base/image';

export type ImageProps = {
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
	fullWidth?: boolean;
} & BaseImageProps;

/**
 *
 * Image component - base image
 */
export function Image({ alt, src, fullWidth, className, ...rest }: ImageProps) {
	return (
		<BaseImage
			{...rest}
			alt={alt}
			src={`${staticStorageUrl}/${src}`}
			className={classNames(fullWidth && styles.fullWidth, className)}
			data-bit-id="concrete/image"
		/>
	);
}
