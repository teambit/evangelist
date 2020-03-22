import React from 'react';
import classNames from 'classnames';
import styles from './image.module.scss';

export type BaseImageProps = {
	alt: string;
	src: string;
} & React.HTMLAttributes<HTMLImageElement>;

/**
 * Template component for images.  
 * Accepts all the arguments of native html image.
 * @name BaseImage
 * @param alt requires alt text
 * @param src requires image source
 * @example
 * 	<BaseImage alt="avatar" src="https://storage.com/asdlkfjsdf.png">
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
