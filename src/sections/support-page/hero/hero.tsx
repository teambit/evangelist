import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { mutedText } from '@bit/bit.base-ui.text.muted-text';
import { links } from '../../../content/links';
import { IconLine } from '../../../elements/icon-line';
import { Link } from '../../../elements/link';

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
			colMd={2}
			{...rest}
			data-bit-id="bit.evangelist/sections/enterprise-offering/hero"
			className={classNames(props.className, text.center, text.md.left, styles.mainGrid)}
		>
			<div className={classNames(styles.content)}>
				<H1 size={PossibleSizes.sm}>Support</H1>
				<Paragraph
					size={PossibleSizes.lg}
					className={classNames(styles.paragraph, mutedText)}
				>
					As developers, we know what it means to get great support at the right time.
					We got you covered.
				</Paragraph>

				<div className={styles.buttons}>
					<Link href="/contact-sales?redirectUri=%2Fenterprise">
						<Button className={styles.button} importance="cta">
							Get support
						</Button>
					</Link>
					<div className={styles.spacer} />
					<Link external href={`${links.docs}`}>
						<Button className={styles.button}>
							View docs
						</Button>
					</Link>
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
