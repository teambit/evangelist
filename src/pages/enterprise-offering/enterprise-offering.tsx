import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { BaseImage } from '@bit/bit.base-ui.elements.image';
import { centerColumn, textColumn, wideColumn } from '@bit/bit.base-ui.layout.page-frame';
import { Card } from '@bit/bit.base-ui.surfaces.card';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { ThemedText } from '@bit/bit.base-ui.text.themed-text';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';

import { Button } from '../../elements/button';
import { H1, H2, H3, H4 } from '../../elements/heading';
import { Icon } from '../../elements/icon';
import { colorPalette } from '@bit/bit.base-ui.theme.color-palette';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { text, marginCenter, alignItems } from '@bit/bit.base-ui.layout.align';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';

import styles from './enterprise-offering.module.scss';
import { MutedText } from '@bit/bit.base-ui.text.muted-text';
import { TextSeparator } from '@bit/bit.base-ui.text.text-separator';
import { Input, TextArea } from '../../input/input';

function Hero(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<Grid
			colL={2}
			{...props}
			className={classNames(props.className, text.center, text.l.left)}
			style={{ gridGap: '74px', alignItems: 'center' }}
		>
			<div>
				<H1 size={PossibleSizes.sm}>
					<ThemedText>The Enterprise component platform</ThemedText>
				</H1>
				<Paragraph size={PossibleSizes.lg} style={{ marginBottom: '24px' }}>
					Speed delivery of applications, features, and projects while reducing costs
					and time to market. Enjoy industry-leading security, performance, and
					scalability with world-class support.
				</Paragraph>
				<Button importance="cta">Contact Sales</Button> <Button>Book intro</Button>
			</div>
			<BaseImage
				alt="compartmentalized corporate ui"
				src={'/enterprise-img/1-hero-section/hero-enterprise.svg'}
				className={marginCenter}
				style={{ height: '550px' }}
				// fullWidth
			/>
		</Grid>
	);
}

const PoweringEnterprise = (props: HTMLAttributes<HTMLDivElement>) => (
	<Grid
		colMd={2}
		{...props}
		className={classNames(props.className, text.center, text.l.left)}
		style={{ alignItems: 'center' }}
	>
		<div
			className={text.center}
			style={{
				display: 'grid',
				gridTemplate: '1fr 1fr / 1fr 1fr',
				boxShadow: 'inset -2px 0 0 0 #6c5ce7',
				height: '280px',
				alignItems: 'center',
			}}
		>
			<div>
				<div style={{ fontSize: '60px', lineHeight: '76px', fontWeight: 800 }}>50%</div>
				<MutedText>Cost Reduction</MutedText>
			</div>
			<div>
				<div
					className={classNames(colorPalette.secondary, themedText)}
					style={{ fontSize: '60px', lineHeight: '76px', fontWeight: 800 }}
				>
					10x
				</div>
				<MutedText>App Delivery</MutedText>
			</div>
			<div>
				<div
					className={classNames(colorPalette.primary, themedText)}
					style={{ fontSize: '60px', lineHeight: '76px', fontWeight: 800 }}
				>
					30x
				</div>
				<MutedText>Team Releases</MutedText>
			</div>
			<div>
				<div
					className={classNames(colorPalette.complementary, themedText)}
					style={{ fontSize: '80px', lineHeight: '76px', fontWeight: 800 }}
				>
					∞
				</div>
				<MutedText>Scale</MutedText>
			</div>
		</div>

		<div className={textColumn}>
			<H2 size={PossibleSizes.sm}>Powering enterprise app delivery</H2>
			<Paragraph>
				<MutedText>
					Bit powers your organization to build and manage reusable components to
					speed dev velocity, save costs and deliver a better user experience.
				</MutedText>
			</Paragraph>
		</div>
	</Grid>
);

