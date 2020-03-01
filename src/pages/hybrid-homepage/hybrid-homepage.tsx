import React, { PureComponent, CSSProperties } from 'react';
import classNames from 'classnames';

import styles from './hybrid-homepage.module.scss';

import { CarouselSection } from '../../sections/carouselSection';
import { CtaSection } from '../../sections/cta';
import { centerColumn } from '../../components/layout/grid';

import { ReuseLandingSection } from '../../sections/reuse-landing-section';
import { EnterpriseSection } from '../../sections/enterprise-section/enterprise-section';
import { SyncSection } from '../../sections/sync-section';
import { BookingBreakdown } from '../../sections/booking-breakdown';
import { CommunitySection } from '../../sections/community';
import { ComponentsAdvantages } from '../../sections/component-advantages';
import { HybridPerfectSync } from '../../sections/hybrid-perferct-sync';
import { AutoDocs } from '../../sections/auto-docs';
import { IndependentTeams } from '../../sections/independent-teams';

export class HybridHomage extends PureComponent {
	render() {
		return (
			<div>
				<div className={styles.purpleBackground}>
					<ReuseLandingSection
						className={classNames(styles.landingSection, centerColumn)}
					/>

					<div className={classNames(centerColumn, styles.padding80)}>
						From the community
						{/* components carousel.. */}
					</div>
				</div>

				<EnterpriseSection className={classNames(centerColumn, styles.padding80)} />

				<CarouselSection className={classNames(styles.padding80)} />

				<div className={classNames(styles.greyBackground)}>
					<BookingBreakdown className={classNames(centerColumn, styles.padding80)} />

					<ComponentsAdvantages
						className={classNames(centerColumn, styles.padding80)}
					/>
				</div>

				<SyncSection className={centerColumn} />
				<CtaSection
					className={classNames(centerColumn, styles.ctaSection)}
					title="Exploring component reuse? Talk to world experts"
				>
					We help the best teams reuse components together. Get in touch with our
					expert architects to find the best solution for your team!
				</CtaSection>

				<div className={classNames(styles.greyBackground)}>
					<HybridPerfectSync className={classNames(centerColumn, styles.padding80)} />
				</div>

				<AutoDocs className={classNames(centerColumn, styles.padding80)} />

				<div className={classNames(styles.greyBackground)}>
					<IndependentTeams className={classNames(centerColumn, styles.padding80)} />
				</div>

				<CommunitySection className={classNames(centerColumn)} />

				<CtaSection className={classNames(centerColumn, styles.ctaSection)} />
			</div>
		);
	}
}
