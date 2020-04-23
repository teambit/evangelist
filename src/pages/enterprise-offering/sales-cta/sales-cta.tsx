import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Card } from '@bit/bit.base-ui.surfaces.card';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { MutedText } from '@bit/bit.base-ui.text.muted-text';
import { TextSeparator } from '@bit/bit.base-ui.text.text-separator';
import { fullWidth } from '@bit/bit.base-ui.layout.align';

import { Button } from '../../../elements/button';
import { H4 } from '../../../elements/heading';
import { Input, TextArea } from '../../../input/input';

import styles from './sales-cta.module.scss';

export const SalesCta = (props: HTMLAttributes<HTMLDivElement>) => (
	<div {...props} className={classNames(styles.particlesBg, props.className)}>
		<Card
			style={{
				margin: 'auto',
				background: 'white',
				//specific
				width: '490px',
				height: '553px',
				padding: '40px 61px 55px',
			}}
		>
			<form
				onSubmit={(e) => e.preventDefault()}
				style={{
					fontSize: '14px',
					display: 'flex',
					flexDirection: 'column',
					height: '100%',
				}}
			>
				<H4 size={PossibleSizes.xs}>Contact our sales team</H4>
				<MutedText style={{ marginBottom: '40px' }}>
					Our expert team will get in touch with you shortly!
				</MutedText>
				<Input
					className={fullWidth}
					placeholder="Company email"
					style={{ marginBottom: '18px' }}
				/>
				<TextArea
					className={fullWidth}
					placeholder="..."
					style={{ marginBottom: '18px', flexGrow: 1 }}
				/>
				<Button importance="cta" className={fullWidth} style={{ marginBottom: '18px' }}>
					Contact Sales
				</Button>

				<TextSeparator
					style={{ marginBottom: '18px', ['--separator-color' as any]: '#ededed' }}
				>
					<MutedText>OR</MutedText>
				</TextSeparator>
				<Button importance="muted" className={fullWidth}>
					Book intro
				</Button>
			</form>
		</Card>
		<div style={{ width: '490px', margin: 'auto', position: 'relative' }}>
			<div
				style={{
					width: '36px',
					height: '36px',
					background: 'rgba(248, 61, 108, 0.7)',
					borderRadius: '2px',
					position: 'absolute',
					bottom: '-18px',
					right: '-18px',
				}}
			/>
		</div>
	</div>
);
