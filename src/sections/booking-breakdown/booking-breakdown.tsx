import React, { HTMLAttributes } from 'react';

import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { marginCenter } from '@bit/bit.base-ui.layout.align';
import { textColumn } from '@bit/bit.base-ui.layout.page-frame';

import { H2 } from '../../elements/heading';
import { Image } from '../../elements/image';

import styles from './booking-breakdown.module.scss';

/**
 * @name BookingBreakdown
 * @description
 * A section of static content, showing how Bit breaks down complicated websites.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function BookingBreakdown(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} data-bit-id="bit.evangelist/sections/booking-breakdown">
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm}>
					Everything you need to build independent and reusable components
				</H2>
				<Paragraph size={PossibleSizes.lg} className={classNames(styles.subtitle)}>
					Bit provides the most powerful tools and experience to develop, build, test
					and version independent and reusable components. And, it makes it more fun.
				</Paragraph>
			</div>
			<Image alt="bit" src="homepage-bit/assets/booking-breakdown.png" fullWidth />
		</div>
	);
}
