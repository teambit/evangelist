import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';
import { IconLine } from '../../components/concrete/icon-line';
import { PossibleSizes } from '../../constants/sizes';
import { H1 } from '../../components/concrete/heading';
import { PrimaryButton } from '../../components/base/primary-button';
import styles from './fold1.module.scss';
import { CtaButton } from '../../components/concrete/cta-button';
import { brL } from '../../components/layout/grid-templates';
import { marginCenter } from '../../components/layout/align';

const iconsArray = ['react', 'vue1', 'angular', 'web-components', 'node'];

export function Fold1(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.fold1, brL.col2, props.className)}>
			<div className={classNames(styles.fold1Content, marginCenter)}>
				<H1 size={PossibleSizes.md}>
					A scalable way to build modern frontend applications.
				</H1>
				<Paragraph size={PossibleSizes.xxl} className={styles.paragraph}>
					Bit helps you build frontends with decoupled codebases, independent teams,
					continuous delivery, infinite reuse and so much more.
				</Paragraph>
				<div className={styles.buttons}>
					<CtaButton className={styles.ctaButton}>Get started</CtaButton>
					<PrimaryButton>Learn more</PrimaryButton>
				</div>
				<IconLine icons={iconsArray} />
			</div>

			<img
				src="https://static.bit.dev/homepage-bit/1-illustration.svg"
				className={styles.img1}
				alt="bit illustration"
			/>
		</div>
	);
}
