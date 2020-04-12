import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';

import styles from './independent-teams.module.scss';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { textColumn } from '@bit/bit.base-ui.layout.page-frame';

import { H2, H5 } from '../../elements/heading';
import { Image } from '../../elements/image';

/**
 * @name IndependentTeams
 * @description
 * A section of static content, showing how different teams can collaborate together while still keeping a separation of concerns.
 * Assumes the consuming component to supply className with width and other styles.
 */

export function IndependentTeams(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(props.className)}
			data-bit-id="bit.evangelist/sections/independent-teams"
		>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm} className={text.center}>
					Build together. Stay independent.
				</H2>
				<Paragraph className={classNames(text.center, styles.subtitle)}>
					Create a truly scalable infrastructure for everyone to build, adopt and
					integrate components. Empower teams to independently deliver while building
					together.
				</Paragraph>
			</div>

			<Image
				alt="teams breakdown"
				src="homepage-bit/assets/multi-scope.png"
				fullWidth
				className={styles.mainImage}
			/>

			<Grid colL={3} className={classNames(text.left, styles.benefitsGrid)}>
				<div className={styles.benefit}>
					<H5 size={PossibleSizes.xxs}>Own your components.</H5>
					<Paragraph>
						Autonomously maintain your team’s independent scope of components.
					</Paragraph>
				</div>

				<div className={styles.benefit}>
					<H5 size={PossibleSizes.xxs}>Integrate with everyone.</H5>
					<Paragraph>
						Expose and adopt shared component APIs to build frontends together.
					</Paragraph>
				</div>

				<div className={styles.benefit}>
					<H5 size={PossibleSizes.xxs}>Stay independent.</H5>
					<Paragraph>
						Keep your team fully autonomous to independently deliver new things.
					</Paragraph>
				</div>
			</Grid>
		</div>
	);
}
