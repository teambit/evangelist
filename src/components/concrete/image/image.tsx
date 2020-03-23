import React from 'react';

import { BaseImage, BaseImageProps } from '../../base/image';
import { staticStorageUrl } from '../../../constants/storage';

export type ImageProps = BaseImageProps;

/**
 * @name ConcreteImage
 * @description Concrete image, using our Static Storage CDN.
 * @param {string} src relative path to image
 * @example
 * ```tsx
 * <Image src="homepage-bit/map.png" alt="illustration" fullWidth />
 * ```
 */
export function Image({ src, ...rest }: ImageProps) {
	return (
		<BaseImage
			{...rest}
			src={`${staticStorageUrl}/${src}`}
			data-bit-id="bit.evangelist/atom/static-image"
		/>
	);
}
