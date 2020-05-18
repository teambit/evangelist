import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { mutedText } from '@bit/bit.base-ui.text.muted-text';

import { H2 } from '../../../elements/heading';
import { textColumn } from '@bit/bit.base-ui.layout.page-frame';
import { marginCenter } from '@bit/bit.base-ui.layout.align';


/**
 * Title and description to the Bit integrations ecosystem.
 * @name EcoSystem
 */
export const EcoSystem = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div {...props}>
			<H2 size={PossibleSizes.sm}>Rooted in your ecosystem</H2>
			<Paragraph className={classNames(mutedText, textColumn, marginCenter)} size={PossibleSizes.lg}>
				Bit integrates into your software-building toolchain and plays with your
				ecosystem. Get advanced and custom integrations to boost delivery.
			</Paragraph>
		</div>
	);
};
