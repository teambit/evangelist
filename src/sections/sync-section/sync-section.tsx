import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './sync-section.module.scss';

import { fourWayGrid } from '../../components/layout/grid-definition/four-way-grid';

import { PossibleSizes } from '../../constants/sizes';
import { Image } from '../../components/concrete/image';
import { Paragraph } from '../../components/base/paragraph';

import { H2, H3 } from '../../components/concrete/heading';

import { text, alignItems } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';

export function SyncSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className, text.center)}
			data-bit-id="sections/sync-section"
		>
			<H2 size={PossibleSizes.sm}>
				Reuse any component off the cloud.
				<br />
				Package or code, it’s your choice.
			</H2>
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
						Use npm or yarn to Install any component from a blazing-fast private
						registry. Only install and get updates for the components you actually
						need.
					</Paragraph>
				</div>
				<Image
					alt="multi packagers"
					src="homepage-bit/reuse-page/packagers.png"
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Reuse components, stay independent</H3>
					<Paragraph>
						Bit lets you tag every component with a semantic version. Unlock the mix
						composition of components, release meaningful component updates, and
						take modular control over changes to components and their dependents
						across screens and applications.
					</Paragraph>
				</div>
				<Image
					alt="cloud code"
					src="homepage-bit/reuse-page/cloud-code.png"
					fullWidth
				/>
				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Sync repos with GitHub integrations</H3>
					<Paragraph>
						Bit lets everyone isolate and export components right from any project
						they’re working on. Creating a new component? Share it with your team as
						part of your workflow.
					</Paragraph>
				</div>
				<Image
					alt="cloud components"
					src="homepage-bit/reuse-page/cloud-scope.png"
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Sync people with Slack integrations</H3>
					<Paragraph>
						Giving feedback on single components is much easier than diving into a
						large codebase. Suggesting changes right from your local workspace is
						even simpler.
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
