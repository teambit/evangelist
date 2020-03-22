import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './sync-section.module.scss';

import { fourWayGrid } from '../../components/layout/grid-presets/four-way-grid';

import { PossibleSizes } from '../../constants/sizes';
import { Image } from '../../components/concrete/image';
import { Paragraph } from '../../components/base/paragraph';

import { H2, H3 } from '../../components/concrete/heading';

import { text, alignItems, marginCenter } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';
import { textColumn } from '../../components/layout/page-frame';

export function SyncSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className, text.center)}
			data-bit-id="bit.evangelist/sections/sync-section"
		>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm}>
					Increase component reuse and consistency
				</H2>
				<Paragraph size={PossibleSizes.xl} className={classNames(styles.subtitle)}>
					Keep components up-to-date across your codebase and drive component adoption.
				</Paragraph>
			</div>

			<Grid
				colMd={12}
				className={classNames(
					text.center,
					text.sm.left,
					fourWayGrid,
					alignItems.center
				)}
			>
				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>World-class package registry</H3>
					<Paragraph>
						Use npm or yarn to Install any component from your very own blazing-fast
						private registry. Only install and get updates for the components you
						actually need.
					</Paragraph>
				</div>
				<Image
					alt="multi packagers"
					src="homepage-bit/reuse-page/packagers.png"
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Bring in the code, stay independent</H3>
					<Paragraph>
						Use Bit to bring any component’s files and setup into your local
						project. Edit, debug and change the code any way you like. Keep getting
						updates on top to stay synced.
					</Paragraph>
				</div>
				<Image
					alt="cloud code"
					src="homepage-bit/reuse-page/cloud-code.png"
					fullWidth
				/>
				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Empower everyone to share code</H3>
					<Paragraph>
						Bit makes it easy for every developer to share their components with
						your entire team. Create a collaborative workflow for reusing components
						as part of your workflow.
					</Paragraph>
				</div>
				<Image
					alt="cloud components"
					src="homepage-bit/reuse-page/cloud-scope.png"
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Easily contribute code and feedback</H3>
					<Paragraph>
						Giving feedback on single components is much easier than diving into a
						large codebase. Suggesting changes right from your local workspace is
						even better.
					</Paragraph>
				</div>
				<Image
					alt="components community"
					src="homepage-bit/reuse-page/component-community.png"
					fullWidth
				/>
			</Grid>
		</div>
	);
}
