import React from 'react';

import { BaseImage, BaseImageProps } from '@bit/bit.base.atoms.image';
import { staticStorageUrl } from '@bit/bit.base.constants.storage';

export type ImageProps = BaseImageProps;

/**
 * @name StaticImage
 * @description Concrete image, using our Static Storage CDN.
 * @param {string} src relative path to image
 * @example
 * <Image src="homepage-bit/map.png" alt="illustration" fullWidth />
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
