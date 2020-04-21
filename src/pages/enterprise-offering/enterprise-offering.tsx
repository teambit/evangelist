import React, { HTMLAttributes } from 'react';
import { Card } from '@bit/bit.base-ui.surfaces.card';
import { Button } from '../../elements/button';
import { centerColumn } from '@bit/bit.base-ui.layout.page-frame';
import { H1, H2, H3 } from '../../elements/heading';
import { ThemedText } from '@bit/bit.base-ui.text.themed-text';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { Icon } from '../../elements/icon';
import { Separator } from '@bit/bit.base-ui.elements.separator';

export function EnterpriseOffering(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props}>
			<div style={{ background: 'black', color: '#eceaff' }}>
				<Section className={centerColumn}>
					<H1 size={PossibleSizes.sm}>
						<ThemedText>The Enterprise component platform</ThemedText>
					</H1>
					<Paragraph size={PossibleSizes.lg}>
						Speed delivery of applications, features, and projects while reducing
						costs and time to market. Enjoy industry-leading security, performance,
						and scalability with world-class support.
					</Paragraph>
					<Button importance="cta">Contact Sales</Button> <Button>Book intro</Button>
					<div>image</div>
				</Section>
			</div>
			<div>
				[ gray background ]
				<Section className={centerColumn}>
					<div>image</div>
					<div>50% Cost reduction</div>
					<div>10x App Delivery</div>
					<div>30x Team Releases</div>
					<div>∞ Scale</div>

					<Separator />

					<H2 size={PossibleSizes.sm}>Powering enterprise app delivery</H2>
					<Paragraph>
						<MutedText>
							Bit powers your organization to build and manage reusable components
							to speed dev velocity, save costs and deliver a better user
							experience.
						</MutedText>
					</Paragraph>
				</Section>
				<Section className={centerColumn}>
					<H2 size={PossibleSizes.sm}>Bit enterprise</H2>
					<Paragraph size={PossibleSizes.lg}>
						<MutedText>
							Choose the best solution, features, and pricing for your enterprise.
							Get a plan tailored for your specific needs, to boost delivery.
						</MutedText>
					</Paragraph>
					<Card style={{ ['--base-color' as any]: 'black' }}>
						<H3 size={PossibleSizes.xs}>Security and compliance</H3>
						<Paragraph size={PossibleSizes.sm}>
							<div>
								Build with industry-leading security and compliance standards.
								Get tools to control everything from identities to advanced
								audit-logging.
							</div>

							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>
								99.9% Uptime SLA
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>
								SSO SAML
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>
								Advanced Audit logs
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>
								Role-based access control
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>
								Multiple-backups for everything
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>
								Advanced platform and network security
							</div>
						</Paragraph>
						<Button importance="cta">Contact Sales</Button>
					</Card>
					<Card style={{ ['--base-color' as any]: '#3d5afe' }}>
						{' '}
						{/* $b60 */}
						<H3 size={PossibleSizes.xs}>Dedicated support</H3>
						<Paragraph size={PossibleSizes.sm}>
							<div>
								Get engineering-level support from core maintainers with named
								contacts, quick response times and multiple escalation channels.
							</div>

							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Dedicated, named Bit experts
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								24/7 support with 5 hour response time
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Joint Slack
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Escalation paths via phone, slack or email
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								SLA with 99.95% uptime
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Engineering-level support from core maintainers
							</div>
						</Paragraph>
						<Button importance="cta">Contact Sales</Button>
					</Card>
					<Card style={{ ['--base-color' as any]: '#5d4aec' }}>
						{' '}
						{/* $p60 */}
						<H3 size={PossibleSizes.xs}>Power to build</H3>
						<Paragraph size={PossibleSizes.sm}>
							<div>
								Make sure you have the resources and performance to build for
								global scale. Never stop delivery, no matter what.
							</div>

							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Auto-scaling concurrent builds to fit your scale
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Build minutes that won’t ever block your workflow
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								99.9% Uptime SLA
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Advanced integrations to GitHub and Slack
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								SLA with 99.95% uptime
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Bit.dev web hooks
							</div>
						</Paragraph>
						<Button importance="cta">Contact Sales</Button>
					</Card>
					<Card style={{ ['--base-color' as any]: '#f83d6c' }}>
						{' '}
						{/* $pink50 */}
						<H3 size={PossibleSizes.xs}>Expert consultation</H3>
						<Paragraph size={PossibleSizes.sm}>
							<div>
								Get architectural-level review from world-class experts to
								review, plan and build your A+ component infrastructure.
							</div>

							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Architectural review by component experts.
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Hands-on Z-A team onboarding.
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Training for teams and leadership.
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Implementing best practices and workflows.
							</div>
							<div>
								<ThemedText>
									<Icon of="billing-checkmark" />
								</ThemedText>{' '}
								Custom extensions and integrations.
							</div>
						</Paragraph>
						<Button importance="cta">Contact Sales</Button>
					</Card>
				</Section>
			</div>
			<div>
				[ white background ]
				<Section className={centerColumn}>
					<H2 size={PossibleSizes.sm}>Always reliable and secured</H2>
					<Bullet>
						<H3 size={PossibleSizes.xs}>Reliable by design</H3>
						<MutedText>
							Build with auto-scaling resources that never block you, while
							ensuring impeccable availability with a Google-grade multi-zone
							architecture.
						</MutedText>
					</Bullet>
					<Bullet>
						<H3 size={PossibleSizes.xs}>Always secured</H3>
						<MutedText>
							Keep your code private and secured with the highest and most
							advanced security and information standards, policies, and
							practices.
						</MutedText>
					</Bullet>
					<Bullet>
						<H3 size={PossibleSizes.xs}>Trusted by the best</H3>
						<MutedText>
							Bit’s platform is trusted by many global teams from regulated
							industries with the highest possible information security standards.
						</MutedText>
					</Bullet>
				</Section>
			</div>
			<div>
				[ gray background ]
				<Section className={centerColumn}>
					<H2 size={PossibleSizes.sm}>Rooted in your ecosystem</H2>
					<MutedText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta
						tempor euismod. Suspendisse dictum sed nulla in pretium.
					</MutedText>
				</Section>
				<Section className={centerColumn}>
					<H2 size={PossibleSizes.sm}>Advanced component usage</H2>
					<MutedText>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta
						tempor euismod. Suspendisse dictum sed nulla in pretium.
					</MutedText>
					<div style={{ ['--base-color' as any]: '#37b26c' }}>
						<div>
							<ThemedText>
								<Icon of="billing-checkmark" />
							</ThemedText>{' '}
							Verify best-standard components for adoption
						</div>
						<div>
							<ThemedText>
								<Icon of="billing-checkmark" />
							</ThemedText>{' '}
							Track components and their status in every project
						</div>
						<div>
							<ThemedText>
								<Icon of="billing-checkmark" />
							</ThemedText>{' '}
							Get analytics and reports to control your codebase
						</div>
						<div>
							<ThemedText>
								<Icon of="billing-checkmark" />
							</ThemedText>{' '}
							Drive cross-team adoption of your design system
						</div>
					</div>
				</Section>
				<Section className={centerColumn}>
					[radar background]
					<H2 size={PossibleSizes.md}>
						Enjoy world-class support and hands-on experts
					</H2>
					<Card>
						<MutedText>10:30</MutedText>
						<H3 size={PossibleSizes.xxs}>Response-time SLA</H3>
						<Paragraph>
							<MutedText>
								Enjoy industry-leading response times and availability through
								multiple support channels including named contacts, joint Slack
								and more. Never slow down.
							</MutedText>
						</Paragraph>
					</Card>
					<Card>
						<MutedText>10:31</MutedText>
						<H3 size={PossibleSizes.xxs}>Named contacts with escalation paths</H3>
						<MutedText>
							Get named Bit experts with your success as their personal goal, and
							enjoy multiple escalation paths vis email, chat and phone.
						</MutedText>
					</Card>
					<Card>
						<MutedText>10:32</MutedText>
						<H3 size={PossibleSizes.xxs}>Expert review and training</H3>
						<MutedText>
							Get architectural-level consultation from industry-leading experts
							and enjoy hands-on team training and onboarding with best practices
							and personalized workflows.
						</MutedText>
					</Card>
				</Section>
				<Section className={centerColumn}>
					[quantic background]
					<Card>
						<H3 size={PossibleSizes.xxs}>Contact our sales team</H3>
						<MutedText>
							Our expert team will get in touch with you shortly!
						</MutedText>
						<form>
							<input placeholder="Company email" />
							<br />
							<input placeholder="..." />
							<br />
							<Button importance="cta">Contact Sales</Button>
							<TextfulSeparator>OR</TextfulSeparator>
							<Button>Book intro</Button>
						</form>
					</Card>
				</Section>
			</div>
		</div>
	);
}

function Section(props: any) {
	return <div {...props} />;
}

function Bullet(props: any) {
	return <div {...props} />;
}

function TextfulSeparator(props: any) {
	return <div {...props} />;
}

//css component
function MutedText(props: any) {
	return <div {...props} style={{ color: '#6c707c' }} />; //$d40
}
