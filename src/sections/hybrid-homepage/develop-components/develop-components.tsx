import React, { HTMLAttributes } from 'react';

import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { marginCenter } from '@bit/bit.base-ui.layout.align';
import { textColumn } from '@bit/bit.base-ui.layout.page-frame';

import { H2 } from '../../../elements/heading';
import { Image } from '../../../elements/image';

import styles from './develop-components.module.scss';

/**
 * @name DevelopComponents
 * @description
 * A section of static content, showing how Bit breaks down complicated websites.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function DevelopComponents(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} data-bit-id="bit.evangelist/sections/develop-components">
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm}>
					Develop modular applications with independent components
				</H2>
				<Paragraph size={PossibleSizes.lg} className={classNames(styles.subtitle)}>
					Break the web monolith! Develop and compose modular apps together in a fast
					and scalable way, with an amazing dev experience at every step.
				</Paragraph>
			</div>
			<Image alt="bit" src="homepage-bit/assets/booking-breakdown.png" fullWidth />
		</div>
	);
}
