import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';

import { PossibleSizes } from '../../constants/sizes';
import { H2, H3 } from '../../components/concrete/heading';
import { Label } from '../../components/base/label';
import { text, justifyItems, marginCenter } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';
import { fourGrid } from '../../components/layout/grid-definition/four-grid';
import { Image } from '../../components/concrete/image';

import styles from './buildSection.module.scss';
import { textColumn } from '../../components/layout/grid';

export function BuildSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className)}
			data-bit-id="sections/build-section"
		>
			<Label className={styles.ctaLabel}>Build</Label>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.md}>Hyper fast Incrementall component builds</H2>
				<Paragraph>
					Increase productivity with a powerful CI/CD process for every component.
					Constantly build and test changes to components to see results. Continuously
					integrate, deploy and deliver new component versions from concept to
					production. Deliver faster.
				</Paragraph>
			</div>

			<Image
				src="homepage-bit/4-integrate.png"
				alt="illustration"
				className={classNames(styles.centerImg)}
				fullWidth
			/>
			<Grid
				colL={4}
				className={classNames(text.left, justifyItems.center, fourGrid, styles.grid)}
			>
				<div className={styles.iconBox}>
					<Image
						src="homepage-bit/icn-x-faster.svg"
						alt="illustration"
						className={styles.icon}
					/>
					<H3 size={PossibleSizes.xxs}>Automatically propagate liability updates</H3>
					<Paragraph>
						Distribute frontends between teams though scopes of components. Each
						team and build, own and maintain their components from idea to
						production.
					</Paragraph>
				</div>

				<div className={styles.iconBox}>
					<Image
						src="homepage-bit/icn-integration.svg"
						alt="illustration"
						className={styles.icon}
					/>
					<H3 size={PossibleSizes.xxs}>Automatically propagate liability updates</H3>
					<Paragraph>
						Distribute frontends between teams though scopes of components. Each
						team and build, own and maintain their components from idea to
						production.
					</Paragraph>
				</div>

				<div className={styles.iconBox}>
					<Image
						src="homepage-bit/icn-updates.svg"
						alt="illustration"
						className={styles.icon}
					/>
					<H3 size={PossibleSizes.xxs}>Pinpoint issues to components</H3>
					<Paragraph>
						Empower each team to innovate in fast-paced delivery cycles. Let smaller
						teams make decisions and relentlessly drive towards their goals to
						deliver better results.
					</Paragraph>
				</div>
				<div className={styles.iconBox}>
					<Image
						src="homepage-bit/icn-control.svg"
						alt="illustration"
						className={styles.icon}
					/>
					<H3 size={PossibleSizes.xxs}>Hyper-fast build time</H3>
					<Paragraph>
						Make it easy for every developer to harvest and share their components.
						Increase usage and adoption of components in a collaborative ecosystem
						to gain UI consistency.
					</Paragraph>
				</div>
			</Grid>
		</div>
	);
}
