import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';

import { Button } from '../../../elements/button';
import { H1 } from '../../../elements/heading';
import { Image } from '../../../elements/image';

import styles from './hero.module.scss';

export function Hero(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<Grid
			colL={2}
			{...props}
			className={classNames(props.className, text.center, text.l.left, styles.mainGrid)}
			// style={{ gridGap: '74px', alignItems: 'center' }}
		>
			<div>
				<H1 size={PossibleSizes.sm} className={themedText}>
					The Enterprise component platform
				</H1>
				<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
					Speed delivery of applications, features, and projects while reducing costs
					and time to market. Enjoy industry-leading security, performance, and
					scalability with world-class support.
				</Paragraph>

				<div className={styles.buttons}>
					<Button importance="cta">Contact Sales</Button>
					<div className={styles.spacer} />
					<Button>Book intro</Button>
				</div>
			</div>
			<Image
				src="enterprise-offering-v1/1-hero-section/hero-enterprise.svg"
				alt="compartmentalized corporate ui"
				className={marginCenter}
				style={{ height: '550px' }}
			/>
		</Grid>
	);
}
