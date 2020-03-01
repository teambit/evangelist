import React, { HTMLAttributes } from 'react';

import { H2 } from '../../components/concrete/heading';
import { Paragraph } from '../../components/base/paragraph';
import { Image } from '../../components/concrete/image';
import { PossibleSizes } from '../../constants/sizes';

export function BookingBreakdown(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props}>
			<H2 size={PossibleSizes.md}>
				Enjoy the most advanced tools to develop reusable components.
			</H2>
			<Paragraph size={PossibleSizes.xl}>
				Bit’s popular open-source tools give you a powerful experience for developing
				truly reusable components, that your team can use and build anywhere. Take a
				look.
			</Paragraph>
			<Image alt="bit" src="homepage-bit/2-build.png" fullWidth />
		</div>
	);
}
