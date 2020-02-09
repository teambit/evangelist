import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';

import { PossibleSizes } from '../../constants/sizes';
import { H2 } from '../../components/concrete/heading';
import { Label } from '../../components/base/label';
import styles from './fold6.module.scss';
import { brL, brMd } from '../../components/layout/grid-templates';
import { textLeft } from '../../components/layout/align';

export function Fold6(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.fold6, props.className)}>
			<Label className={styles.ctaLabel}>Deploy</Label>
			<H2 size={PossibleSizes.md}>
				Incremental deployments with first class static hosting
			</H2>
			<div className={classNames(brMd.col12, textLeft, styles.zGrid)}>
				<div>
					<H2 size={PossibleSizes.xs}>Continuously deploy components.</H2>
					<Paragraph>
						Leverage per-component CD to independently deploy components to
						production. Empower teams to consistently deliver new features and
						upgrades, end-to-end.
					</Paragraph>
				</div>

				<img
					src="https://static.bit.dev/homepage-bit/2-simple.png"
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
				<img src="https://static.bit.dev/homepage-bit/2-per.png" alt="illustration" />
			</div>

			<div className={classNames(brL.col3)}>
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
			</div>
		</div>
	);
}
