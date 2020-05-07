import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import { alignItems } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { mutedText } from '@bit/bit.base-ui.text.muted-text';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { colorPalette } from '@bit/bit.base-ui.theme.color-palette';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';

import { H2 } from '../../../elements/heading';
import { Icon } from '../../../elements/icon';
import { Image } from '../../../elements/image';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';

import styles from './component-analytics.module.scss';
import { margin } from '../spacing';

export function ComponentAnalytics(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={styles.scrollPreventer}>
			<Grid
				{...props}
				className={classNames(alignItems.center, props.className, styles.customGrid)}
			>
				<div>
					<H2 size={PossibleSizes.sm}>Advanced component usage analytics</H2>
					<Paragraph
						className={classNames(mutedText, margin[30])}
						size={PossibleSizes.lg}
					>
						Track and learn exactly which components are used, in which version, in
						which project. Take control over components across the enterprise
						codebase.
					</Paragraph>

					<ul className={classNames(colorPalette.success, styles.list)}>
						<li>
							<Icon of="billing-checkmark" className={themedText} />
							Track component usage across projects and teams
						</li>
						<li>
							<Icon of="billing-checkmark" className={themedText} />
							Drive and monitor the adoption of changes
						</li>
						<li>
							<Icon of="billing-checkmark" className={themedText} />
							Verify and distribute best-standard components
						</li>
						<li>
							<Icon of="billing-checkmark" className={themedText} />
							Ensure visual consistency
						</li>
					</ul>
				</div>

				<div className={styles.imgContainer}>
					<Image
						src="enterprise-offering-v1/6-analytics/graphs-enterprise.svg?v=4"
						alt="analytics"
					/>
				</div>
			</Grid>
		</div>
	);
}
