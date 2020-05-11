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

type HeroProps = {
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

export function Hero(props: HeroProps) {
	return (
		<Grid
			colL={2}
			{...props}
			className={classNames(props.className, text.center, text.l.left, styles.mainGrid)}
		>
			<div className={classNames(styles.content)}>
				<H1 size={PossibleSizes.sm} className={themedText}>
					The enterprise component platform
				</H1>
				<Paragraph size={PossibleSizes.lg} className={styles.paragraph}>
					Let your components drive web application delivery at global scale. Enjoy
					world-class performance, security and support every step of the way.
				</Paragraph>

				<div className={styles.buttons}>
					<a href="/contact-sales?redirectUri=%2Fenterprise">
						<Button importance="cta">Contact Sales</Button>
					</a>
					<div className={styles.spacer} />
					<Button onClick={props.onBookMeeting}>Book Intro</Button>
				</div>
			</div>
			<Image
				src="enterprise-offering-v1/1-hero-section/hero-enterprise.svg"
				alt="compartmentalized corporate ui"
				className={classNames(marginCenter, styles.image)}
			/>
		</Grid>
	);
}
