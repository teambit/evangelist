import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { centerColumn } from '@bit/bit.base-ui.layout.page-frame';

import { H2 } from '../../../elements/heading';

import styles from './transparent-packages.module.scss';

type TransparentPackagesProps = {
	children?: ReactNode;
} & HTMLAttributes<HTMLElement>;

/**
 * A section with support comparison table to specify differences between plans
 * Assumes a table is passed as `children`, otherwise the entire section will not show.
 * @name TransparentPackages
 */
export function TransparentPackages(props: TransparentPackagesProps) {
	const { children, ...rest } = props;

	if (!children) return null;
	return (
		<div className={classNames(centerColumn, styles.wrapper)} {...rest}>
			<div className={classNames(styles.topSection, marginCenter, text.center)}>
				<H2 size={PossibleSizes.sm}>Simple transparent plans</H2>
				<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
					Compare our support plans below to quickly choose the right one.
				</Paragraph>
			</div>
			{children}
		</div>
	);
}
