import React, { CSSProperties, HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';

import { PossibleSizes } from '../../constants/sizes';
import { H2, H3 } from '../../components/concrete/heading';
import { Label } from '../../components/base/label';
import styles from './devSection.module.scss';
import { marginCenter, text, alignItems } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';
import { zGrid } from '../../components/layout/grid-definition/z-grid';
// TODO - use label color through class instead of accentColor

export function DevSection(props: HTMLAttributes<HTMLDivElement>) {
	const accentColor = { [styles.accentVar]: '#6c5ce7' } as CSSProperties;
	return (
		<div {...props} className={classNames(text.center, props.className)} style={accentColor}>
			<Label className={classNames(styles.ctaLabel, marginCenter)}>Develop</Label>
			<H2 size={PossibleSizes.md} className={'col12'}>
				Develop components in simple decoupled codebases
			</H2>
			<Paragraph size={PossibleSizes.xl} className={classNames(styles.margin)}>
				Split the development of your frontend applications into components. Decouple
				team codebases by giving each the power to build, test, integrate and deploy
				components. Make it easier to maintain each codebase, reduce complexity and
				deliver faster.
			</Paragraph>
			<img
				alt="bit"
				src="https://static.bit.dev/homepage-bit/2-build.png"
				className={classNames(styles.margin)}
			/>

			<Grid colMd={12} className={classNames(text.left, zGrid, alignItems.center)}>
				<div className={text.left}>
					<H3 size={PossibleSizes.sm}>Simple yet scalable semantic versioning.</H3>
					<Paragraph>
						Leverage semantic versioning to control the development of each
						component. Deploy, update, or rollback specific components across
						different screens, features and apps.
					</Paragraph>
				</div>
				<img alt="bit" src="https://static.bit.dev/homepage-bit/2-simple.png" />

				<div className={text.left}>
					<H3 size={PossibleSizes.sm}>Per component development environment.</H3>
					<Paragraph>
						When writing a component, Bit spawns an development environment that
						lets you build, test and render modular components in isolation. It
						works with your favorite tools, and, it uses pre-made reusable
						configurations to save you time. Best practices included.
					</Paragraph>
				</div>
				<img alt="bit" src="https://static.bit.dev/homepage-bit/2-per.png" />
			</Grid>
		</div>
	);
}
