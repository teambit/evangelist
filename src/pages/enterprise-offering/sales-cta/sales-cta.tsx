import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Card } from '@bit/bit.base-ui.surfaces.card';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { MutedText, mutedText } from '@bit/bit.base-ui.text.muted-text';
import { TextSeparator } from '@bit/bit.base-ui.text.text-separator';
import { fullWidth, marginCenter } from '@bit/bit.base-ui.layout.align';

import { Button } from '../../../elements/button';
import { H4 } from '../../../elements/heading';
import { Input, TextArea } from '../../../input/input';

import styles from './sales-cta.module.scss';
import { margin } from '../spacing';

export const SalesCta = (props: HTMLAttributes<HTMLDivElement>) => (
	<div {...props} className={classNames(styles.particlesBg, props.className)}>
		<Card className={classNames(styles.formCard, marginCenter)}>
			<form onSubmit={(e) => e.preventDefault()}>
				<H4 size={PossibleSizes.xs}>Get in touch</H4>
				<MutedText className={margin[30]}>
					Our expert team will get in touch with you shortly!
				</MutedText>

				<Input className={fullWidth} placeholder="Company email" />

				<TextArea className={fullWidth} placeholder="..." />

				<Button importance="cta" className={fullWidth}>
					Contact Sales
				</Button>

				<TextSeparator className={classNames(mutedText, styles.separator)}>
					OR
				</TextSeparator>

				<Button importance="muted" className={fullWidth}>
					Book intro
				</Button>
			</form>
		</Card>

		<div className={styles.particlesContainer}>
			<div className={styles.redParticle} />
		</div>
	</div>
);
