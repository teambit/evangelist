import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';

import { PossibleSizes } from '../../constants/sizes';
import { H1, H2, H5 } from '../../components/concrete/heading';
import { Label } from '../../components/base/label';
import styles from './fold6.module.scss';
import { brL, grid22 } from '../../components/layout/grid-templates';
import { textLeft, contentLeft, contentRight } from '../../components/layout/align';

export function Fold6(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.fold6, props.className)}>
			<Label className={styles.ctaLabel}>Develop</Label>
			<H2 size={PossibleSizes.md}>
				Incremental deployments with first class static hosting
			</H2>
			<div className={classNames(grid22, textLeft, styles.grid)}>
				<div className={classNames(styles.contentLeft, contentLeft)}>
					<H2 size={PossibleSizes.xs}>Continuously deploy components.</H2>
					<Paragraph>
						Leverage per-component CD to independently deploy components to
						production. Empower teams to consistently deliver new features and
						upgrades, end-to-end.
					</Paragraph>
				</div>

				<img src="https://static.bit.dev/homepage-bit/2-simple.png" />

				<div className={classNames(/* styles.content, */ contentRight)}>
					<H2 size={PossibleSizes.xs}>
						Constantly deliver upgrades, hotfixes and rollbacks.
					</H2>
					<Paragraph>
						Empower frontend teams to deliver and innovate in short effective
						cycles. Give each team the power to dynamically upgrade, hotfix or
						rollback any part of your UI on its own.
					</Paragraph>
				</div>
				<img src="https://static.bit.dev/homepage-bit/2-per.png" />
			</div>
		</div>
	);
}
