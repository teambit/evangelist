import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { textColumn } from '@bit/bit.base-ui.layout.page-frame';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { colorPalette } from '@bit/bit.base-ui.theme.color-palette';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { text } from '@bit/bit.base-ui.layout.align';
import { MutedText, mutedText } from '@bit/bit.base-ui.text.muted-text';

import { H2 } from '../../../elements/heading';

import styles from './powering-enterprise.module.scss';

/**
 * A section showing a summery of the Bit enterprise solution.
 * @name PoweringEnterprise
 */
export const PoweringEnterprise = (props: HTMLAttributes<HTMLDivElement>) => (
	<div
		{...props}
		data-bit-id="bit.evangelist/sections/enterprise-offering/powering-enterprise"
		className={classNames(
			props.className,
			text.center,
			text.l.left,
			styles.poweringEnterprise
		)}
	>
		<CrunchTheNumbers />

		<div className={styles.separator}></div>

		<div className={textColumn}>
			<H2 size={PossibleSizes.sm}>Powering application delivery at scale</H2>
			<Paragraph size={PossibleSizes.xl} className={mutedText}>
				Bit enterprise lets you build and ship modern web applications at scale. It
				empowers global teams to build faster and better with components.
			</Paragraph>
		</div>
	</div>
);

function CrunchTheNumbers() {
	return (
		<div className={classNames(text.center, styles.crunchTheNumbers)}>
			<div>
				<div className={styles.emphasized}>35%</div>
				<MutedText>Cost Reduction</MutedText>
			</div>
			<div className={colorPalette.secondary}>
				<div className={classNames(themedText, styles.emphasized)}>10x</div>
				<MutedText>Feature delivery</MutedText>
			</div>
			<div className={colorPalette.primary}>
				<div className={classNames(themedText, styles.emphasized)}>30x</div>
				<MutedText>Team Releases</MutedText>
			</div>
			<div className={colorPalette.complementary}>
				<div className={classNames(themedText, styles.xtraEmpthasized)}>∞</div>
				<MutedText>Scale</MutedText>
			</div>
		</div>
	);
}
