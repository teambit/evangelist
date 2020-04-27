import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { textColumn } from '@bit/bit.base-ui.layout.page-frame';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { colorPalette } from '@bit/bit.base-ui.theme.color-palette';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { text } from '@bit/bit.base-ui.layout.align';
import { MutedText } from '@bit/bit.base-ui.text.muted-text';

import { H2 } from '../../../elements/heading';

import styles from './powering-enterprise.module.scss';

export const PoweringEnterprise = (props: HTMLAttributes<HTMLDivElement>) => (
	<div
		{...props}
		className={classNames(props.className, text.center, text.l.left, styles.poweringEnterprise)}
	>
		<CrunchTheNumbers />

		<div className={styles.separator}></div>

		<div className={textColumn}>
			<H2 size={PossibleSizes.sm}>Deliver scalable apps, fast.</H2>
			<Paragraph>
				<MutedText>
					Bit powers your organization to build and manage reusable components to
					speed dev velocity, save costs and deliver a better user experience.
				</MutedText>
			</Paragraph>
		</div>
	</div>
);

function CrunchTheNumbers() {
	return (
		<div className={classNames(text.center, styles.crunchTheNumbers)}>
			<div>
				<div
					style={{
						fontSize: '60px',
						lineHeight: '76px',
						fontWeight: 800,
					}}
				>
					50%
				</div>
				<MutedText>Cost Reduction</MutedText>
			</div>
			<div>
				<div
					className={classNames(colorPalette.secondary, themedText)}
					style={{
						fontSize: '60px',
						lineHeight: '76px',
						fontWeight: 800,
					}}
				>
					10x
				</div>
				<MutedText>App Delivery</MutedText>
			</div>
			<div>
				<div
					className={classNames(colorPalette.primary, themedText)}
					style={{
						fontSize: '60px',
						lineHeight: '76px',
						fontWeight: 800,
					}}
				>
					30x
				</div>
				<MutedText>Team Releases</MutedText>
			</div>
			<div>
				<div
					className={classNames(colorPalette.complementary, themedText)}
					style={{
						fontSize: '80px',
						lineHeight: '76px',
						fontWeight: 800,
					}}
				>
					∞
				</div>
				<MutedText>Scale</MutedText>
			</div>
		</div>
	);
}
