import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { PossibleSizes } from '../../constants/sizes';

import { Paragraph } from '../../components/base/paragraph';
import { H2 } from '../../components/concrete/heading';
import { Label } from '../../components/base/label';
import { Image } from '../../components/concrete/image';

import { Grid } from '../../components/layout/grid-component';
import { zGrid } from '../../components/layout/grid-definition/z-grid';
import { text, justifyItems, alignItems } from '../../components/layout/align';

import styles from './deploySection.module.scss';

export function DeploySection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(styles.deploySection, props.className)}
			data-bit-id="deploySection"
		>
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

				<Image src="homepage-bit/deploy-independently.png" alt="illustration" fullWidth />

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
				<Image src="homepage-bit/fearlessly-deploy.png" alt="illustration" fullWidth />
			</Grid>
			<Grid colMd={12} className={classNames(text.left, zGrid, alignItems.center, styles.singleGrid)}>
				<div>
					<H2 size={PossibleSizes.xs}>Continuously deploy components.</H2>
					<Paragraph>
						Leverage per-component CD to independently deploy components to
						production. Empower teams to consistently deliver new features and
						upgrades, end-to-end.
					</Paragraph>
				</div>

				<Image src="homepage-bit/map.png" alt="illustration" fullWidth />
			</Grid>
		</div>
	);
}
