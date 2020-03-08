import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { PossibleSizes } from '../../constants/sizes';

import { Paragraph } from '../../components/base/paragraph';
// import { Image } from '../../components/concrete/image';
// import { IconLine } from '../../components/concrete/icon-line';
import { H1 } from '../../components/concrete/heading';
import { PrimaryButton } from '../../components/base/primary-button';
import { CtaButton } from '../../components/concrete/cta-button';

import { text, marginCenter } from '../../components/layout/align';

import styles from './reuse-landing-section.module.scss';
import { IconLine } from '../../components/concrete/icon-line';
import { PrimaryLink } from '../../components/concrete/primary-link';
import { textColumn } from '../../components/layout/grid';

const iconsArray = [
	'logo-react',
	'logo-vue',
	'logo-angular',
	'logo-web-components',
	'logo-ts',
	'logo-js',
];

interface ReuseLandingProps extends HTMLAttributes<HTMLDivElement> {
	mainCta?: ReactNode;
}

export function ReuseLandingSection(props: ReuseLandingProps) {
	const { mainCta = null, ...rest } = props;

	return (
		<div
			{...rest}
			className={classNames(styles.reuseLandingSection, text.center, props.className)}
			data-bit-id="sections/reuse-landing-section"
		>
			<div>
				<div className={classNames(textColumn, marginCenter)}>
					<H1 size={PossibleSizes.sm} className={styles.headline}>
						Build better UI through indepdenent components.
					</H1>
					<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
						Bit is a better way to build and scale frontend applications through independent components.
						Increase quality, reliability, and consistency across your screens and apps.
					</Paragraph>
				</div>

				<Paragraph
					size={PossibleSizes.sm}
					element="div"
					className={classNames(styles.buttons)}
				>
					<PrimaryLink href="https://bit.dev/signup">
						<CtaButton elevation="medium">Get Started</CtaButton>
					</PrimaryLink>
					<div className={styles.spacer} />
					<PrimaryLink external href="https://docs.bit.dev/docs/quick-start">
						<PrimaryButton elevation="medium">Learn more</PrimaryButton>
					</PrimaryLink>
				</Paragraph>
				<IconLine icons={iconsArray} className={marginCenter} />
			</div>
			<div>{mainCta}</div>
		</div>
	);
}
