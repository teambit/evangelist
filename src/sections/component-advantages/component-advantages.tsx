import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './component-advantages.module.scss';

import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { text, alignItems } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { fourWayGrid } from '@bit/bit.base-ui.layout.grid-presets.four-way-grid';

import { Image } from '../../elements/image';
import { H3 } from '../../elements/heading';



/**
 * @name ComponentsAdvantages
 * @description
 * A section detailing the advantages of components, their isolation, and interoperability between projects.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function ComponentsAdvantages(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className)}
			data-bit-id="bit.evangelist/sections/component-advantages"
		>
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
					<H3 size={PossibleSizes.xs}>Dynamic component workspace</H3>
					<Paragraph>
						Get a modular workspace where you can dynamically develop, add and
						remove components to compose your apps.
					</Paragraph>
				</div>
				<Image
					alt="editor with component"
					src="homepage-bit/editor-logo-comp.png"
					className={styles.img}
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Smart per-component versioning</H3>
					<Paragraph>
						Enjoy simple yet scalable semantic versioning per component, with smart
						automatic dependency definitions and management.
					</Paragraph>
				</div>
				<Image
					alt="smart versioning"
					src="homepage-bit/example-008.png"
					className={styles.img}
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Reusable dev environments</H3>
					<Paragraph>
						Apply pre-made reusable environments to develop, build, test and render
						each component in full isolation. Best practices included.
					</Paragraph>
				</div>
				<Image
					alt="dev tools integrations"
					src="homepage-bit/devtools.png"
					className={styles.img}
					fullWidth
				/>

				<div className={styles.text}>
					<H3 size={PossibleSizes.xs}>Goodbye configuration files</H3>
					<Paragraph>
						Say goodbye to painful config files, and let Bit handle them for you.
						Want control? Use overrides to quickly apply changes across many
						components.
					</Paragraph>
				</div>
				<Image
					alt="goodbye conf files"
					src="homepage-bit/goodbye-configuration-files.png"
					className={styles.img}
					fullWidth
				/>
			</Grid>
		</div>
	);
}
