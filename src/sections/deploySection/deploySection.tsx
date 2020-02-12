import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';

import { PossibleSizes } from '../../constants/sizes';
import { H2 } from '../../components/concrete/heading';
import { Label } from '../../components/base/label';
import styles from './deploySection.module.scss';
import { text, justifyItems, alignItems } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';
import { zGrid } from '../../components/layout/grid-definition/z-grid';

export function DeploySection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.deploySection, props.className)}>
			<Label className={styles.ctaLabel}>Deploy</Label>
			<H2 size={PossibleSizes.md}>
				Incremental deployments with first class static hosting
			</H2>
			<Grid colMd={12} className={classNames(text.left, zGrid, alignItems.center)}>
				<div>
					<H2 size={PossibleSizes.xs}>Continuously deploy components.</H2>
					<Paragraph>
						Leverage per-component CD to independently deploy components to
						production. Empower teams to consistently deliver new features and
						upgrades, end-to-end.
					</Paragraph>
				</div>

				<img
					src="https://static.bit.dev/homepage-bit/4-deploy.png"
					alt="illustration"
				/>

				<div>
					<H2 size={PossibleSizes.xs}>
						Constantly deliver upgrades, hotfixes and rollbacks.
					</H2>
					<Paragraph>
						Empower frontend teams to deliver and innovate in short effective
						cycles. Give each team the power to dynamically upgrade, hotfix or
						rollback any part of your UI on its own.
					</Paragraph>
				</div>
				<img
					src="https://static.bit.dev/homepage-bit/4-deliver.png"
					alt="illustration"
				/>
			</Grid>

			<Grid colMd={3} className={classNames(text.left, justifyItems.center)}>
				<div className={styles.iconBlock}>
					<img
						src="https://static.bit.dev/homepage-bit/icn-1.svg"
						className={styles.icon}
						alt="safe"
					/>
					<H2 size={PossibleSizes.xxs}>First-class static hosting</H2>
					<Paragraph size={PossibleSizes.xs}>
						Empower frontend teams to deliver and innovate in short effective
						cycles.
					</Paragraph>
				</div>
				<div className={styles.iconBlock}>
					<img
						src="https://static.bit.dev/homepage-bit/icn-2.svg"
						className={styles.icon}
						alt="cloud"
					/>
					<H2 size={PossibleSizes.xxs}>Hyper-fast component CDN</H2>
					<Paragraph size={PossibleSizes.xs}>
						Empower frontend teams to deliver and innovate in short effective
						cycles.
					</Paragraph>
				</div>
				<div className={styles.iconBlock}>
					<img
						src="https://static.bit.dev/homepage-bit/icn-3.svg"
						className={styles.icon}
						alt="globe"
					/>
					<H2 size={PossibleSizes.xxs}>SSL and everything else built-in</H2>
					<Paragraph size={PossibleSizes.xs}>
						Empower frontend teams to deliver and innovate in short effective
						cycles.
					</Paragraph>
				</div>
			</Grid>
		</div>
	);
}
