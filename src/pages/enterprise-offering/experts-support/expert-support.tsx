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
					World-class support by hands-on experts
				</H2>

				<Card className={styles.card}>
					<MutedText className={styles.timestamp}>10:30</MutedText>
					<H4 size={PossibleSizes.xxs}>Response-time SLA</H4>
					<Paragraph className={mutedText}>
						Guarantee fast response times and availability through personal support
						channels to ensure your team never slows down delivery.
					</Paragraph>
				</Card>
				<Card className={styles.card}>
					<MutedText className={styles.timestamp}>10:31</MutedText>
					<H4 size={PossibleSizes.xxs}>Named contacts and escalation paths</H4>
					<Paragraph className={mutedText}>
						Enjoy personal support from dedicated experts that you can reach anytime
						you need. And, add multiple escalation paths to your arsenal just in
						case.
					</Paragraph>
				</Card>
				<Card className={styles.card}>
					<MutedText className={styles.timestamp}>10:32</MutedText>
					<H4 size={PossibleSizes.xxs}>Expert review and training</H4>
					<Paragraph className={mutedText}>
						Get architectural-level consultation from industry leading experts and
						hands-on training for best practices and personalized workflows.
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
