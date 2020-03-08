import React, { PureComponent, HTMLAttributes, ReactNode } from 'react';
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
import { HybridPerfectSync } from '../../sections/hybrid-perfect-sync';
import { AutoDocs } from '../../sections/auto-docs';
import { IndependentTeams } from '../../sections/independent-teams';
import { TalkToExperts } from '../../sections/talk-to-experts';

interface HybridHomepageProps extends HTMLAttributes<HTMLDivElement> {
	communityCollections?: ReactNode;
	mainCta?: ReactNode;
	githubStars?: number;
}

export class HybridHomepage extends PureComponent<HybridHomepageProps> {
	render() {
		const { communityCollections = null, mainCta, githubStars, ...rest } = this.props;

		return (
			<div {...rest}>
				<div
					className={classNames(
						styles.purpleBackground,
						styles.purpleFold,
						styles.margin180
					)}
				>
					<ReuseLandingSection
						className={classNames(styles.landingSection, centerColumn)}
						mainCta={mainCta}
					/>

					{communityCollections}
				</div>

				<EnterpriseSection className={classNames(centerColumn, styles.margin130)} />

				<CarouselSection />

				<div className={styles.uEllipse}></div>

				<div
					className={classNames(
						styles.greyBackground,
						styles.topSpace130,
						styles.margin130
					)}
				>
					<BookingBreakdown className={classNames(centerColumn, styles.margin130)} />

					<ComponentsAdvantages
						className={classNames(centerColumn, styles.margin130)}
					/>
				</div>

				<SyncSection className={classNames(centerColumn, styles.margin180)} />

				<TalkToExperts className={classNames(centerColumn, styles.margin80)} />

				<div className={classNames(styles.greyBackground)}>
					<HybridPerfectSync
						className={classNames(
							centerColumn,
							styles.topSpace180,
							styles.margin130
						)}
					/>
				</div>

				<AutoDocs className={classNames(centerColumn, styles.topSpace130)} />

				<div className={classNames(styles.greyBackground)}>
					<IndependentTeams
						className={classNames(
							centerColumn,
							styles.topSpace130,
							styles.margin80
						)}
					/>
				</div>

				<CommunitySection
					className={classNames(centerColumn, styles.topSpace130, styles.margin130)}
					githubStars={githubStars}
				/>

				<CtaSection className={classNames(centerColumn, styles.margin130)} />
			</div>
		);
	}
}
