import classNames from 'classnames';
import React, { HTMLAttributes } from 'react';

import { alignItems } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { MutedText } from '@bit/bit.base-ui.text.muted-text';
import { ThemedText, themedText } from '@bit/bit.base-ui.text.themed-text';
import { colorPalette } from '@bit/bit.base-ui.theme.color-palette';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';

import { H2 } from '../../../elements/heading';
import { Icon } from '../../../elements/icon';
import { Image } from '../../../elements/image';

export function ComponentAnalytics(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<Grid colSm={2} {...props} className={classNames(alignItems.center, props.className)}>
			<div>
				<H2 size={PossibleSizes.sm}>Advanced component usage analytics</H2>
				<MutedText>
					em ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta tempor
					euismod. Suspendisse dictum sed nulla in pretium.
				</MutedText>
				<div className={colorPalette.success}>
					<div>
						<ThemedText>
							<Icon of="billing-checkmark" className={themedText} />
						</ThemedText>{' '}
						Verify best-standard components for adoption
					</div>
					<div>
						<ThemedText>
							<Icon of="billing-checkmark" className={themedText} />
						</ThemedText>{' '}
						Track components and their status in every project
					</div>
					<div>
						<ThemedText>
							<Icon of="billing-checkmark" className={themedText} />
						</ThemedText>{' '}
						Get analytics and reports to control your codebase
					</div>
					<div>
						<ThemedText>
							<Icon of="billing-checkmark" className={themedText} />
						</ThemedText>{' '}
						Drive cross-team adoption of your design system
					</div>
				</div>
			</div>

			<Image
				src="enterprise-offering-v1/6-analytics/graphs-enterprise.svg?v=2"
				alt="analytics"
				fullWidth
			/>
		</Grid>
	);
}