const AdvantageCards = (props: HTMLAttributes<HTMLDivElement>) => (
	<div {...props}>
		<div className={classNames(textColumn, marginCenter, text.center)}>
			<H2 size={PossibleSizes.sm}>Bit enterprise</H2>
			<Paragraph size={PossibleSizes.lg}>
				<MutedText>
					Choose the best solution, features, and pricing for your enterprise.
					<br />
					Get a plan tailored for your specific needs, to boost delivery.
				</MutedText>
			</Paragraph>
		</div>

		<Grid
			colMd={2}
			style={{
				background: 'url(/enterprise-img/3-bit-enterprise/particles.svg)',
				backgroundRepeat: 'no-repeat',
				padding: '90px 78px',
				gap: '40px',
			}}
		>
			<Card
				className={colorPalette.neutral}
				style={{
					background: 'white',
					padding: '46px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<H4 size={PossibleSizes.xs} className={themedText}>
					Security and compliance
				</H4>
				<Paragraph size={PossibleSizes.sm} style={{ marginBottom: '40px' }}>
					Build with industry-leading security and compliance standards. Get tools to
					control everything from identities to advanced audit-logging.
				</Paragraph>
				<Paragraph
					size={PossibleSizes.sm}
					style={{ flexGrow: 1, marginBottom: '46px', lineHeight: 2 }}
				>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> 99.9% Uptime SLA
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> SSO SAML
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Advanced Audit
						logs
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Role-based access
						control
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Multiple-backups
						for everything
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Advanced platform
						and network security
					</div>
				</Paragraph>
				<Button importance="cta" className={styles.fullWidth}>
					Contact Sales
				</Button>
			</Card>
			<Card
				className={colorPalette.secondary}
				style={{
					background: 'white',
					padding: '46px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<H4 size={PossibleSizes.xs} className={themedText}>
					Dedicated support
				</H4>
				<Paragraph size={PossibleSizes.sm}>
					<div style={{ marginBottom: '40px' }}>
						Get engineering-level support from core maintainers with named contacts,
						quick response times and multiple escalation channels.
					</div>
				</Paragraph>
				<Paragraph
					size={PossibleSizes.sm}
					style={{ flexGrow: 1, marginBottom: '46px', lineHeight: 2 }}
				>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Dedicated, named
						Bit experts
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> 24/7 support with
						5 hour response time
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Joint Slack
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Escalation paths
						via phone, slack or email
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> SLA with 99.95%
						uptime
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Engineering-level
						support from core maintainers
					</div>
				</Paragraph>
				<Button importance="cta" className={styles.fullWidth}>
					Contact Sales
				</Button>
			</Card>
			<Card
				style={{
					background: 'white',
					padding: '46px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<H4 size={PossibleSizes.xs} className={themedText}>
					Power to build
				</H4>
				<Paragraph size={PossibleSizes.sm}>
					<div style={{ marginBottom: '40px' }}>
						Make sure you have the resources and performance to build for global
						scale. Never stop delivery, no matter what.
					</div>
				</Paragraph>
				<Paragraph
					size={PossibleSizes.sm}
					style={{ flexGrow: 1, marginBottom: '46px', lineHeight: 2 }}
				>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Auto-scaling
						concurrent builds to fit your scale
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Build minutes
						that won’t ever block your workflow
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> 99.9% Uptime SLA
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Advanced
						integrations to GitHub and Slack
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> SLA with 99.95%
						uptime
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Bit.dev web hooks
					</div>
				</Paragraph>
				<Button importance="cta" className={styles.fullWidth}>
					Contact Sales
				</Button>
			</Card>
			<Card
				className={colorPalette.impulse}
				style={{
					background: 'white',
					padding: '46px',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<H4 size={PossibleSizes.xs} className={themedText}>
					Expert consultation
				</H4>
				<Paragraph size={PossibleSizes.sm} style={{ marginBottom: '40px' }}>
					Get architectural-level review from world-class experts to review, plan and
					build your A+ component infrastructure.
				</Paragraph>
				<Paragraph
					size={PossibleSizes.sm}
					style={{ flexGrow: 1, marginBottom: '46px', lineHeight: 2 }}
				>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Architectural
						review by component experts.
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Hands-on Z-A team
						onboarding.
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Training for
						teams and leadership.
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Implementing best
						practices and workflows.
					</div>
					<div>
						<Icon of="billing-checkmark" className={themedText} /> Custom extensions
						and integrations.
					</div>
				</Paragraph>
				<Button importance="cta" className={styles.fullWidth}>
					Contact Sales
				</Button>
			</Card>
		</Grid>
	</div>
);

const ReliableAndSecure = (props: HTMLAttributes<HTMLDivElement>) => (
	<Grid colMd={2} {...props}>
		<div>
			<H2 size={PossibleSizes.sm}>Always reliable and secured</H2>
			<div>
				<BaseImage src="/enterprise-img/4-secured-section/design.svg" alt="designed" />
				<H3 size={PossibleSizes.xs}>Reliable by design</H3>
				<MutedText>
					Build with auto-scaling resources that never block you, while ensuring
					impeccable availability with a Google-grade multi-zone architecture.
				</MutedText>
			</div>
			<div>
				<BaseImage src="/enterprise-img/4-secured-section/shield.svg" alt="shield" />
				<H3 size={PossibleSizes.xs}>Always secured</H3>
				<MutedText>
					Keep your code private and secured with the highest and most advanced
					security and information standards, policies, and practices.
				</MutedText>
			</div>
			<div>
				<BaseImage src="/enterprise-img/4-secured-section/trusted.svg" alt="trusted" />
				<H3 size={PossibleSizes.xs}>Trusted by the best</H3>
				<MutedText>
					Bit’s platform is trusted by many global teams from regulated industries
					with the highest possible information security standards.
				</MutedText>
			</div>
		</div>
		<BaseImage
			src="/enterprise-img/4-secured-section/sphere-enterprise.png"
			alt="corporosphere"
			style={{ width: '500px' }}
		/>
	</Grid>
);

const EcoSystem = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<div {...props}>
			<H2 size={PossibleSizes.sm}>Rooted in your ecosystem</H2>
			<Paragraph>
				<MutedText>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta tempor
					euismod. Suspendisse dictum sed nulla in pretium.
				</MutedText>
			</Paragraph>
		</div>
	);
};

function Integrations(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<Grid
			col={3}
			colMd={5}
			colLg={7}
			{...props}
			className={classNames(props.className, styles.integrationBadges)}
		>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-asana.svg"
				alt="asana"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-jenkins.svg"
				alt="jenkins"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-aws.svg"
				alt="aws"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-azure.svg"
				alt="azure"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-bitbucket.svg"
				alt="bitbucket"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-circle.svg"
				alt="circle"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-confluence.svg"
				alt="confluence"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-github.svg"
				alt="github"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-gitlub.svg"
				alt="gitlub"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-google.svg"
				alt="google"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-jira.svg"
				alt="jira"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-netlify.svg"
				alt="netlify"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-slack.svg"
				alt="slack"
				fullWidth
			/>
			<BaseImage
				src="/enterprise-img/5-ecosystem-section/logos/logo-tavis.svg"
				alt="tavis"
				fullWidth
			/>
		</Grid>
	);
}

function ComponentAnalytics(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<Grid colSm={2} {...props} className={classNames(alignItems.center, props.className)}>
			<div>
				<H2 size={PossibleSizes.sm}>Advanced component usage analytics</H2>
				<MutedText>
					em ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta tempor
					euismod. Suspendisse dictum sed nulla in pretium.
				</MutedText>
				<div className={colorPalette.success}>
					<div>
						<ThemedText>
							<Icon of="billing-checkmark" className={themedText} />
						</ThemedText>{' '}
						Verify best-standard components for adoption
					</div>
					<div>
						<ThemedText>
							<Icon of="billing-checkmark" className={themedText} />
						</ThemedText>{' '}
						Track components and their status in every project
					</div>
					<div>
						<ThemedText>
							<Icon of="billing-checkmark" className={themedText} />
						</ThemedText>{' '}
						Get analytics and reports to control your codebase
					</div>
					<div>
						<ThemedText>
							<Icon of="billing-checkmark" className={themedText} />
						</ThemedText>{' '}
						Drive cross-team adoption of your design system
					</div>
				</div>
			</div>

			<BaseImage
				src="/enterprise-img/6-analytics/graphs-enterprise.svg"
				alt="analytics"
				fullWidth
			/>
		</Grid>
	);
}

const ExpertSupport = (props: HTMLAttributes<HTMLDivElement>) => (
	<div {...props}>
		<H2 size={PossibleSizes.md} style={{ marginBottom: '60px' }}>
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
					support channels including named contacts, joint Slack and more. Never slow
					down.
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

		<BaseImage src="/enterprise-img/7-support/characters/character-1.svg" alt="yo yo" />
		<BaseImage
			src="/enterprise-img/7-support/characters/character-2.svg"
			alt="how about slack?"
		/>
		<BaseImage src="/enterprise-img/7-support/characters/character-3.svg" alt="typing.." />
		<BaseImage
			src="/enterprise-img/7-support/characters/character-4.svg"
			alt="floating head"
		/>
		<BaseImage
			src="/enterprise-img/7-support/characters/character-5.svg"
			alt="floating head"
		/>
		<BaseImage
			src="/enterprise-img/7-support/characters/character-6.svg"
			alt="we can fix it!"
		/>
	</div>
);

const ContactSales = (props: HTMLAttributes<HTMLDivElement>) => (
	<div
		{...props}
		style={{
			background: 'url(/enterprise-img/8-form-section/particles-form.svg)',
			backgroundRepeat: 'no-repeat',
			padding: '50px 0',
			backgroundSize: '100% 100%',
			maxWidth: '692px',
		}}
	>
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
					className={styles.fullWidth}
					placeholder="Company email"
					style={{ marginBottom: '18px' }}
				/>
				<TextArea
					className={styles.fullWidth}
					placeholder="..."
					style={{ marginBottom: '18px', flexGrow: 1 }}
				/>
				<Button
					importance="cta"
					className={styles.fullWidth}
					style={{ marginBottom: '18px' }}
				>
					Contact Sales
				</Button>
				<TextSeparator style={{ marginBottom: '18px' }}>
					<MutedText>OR</MutedText>
				</TextSeparator>
				<Button importance="muted" className={styles.fullWidth}>
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

export function EnterpriseOffering(props: HTMLAttributes<HTMLDivElement>) {
	return (
		//TODO
		<div {...props} style={{ ['--separator-color' as any]: '#ededed' }}>
			<div
				style={{
					// background: 'url(enterprise-img/1-hero-section/hero-bg.svg)',
					background: '#0c0c0c', //$d70
					color: '#eceaff',
					padding: '136px 0',
				}}
			>
				<Hero className={centerColumn} />
			</div>
			<div style={{ margin: '137px 0' }}>
				<PoweringEnterprise className={centerColumn} />
			</div>
			<div
				style={{
					// background: '#ededed' //$w20
					background: 'url(/enterprise-img/3-bit-enterprise/bg-container.svg)',
					backgroundSize: 'auto 100%',
					paddingBottom: '166px',
				}}
			>
				<AdvantageCards className={centerColumn} />
			</div>
			<div>
				<ReliableAndSecure className={centerColumn} />
			</div>
			<div>
				<EcoSystem className={centerColumn} />
				<Integrations className={wideColumn} />
				<ComponentAnalytics className={centerColumn} />
			</div>
			<div
				style={{
					background: 'url(/enterprise-img/7-support/support-circuits-bg.svg)',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center 0',
					paddingTop: '284px',
				}}
			>
				<ExpertSupport
					className={classNames(textColumn, marginCenter)}
					style={{ marginBottom: '311px' }}
				/>
				<ContactSales className={classNames(marginCenter)} />
			</div>
		</div>
	);
}
