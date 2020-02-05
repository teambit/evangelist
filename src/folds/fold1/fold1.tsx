import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';

import { PossibleSizes } from '../../constants/sizes';
import { H1, H2, H5 } from '../../components/concrete/heading';
import { PrimaryButton } from '../../components/base/primary-button';
import styles from './fold1.module.scss';
import { CtaButton } from '../../components/concrete/cta-button';

export function Fold1(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.layout, props.className)}>
			<div>
				<H1 size={PossibleSizes.md}>
					A scalable way to build modern frontend applications.
				</H1>
				<Paragraph size={PossibleSizes.xxl}>
					Bit helps you build frontends with decoupled codebases, independent teams,
					continuous delivery, infinite reuse and so much more.
				</Paragraph>
				<CtaButton className={styles.ctaButton}>Get started</CtaButton>
				<PrimaryButton>Learn more</PrimaryButton>
				{/* <GithubLink href="ss" className={styles.communityLink}></GithubLink> */}
			</div>
			<img
				src="https://static.bit.dev/homepage-bit/1-illustration.svg"
				className={styles.img1}
				alt="bit illustration"
			/>
			{/* <span className={styles.asset}></span> */}
		</div>
	);
}
