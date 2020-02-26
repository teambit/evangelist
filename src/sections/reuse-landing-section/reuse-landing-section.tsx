import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { PossibleSizes } from '../../constants/sizes';

import { Paragraph } from '../../components/base/paragraph';
// import { Image } from '../../components/concrete/image';
// import { IconLine } from '../../components/concrete/icon-line';
import { H1 } from '../../components/concrete/heading';
import { PrimaryButton } from '../../components/base/primary-button';
import { CtaButton } from '../../components/concrete/cta-button';
import { Label } from '../../components/base/label';

import { marginCenter, justifyItems } from '../../components/layout/align';
// import { Grid } from '../../components/layout/grid-component';

import styles from './reuse-landing-section.module.scss';
import { ThemedText } from '../../components/base/themed-text';

// const iconsArray = [
// 	'logo-react',
// 	'logo-vue',
// 	'logo-angular',
// 	'logo-web-components',
// 	'logo-ts',
// 	'logo-js',
// ];

export function ReuseLandingSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.reuseLandingSection, props.className)}>
			<Label className={marginCenter}>
				Reuse
			</Label>
			<H1 size={PossibleSizes.md}>
				The reusable component ecosystem for{' '}
				<ThemedText>modern applications</ThemedText>
			</H1>
			<Paragraph size={PossibleSizes.xxl} className={styles.paragraph}>
				Bit is a scalable and collaborative way to reuse components. It’s everything you
				need from local development to cross-project integrations. Get your own private
				component
			</Paragraph>
			<div className={classNames(styles.buttons)}>
				<CtaButton elevation="medium">Reuse your components</CtaButton>
				<div style={{ height: '20px', width: '20px' }} />
				<PrimaryButton elevation="medium">Explore the community</PrimaryButton>
			</div>
			{/* <IconLine icons={iconsArray} /> */}
		</div>

		// <Grid {...props} colL={2} className={classNames(styles.mainSection, props.className)} data-bit-id="mainSection">

		// {/* <Image
		// 	src="homepage-bit/1-illustration.svg"
		// 	className={styles.img1}
		// 	alt="bit illustration"
		// 	fullWidth
		// /> */}
		// </Grid>
	);
}
