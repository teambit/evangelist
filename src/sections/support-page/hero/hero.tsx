import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { mutedText } from '@bit/bit.base-ui.text.muted-text';

import { Button } from '../../../elements/button';
import { H1 } from '../../../elements/heading';
import { Image } from '../../../elements/image';

import styles from './hero.module.scss';

type HeroProps = {
	/** handles 'book meeting' call to action */
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Opening section for the Enterprise offering page.
 * @name EcoSystem
 */
export function Hero(props: HeroProps) {
	const { onBookMeeting, ...rest } = props;

	return (
		<Grid
			colL={2}
			{...rest}
			data-bit-id="bit.evangelist/sections/enterprise-offering/hero"
			className={classNames(props.className, text.center, text.l.left, styles.mainGrid)}
		>
			<div className={classNames(styles.content)}>
				<H1 size={PossibleSizes.sm}>
					Support
				</H1>
				<Paragraph size={PossibleSizes.lg} className={classNames(styles.paragraph, mutedText)}>
					Let your components drive web application delivery at global scale. Enjoy
					world-class performance, security and support every step of the way.
				</Paragraph>

				<div className={styles.buttons}>
					<a href="/contact-sales?redirectUri=%2Fenterprise">
						<Button className={styles.button} importance="cta">Contact Sales</Button>
					</a>
					<div className={styles.spacer} />
					<Button className={styles.button} onClick={props.onBookMeeting}>Book Intro</Button>
				</div>
			</div>
			<Image
				src="support-page/Illustrations/hero-section.svg"
				alt="compartmentalized corporate ui"
				className={classNames(marginCenter, styles.image)}
			/>
		</Grid>
	);
}
