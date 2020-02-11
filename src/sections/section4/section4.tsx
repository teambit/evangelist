import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';

import { PossibleSizes } from '../../constants/sizes';
import { H2, H5 } from '../../components/concrete/heading';
import { fullWidth } from '../../components/layout/grid';
import styles from './section4.module.scss';
import { text } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';

export function Section4(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.section4, text.center, props.className)}>
			<H2 size={PossibleSizes.md}>Empower autonomous teams to build together</H2>
			<Paragraph>
				Empower teams to own, build and deliver frontends end-to-end….
			</Paragraph>

			<img
				src="https://static.bit.dev/homepage-bit/3-empower.png"
				className={classNames(fullWidth, styles.centerImage)}
				alt="illustration"
			/>

			<Grid colL={3} className={text.left}>
				<div>
					<H5 size={PossibleSizes.xxs}>Assign team ownerships.</H5>
					<Paragraph>
						Distribute frontends between teams though scopes of components. Each
						team and build, own and maintain their components from idea to
						production.
					</Paragraph>
				</div>

				<div>
					<H5 size={PossibleSizes.xxs}>Empower independent delivery.</H5>
					<Paragraph>
						Empower each team to innovate in fast-paced delivery cycles. Let smaller
						teams make decisions and relentlessly drive towards their goals to
						deliver better results.
					</Paragraph>
				</div>

				<div>
					<H5 size={PossibleSizes.xxs}>Make it easy to collaborate.</H5>
					<Paragraph>
						Make it easy for every developer to harvest and share their components.
						Increase usage and adoption of components in a collaborative ecosystem
						to gain UI consistency.
					</Paragraph>
				</div>
			</Grid>
		</div>
	);
}
