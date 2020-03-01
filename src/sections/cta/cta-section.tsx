import React from 'react';
import classNames from 'classnames';

import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { CtaButton } from '../../components/concrete/cta-button';
import { Paragraph } from '../../components/base/paragraph';
import { Grid } from '../../components/layout/grid-component';
import { justifyItems, alignItems } from '../../components/layout/align';
import { Link } from '../../components/base/link';

//don't abuse!! fork this component if you need to much customizations
type CtaProps = {
	title?: string;
	buttonText?: string;
} & React.HTMLAttributes<HTMLDivElement>;

export function CtaSection(props: CtaProps) {
	const {
		children = 'Add your first component in minutes.',
		title = 'Ready to try Bit?',
		buttonText = 'Get Started for free',
		...rest
	} = props;

	return (
		<Grid
			{...rest}
			colSm={2}
			className={classNames(props.className, justifyItems.center, alignItems.center)}
			data-bit-id="ctaSection"
		>
			<div>
				<H2 size={PossibleSizes.xs}>{title}</H2>
				<Paragraph size={PossibleSizes.xl}>{children}</Paragraph>
			</div>
			<Link href="https://bit.dev/signup">
				<CtaButton>{buttonText}</CtaButton>
			</Link>
		</Grid>
	);
}
