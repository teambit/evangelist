import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './hybrid-perfect-sync.module.scss';

import { fourWayGrid } from '../../components/layout/grid-definition/four-way-grid';

import { PossibleSizes } from '../../constants/sizes';
import { Image } from '../../components/concrete/image';
import { Paragraph } from '../../components/base/paragraph';

import { H2, H3 } from '../../components/concrete/heading';

import { text, alignItems } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';

export function HybridPerfectSync(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className, text.center)}
			data-bit-id="sections/hybrid-perfect-syncs"
		>
			<H2 size={PossibleSizes.sm}>Keep apps and teams in perfect sync.</H2>

			<Paragraph size={PossibleSizes.lg} className={styles.subtitle}>
				Bit helps your team collaborate to make sure every application and every
				teammate can effortlessly get and adopt the latest updates. And, it integrates
				with tools you love like GitHub and Slack to keep everyone in perfect sync.
			</Paragraph>

			<Grid
				colMd={12}
				className={classNames(
					text.center,
					text.md.left,
					fourWayGrid,
					alignItems.center
				)}
			>
				<div>
					<H3 size={PossibleSizes.xs}>Get frequent relevant updates</H3>
					<Paragraph>
						No more bloated or irrelevant updates. Constantly get focused and
						meaningful updates only for components you use in your apps.
					</Paragraph>
				</div>
				<Image
					alt="multi packagers"
					src="homepage-bit/example-010.png"
					fullWidth
				/>

				<div>
					<H3 size={PossibleSizes.xs}>Run every component through isolated CI</H3>
					<Paragraph>
						Let Bit.dev build and test every new component or version in full
						isolation to ensure it’s safe to use and integrate.
					</Paragraph>
				</div>
				<Image alt="cloud code" src="homepage-bit/comp-build-flow.png" fullWidth />
				<div>
					<H3 size={PossibleSizes.xs}>Keep repos synced with GitHub integrations</H3>
					<Paragraph>
						Automatically get GitHub PRs with all the latest component updates, to
						all your repos. Make sure all your projects are always in sync.
					</Paragraph>
				</div>
				<Image
					alt="cloud components"
					src="homepage-bit/automated-GitHub-Updates.png"
					fullWidth
				/>

				<div>
					<H3 size={PossibleSizes.xs}>Keep people synced with Slack integrations</H3>
					<Paragraph>
						Get automated Slack notifications on new components, version and
						updates. Make it easy for everyone on your team to stay synced.
					</Paragraph>
				</div>
				<Image
					alt="components community"
					src="homepage-bit/slack-integration.png"
					fullWidth
				/>
			</Grid>
		</div>
	);
}
