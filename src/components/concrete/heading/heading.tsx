import React from 'react';
import classNames from 'classnames';

import { HeadingProps, Heading } from '@bit/bit.base.atoms.heading';
import { PossibleSizes } from '@bit/bit.base.theme.sizes';

import sizeStyles from './heading-sizes.module.scss';
import marginStyles from './heading-margins.module.scss';
import styles from './heading.module.scss';

/**
 * @name header
 * @description a set of concrete headers for the Evangelist homepage.
 * H1, H2, H3, H4, H5, H6
 * @param size font-size for the header. Default value per header (eg. H1 - 'xl')
 * @example
 * <H2 size="md">isn't this a lovely section?</H2>
 * <Paragraph>Lorem de ipsum de arimas</Paragraph>
 */

export interface HeaderProps extends HeadingProps {
	size?: PossibleSizes;
}

export function H1(props: HeaderProps) {
	return (
		<Heading
			data-bit-id="bit.evangelist/atom/headers"
			element="h1"
			{...props}
			className={classNames(
				styles.h1,
				marginStyles.h1,
				sizeStyles[props.size || 'xl'],
				props.className
			)}
		/>
	);
}
export function H2(props: HeaderProps) {
	return (
		<Heading
			data-bit-id="bit.evangelist/atom/headers"
			element="h2"
			{...props}
			className={classNames(
				styles.h2,
				marginStyles.h2,
				sizeStyles[props.size || 'lg'],
				props.className
			)}
		/>
	);
}
export function H3(props: HeaderProps) {
	return (
		<Heading
			data-bit-id="bit.evangelist/atom/headers"
			element="h3"
			{...props}
			className={classNames(
				styles.h3,
				marginStyles.h3,
				sizeStyles[props.size || 'md'],
				props.className
			)}
		/>
	);
}
export function H4(props: HeaderProps) {
	return (
		<Heading
			data-bit-id="bit.evangelist/atom/headers"
			element="h4"
			{...props}
			className={classNames(
				styles.h4,
				marginStyles.h4,
				sizeStyles[props.size || 'sm'],
				props.className
			)}
		/>
	);
}
export function H5(props: HeaderProps) {
	return (
		<Heading
			data-bit-id="bit.evangelist/atom/headers"
			element="h5"
			{...props}
			className={classNames(
				styles.h5,
				marginStyles.h5,
				sizeStyles[props.size || 'xs'],
				props.className
			)}
		/>
	);
}
export function H6(props: HeaderProps) {
	return (
		<Heading
			data-bit-id="bit.evangelist/atom/headers"
			element="h6"
			{...props}
			className={classNames(
				styles.h6,
				marginStyles.h6,
				sizeStyles[props.size || 'xxs'],
				props.className
			)}
		/>
	);
}
