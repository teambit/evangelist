import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { marginCenter, text, fullWidth } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { textColumn } from '@bit/bit.base-ui.layout.page-frame';
import { Card } from '@bit/bit.base-ui.surfaces.card';
import { MutedText } from '@bit/bit.base-ui.text.muted-text';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { colorPalette } from '@bit/bit.base-ui.theme.color-palette';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';

import { Button } from '../../../elements/button';
import { H2, H4 } from '../../../elements/heading';
import { Icon } from '../../../elements/icon';

import styles from './advantage-cards.module.scss';

export const AdvantageCards = (props: HTMLAttributes<HTMLDivElement>) => (
	<div {...props}>
		<div className={classNames(textColumn, marginCenter, text.center)}>
			<H2 size={PossibleSizes.sm}>Get Bit enterprise</H2>
			<Paragraph size={PossibleSizes.lg}>
				<MutedText>
					Choose the best solution, features, and pricing for your enterprise.
					<br />
					Get a plan tailored for your specific needs, to boost delivery.
				</MutedText>
			</Paragraph>
		</div>

		<Grid colMd={2} className={styles.cardsGrid}>
			<Card className={classNames(colorPalette.neutral, styles.card)}>
				<H4 size={PossibleSizes.xs} className={themedText}>
					Security and compliance
				</H4>
				<Paragraph size={PossibleSizes.sm} style={{ marginBottom: '40px' }}>
					Build with industry-leading security and compliance standards. Get tools to
					control everything from identities to advanced audit-logging.
				</Paragraph>

				<ul className={styles.bullets}>
					<li>
						<Icon of="billing-checkmark" className={themedText} />{' '}
						<span>99.9% Uptime SLA</span>
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> SSO SAML
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Advanced Audit
						logs
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Role-based access
						control
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Multiple-backups
						for everything
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Advanced platform
						and network security
					</li>
				</ul>
				<Button importance="cta" className={fullWidth}>
					Contact Sales
				</Button>
			</Card>

			<Card className={classNames(colorPalette.secondary, styles.card)}>
				<H4 size={PossibleSizes.xs} className={themedText}>
					Dedicated support
				</H4>
				<Paragraph size={PossibleSizes.sm} style={{ marginBottom: '40px' }}>
					Get engineering-level support from core maintainers with named contacts,
					quick response times and multiple escalation channels.
				</Paragraph>

				<ul className={styles.bullets}>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Dedicated, named
						Bit experts
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> 24/7 support with
						5 hour response time
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Joint Slack
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Escalation paths
						via phone, slack or email
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> SLA with 99.95%
						uptime
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Engineering-level
						support from core maintainers
					</li>
				</ul>
				<Button importance="cta" className={fullWidth}>
					Contact Sales
				</Button>
			</Card>

			<Card className={classNames(colorPalette.primary, styles.card)}>
				<H4 size={PossibleSizes.xs} className={themedText}>
					Power to build
				</H4>
				<Paragraph size={PossibleSizes.sm} style={{ marginBottom: '40px' }}>
					Make sure you have the resources and performance to build for global scale.
					Never stop delivery, no matter what.
				</Paragraph>

				<ul className={styles.bullets}>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Auto-scaling
						concurrent builds to fit your scale
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Build minutes
						that won’t ever block your workflow
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> 99.9% Uptime SLA
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Advanced
						integrations to GitHub and Slack
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> SLA with 99.95%
						uptime
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Bit.dev web hooks
					</li>
				</ul>
				<Button importance="cta" className={fullWidth}>
					Contact Sales
				</Button>
			</Card>

			<Card className={classNames(colorPalette.impulse, styles.card)}>
				<H4 size={PossibleSizes.xs} className={themedText}>
					Expert consultation
				</H4>
				<Paragraph size={PossibleSizes.sm} style={{ marginBottom: '40px' }}>
					Get architectural-level review from world-class experts to review, plan and
					build your A+ component infrastructure.
				</Paragraph>
				<ul className={styles.bullets}>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Architectural
						review by component experts.
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Hands-on Z-A team
						onboarding.
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Training for
						teams and leadership.
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Implementing best
						practices and workflows.
					</li>
					<li>
						<Icon of="billing-checkmark" className={themedText} /> Custom extensions
						and integrations.
					</li>
				</ul>
				<Button importance="cta" className={fullWidth}>
					Contact Sales
				</Button>
			</Card>
		</Grid>
	</div>
);
