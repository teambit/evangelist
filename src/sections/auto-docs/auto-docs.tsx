import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './auto-docs.module.scss';

import { PossibleSizes } from '../../constants/sizes';

import { Paragraph } from '../../components/base/paragraph';
import { H2, H3 } from '../../components/concrete/heading';
import { Image } from '../../components/concrete/image';

import { Grid } from '../../components/layout/grid-component';
import { zGrid, halfZGrid } from '../../components/layout/grid-definition/z-grid';
import { text, alignItems, marginCenter } from '../../components/layout/align';
import { textColumn } from '../../components/layout/grid';

export function AutoDocs(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className, styles.autoDocs)}
			data-bit-id="sections/auto-docs"
		>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm} className={text.center}>
					Keep everything organized.
					<br />
					Documentation? Don’t sweat it.
				</H2>

				<Paragraph
					size={PossibleSizes.lg}
					className={classNames(text.center, styles.subtitle)}
				>
					Forget about maintaining additional docs, websites, wikis, and tools. Bit
					makes sure every single component is documented, organized and discoverable
					at any scale.
				</Paragraph>
			</div>

			<Grid colMd={12} className={classNames(text.left, zGrid, alignItems.center)}>
				<div>
					<H3 size={PossibleSizes.xs}>The most advanced component explorer ever</H3>
					<Paragraph>
						Looking for a React button component with up to 30kb bundle-size, styled
						with styled-components, and tested with Jest? Easy, just hit "search".
					</Paragraph>
				</div>

				<Image src="homepage-bit/5-orginze.png" alt="components search" fullWidth />

				<div>
					<H3 size={PossibleSizes.xs}>Write code, get stunning docs</H3>
					<Paragraph>
						With Bit, you can focus on writing code and watch how every component’s
						documentation is generated, updated and maintained automatically. Have a
						coffee.
					</Paragraph>
				</div>
				<Image src="homepage-bit/button-docs.png" alt="generated docs" fullWidth />
			</Grid>
			<Grid colMd={12} className={classNames(text.left, halfZGrid, alignItems.center, styles.singleGrid)}>
				<div>
					<H3 size={PossibleSizes.xs}>Play with examples hands-on</H3>
					<Paragraph>
						The best way to experience a component is to try it hands-on. Bit’s
						hot-reloading playground lets you quickly learn how components work and
						save examples.
					</Paragraph>
				</div>

				<Image src="homepage-bit/playground.png" alt="playground" fullWidth />
			</Grid>
		</div>
	);
}
