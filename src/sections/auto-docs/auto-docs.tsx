import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { PossibleSizes } from '../../constants/sizes';

import { Paragraph } from '../../components/base/paragraph';
import { H2 } from '../../components/concrete/heading';
import { Image } from '../../components/concrete/image';

import { Grid } from '../../components/layout/grid-component';
import { zGrid } from '../../components/layout/grid-definition/z-grid';
import { text, alignItems } from '../../components/layout/align';

export function AutoDocs(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(props.className)}>
			<H2 size={PossibleSizes.md} className={text.center}>
				Let Bit maintain your docs.
				<br />
				Easily organize and discover components.
			</H2>
			<Paragraph className={text.center}>
				Forget about maintaing additional docs, websites, wikis, and tools. Bit makes
				sure every single component is documneted, organized and discoverable at any
				scale. Let Bit Maintain your docs. Easily Organize and discover components.
			</Paragraph>
			<Grid colMd={12} className={classNames(text.left, zGrid, alignItems.center)}>
				<div>
					<H2 size={PossibleSizes.xs}>Meet the best component explorer ever</H2>
					<Paragraph>
						Looking for a React button component with up to 30kb bundle-size, styled
						with styled-components, and tested with Jest? No problem.
					</Paragraph>
				</div>

				<Image src="homepage-bit/5-orginze.png" alt="components search" fullWidth />

				<div>
					<H2 size={PossibleSizes.xs}>Write code, get stunning docs</H2>
					<Paragraph>
						With Bit, you can focus on writing code and watch how every compoent’s
						documentation is generated, updated and maintained automatically. Have a
						coffee.
					</Paragraph>
				</div>
				<Image src="homepage-bit/button-docs.png" alt="generated docs" fullWidth />
			</Grid>
			<Grid colMd={12} className={classNames(text.left, zGrid, alignItems.center)}>
				<div>
					<H2 size={PossibleSizes.xs}>
						Try components in a hot-reloading playground
					</H2>
					<Paragraph>
						The best way to learn code works is to try it hands-on. Bit’s
						hot-reloading playground lets you quickly learn how any component works,
						save examples and more.
					</Paragraph>
				</div>

				<Image src="homepage-bit/playground.png" alt="playground" fullWidth />
			</Grid>
		</div>
	);
}
