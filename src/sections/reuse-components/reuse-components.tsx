import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './reuse-components.module.scss';

import { fourWayGrid } from '@bit/bit.base-ui.layout.grid-presets.four-way-grid';

import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { text, alignItems, marginCenter } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { textColumn } from '@bit/bit.base-ui.layout.page-frame';

import { Image } from '../../elements/image';
import { H2, H3 } from '../../elements/heading';

/**
 * @name ReuseComponents
 * @description
 * A static section, showing how bit can be used to share and sync code between projects and people.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function ReuseComponents(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className, text.center)}
			data-bit-id="bit.evangelist/sections/reuse-components"
		>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm}>Increase component reuse and consistency</H2>
				<Paragraph size={PossibleSizes.xl} className={classNames(styles.subtitle)}>
					Keep components up-to-date across your codebase and drive component
					adoption.
				</Paragraph>
			</div>

			<Grid
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
