import React, { HTMLAttributes } from 'react';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { MutedText } from '@bit/bit.base-ui.text.muted-text';

import { H2 } from '../../../elements/heading';

export const EcoSystem = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div {...props}>
			<H2 size={PossibleSizes.sm}>Rooted in your ecosystem</H2>
			<Paragraph>
				<MutedText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta tempor
					euismod. Suspendisse dictum sed nulla in pretium.
				</MutedText>
			</Paragraph>
		</div>
	);
};
