import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { PossibleSizes } from '../../constants/sizes';

import { Paragraph } from '../../components/base/paragraph';
import {Image} from '../../components/concrete/image';
import { IconLine } from '../../components/concrete/icon-line';
import { H1 } from '../../components/concrete/heading';
import { PrimaryButton } from '../../components/base/primary-button';
import { CtaButton } from '../../components/concrete/cta-button';

import { marginCenter } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';

import styles from './mainSection.module.scss';

const iconsArray = ['logo-react', 'logo-vue', 'logo-angular', 'logo-web-components', 'logo-node'];

export function MainSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<Grid {...props} colL={2} className={classNames(styles.mainSection, props.className)} data-bit-id="mainSection">
			<div className={classNames(styles.mainSectionContent, marginCenter)}>
				<H1 size={PossibleSizes.md}>
					A scalable way to build modern frontend applications.
				</H1>
				<Paragraph size={PossibleSizes.xxl} className={styles.paragraph}>
					Bit helps you build frontends with decoupled codebases, independent teams,
					continuous delivery, infinite reuse and so much more.
				</Paragraph>
				<div className={styles.buttons}>
					<CtaButton elevation="medium">Get started</CtaButton>
					<div style={{ height: '20px', width: '20px' }} />
					<PrimaryButton elevation="medium">Learn more</PrimaryButton>
				</div>
				<IconLine icons={iconsArray} />
			</div>

			<Image
				src="homepage-bit/1-illustration.svg"
				className={styles.img1}
				alt="bit illustration"
				fullWidth
			/>
		</Grid>
	);
}
