import React, { HTMLAttributes } from 'react';

import { Card } from '@bit/bit.base-ui.surfaces.card';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { MutedText } from '@bit/bit.base-ui.text.muted-text';
import { text } from '@bit/bit.base-ui.layout.align';

import { H2, H4 } from '../../../elements/heading';
import { Image } from '../../../elements/image';

export const ExpertSupport = (props: HTMLAttributes<HTMLDivElement>) => (
	<div {...props}>
		<div style={{ maxWidth: '490px', margin: 'auto' }}>
			<H2
				size={PossibleSizes.md}
				style={{ marginBottom: '60px' }}
				className={text.center}
			>
				Enjoy world-class support and hands-on experts
			</H2>

			<Card
				style={{
					background: 'white',
					marginBottom: '18px',
					padding: '24px',
					borderRadius: '20px',
				}}
			>
				<div style={{ marginBottom: '7px' }}>
					<MutedText>10:30</MutedText>
				</div>
				<H4 size={PossibleSizes.xxs}>Response-time SLA</H4>
				<Paragraph>
					<MutedText>
						Enjoy industry-leading response times and availability through multiple
						support channels including named contacts, joint Slack and more. Never
						slow down.
					</MutedText>
				</Paragraph>
			</Card>
			<Card
				style={{
					background: 'white',
					marginBottom: '18px',
					padding: '24px',
					borderRadius: '20px',
				}}
			>
				<div style={{ marginBottom: '7px' }}>
					<MutedText>10:31</MutedText>
				</div>
				<H4 size={PossibleSizes.xxs}>Named contacts with escalation paths</H4>
				<MutedText>
					Get named Bit experts with your success as their personal goal, and enjoy
					multiple escalation paths vis email, chat and phone.
				</MutedText>
			</Card>
			<Card
				style={{
					background: 'white',
					marginBottom: '18px',
					padding: '24px',
					borderRadius: '20px',
				}}
			>
				<div style={{ marginBottom: '7px' }}>
					<MutedText>10:32</MutedText>
				</div>
				<H4 size={PossibleSizes.xxs}>Expert review and training</H4>
				<MutedText>
					Get architectural-level consultation from industry-leading experts and enjoy
					hands-on team training and onboarding with best practices and personalized
					workflows.
				</MutedText>
			</Card>
		</div>

		<Image src="enterprise-offering-v1/7-support/characters/character-1.svg" alt="yo yo" />
		<Image
			src="enterprise-offering-v1/7-support/characters/character-2.svg"
			alt="how about slack?"
		/>
		<Image
			src="enterprise-offering-v1/7-support/characters/character-3.svg"
			alt="typing.."
		/>
		<Image
			src="enterprise-offering-v1/7-support/characters/character-4.svg"
			alt="floating head"
		/>
		<Image
			src="enterprise-offering-v1/7-support/characters/character-5.svg"
			alt="floating head"
		/>
		<Image
			src="enterprise-offering-v1/7-support/characters/character-6.svg"
			alt="we can fix it!"
		/>
	</div>
);
