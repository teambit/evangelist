import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Card } from '@bit/bit.base-ui.surfaces.card';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { MutedText, mutedText } from '@bit/bit.base-ui.text.muted-text';
import { text, marginCenter } from '@bit/bit.base-ui.layout.align';

import { H2, H4 } from '../../../elements/heading';
import { Image } from '../../../elements/image';
import { margin } from '../spacing';

import styles from './expert-support.module.scss';

export const ExpertSupport = (props: HTMLAttributes<HTMLDivElement>) => (
	<div className={styles.preventOverflow}>
		<div {...props} className={classNames(styles.container, props.className)}>
			<div className={classNames(styles.mainContent, marginCenter)}>
				<H2 size={PossibleSizes.md} className={classNames(text.center, margin[50])}>
					Enjoy world-class support and hands-on experts
				</H2>

				<Card className={styles.card}>
					<MutedText className={styles.timestamp}>10:30</MutedText>
					<H4 size={PossibleSizes.xxs}>Response-time SLA</H4>
					<Paragraph className={mutedText}>
						Enjoy industry-leading response times and availability through multiple
						support channels including named contacts, joint Slack and more. Never
						slow down.
					</Paragraph>
				</Card>
				<Card className={styles.card}>
					<MutedText className={styles.timestamp}>10:31</MutedText>
					<H4 size={PossibleSizes.xxs}>Named contacts with escalation paths</H4>
					<Paragraph className={mutedText}>
						Get named Bit experts with your success as their personal goal, and
						enjoy multiple escalation paths vis email, chat and phone.
					</Paragraph>
				</Card>
				<Card className={styles.card}>
					<MutedText className={styles.timestamp}>10:32</MutedText>
					<H4 size={PossibleSizes.xxs}>Expert review and training</H4>
					<Paragraph className={mutedText}>
						Get architectural-level consultation from industry-leading experts and
						enjoy hands-on team training and onboarding with best practices and
						personalized workflows.
					</Paragraph>
				</Card>
			</div>

			<div className={styles.chatHeads}>
				<Image
					className={styles.chatHead01}
					src="enterprise-offering-v1/7-support/characters/character-1.svg"
					alt="yo yo"
				/>
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
		</div>
	</div>
);
