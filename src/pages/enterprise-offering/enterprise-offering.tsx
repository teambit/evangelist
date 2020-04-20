import React, { HTMLAttributes } from 'react';
import { Card } from '@bit/bit.base-ui.surfaces.card';
import { Button } from '../../elements/button';
import { centerColumn } from '@bit/bit.base-ui.layout.page-frame';

export function EnterpriseOffering(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props}>
			<div>
				[ purple background ]
				<Section className={centerColumn}>
					The Enterprise component platform
					<div>image</div>
				</Section>
			</div>
			<div>
				[ gray background ]
				<Section className={centerColumn}>
					<div>image</div>
					Powering enterprise app delivery
				</Section>
				<Section className={centerColumn}>
					Bit enterprise
					<Card>Security and compliance</Card>
					<Card>Dedicated support</Card>
					<Card>Power to build</Card>
					<Card>Expert consultation</Card>
				</Section>
			</div>
			<div>
				[ white background ]
				<Section className={centerColumn}>
					Always reliable and secured
					<Bullet>
						Reliable by design
						<p>
							Build with auto-scaling resources that never block you, while
							ensuring impeccable availability with a Google-grade multi-zone
							architecture.
						</p>
					</Bullet>
					<Bullet>
						Always secured
						<p>
							Keep your code private and secured with the highest and most
							advanced security and information standards, policies, and
							practices.
						</p>
					</Bullet>
					<Bullet>
						Trusted by the best
						<p>
							Bit’s platform is trusted by many global teams from regulated
							industries with the highest possible information security standards.
						</p>
					</Bullet>
				</Section>
			</div>
			<div>
				[ gray background ]
				<Section className={centerColumn}>
					<div>Rooted in your ecosystem</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta
						tempor euismod. Suspendisse dictum sed nulla in pretium.
					</p>
				</Section>
				<Section className={centerColumn}>
					Advanced component usage
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porta
						tempor euismod. Suspendisse dictum sed nulla in pretium.
					</p>
					<div>Verify best-standard components for adoption</div>
					<div>Track components and their status in every project</div>
					<div>Get analytics and reports to control your codebase</div>
					<div>Drive cross-team adoption of your design system</div>
				</Section>
				<Section className={centerColumn}>
					[radar background]
					<div>Enjoy world-class support and hands-on experts</div>
					<Card>
						<div>10:30</div>
						<div>Response-time SLA</div>
						<div>
							Enjoy industry-leading response times and availability through
							multiple support channels including named contacts, joint Slack and
							more. Never slow down.
						</div>
					</Card>
					<Card>
						<div>10:31</div>
						<div>Named contacts with escalation paths</div>
						<div>
							Get named Bit experts with your success as their personal goal, and
							enjoy multiple escalation paths vis email, chat and phone.
						</div>
					</Card>
					<Card>
						<div>10:32</div>
						<div>Expert review and training</div>
						<div>
							Get architectural-level consultation from industry-leading experts
							and enjoy hands-on team training and onboarding with best practices
							and personalized workflows.
						</div>
					</Card>
				</Section>
				<Section className={centerColumn}>
					[quantic background]
					<Card>
						<div>Contact our sales team</div>
						<div>Our expert team will get in touch with you shortly!</div>
						<form>
							<input placeholder="Company email" />
							<input placeholder="..." />
							<Button>Contact Sales</Button>
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
