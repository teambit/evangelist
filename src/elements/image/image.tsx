import React from 'react';

import { BaseImage, BaseImageProps } from '@bit/bit.base-ui.elements.image';
import { staticStorageUrl } from '@bit/bit.base-ui.constants.storage';

export type ImageProps = BaseImageProps;

/**
 * Concrete image, using our Static Storage CDN.
 *
 * Treats src as relative paths on top of our image storage, and supports all other properties an html `<img>` would.
 *
 * @example
 * <Image src="homepage-bit/map.png" alt="illustration" fullWidth />
 */
export function Image({ src, ...rest }: ImageProps) {
	return (
		<BaseImage
			data-bit-id="bit.evangelist/elements/image"
			{...rest}
			src={`${staticStorageUrl}/${src}`}
		/>
	);
}
