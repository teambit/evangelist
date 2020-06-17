import React from 'react';
import classNames from 'classnames';
import { BaseImage, BaseImageProps } from '@bit/bit.base-ui.elements.image';
import styles from './avatar.module.scss';

type AvatarProps = {
	src?: string;
	name: string;
	alt: string;
} & BaseImageProps;

export function Avatar({ src, alt, name, className }: AvatarProps) {
	return <BaseImage className={classNames(styles.avatar, className)} src={src || ''} alt={alt} />;
}
