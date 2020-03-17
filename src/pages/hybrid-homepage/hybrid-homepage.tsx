import React, { PureComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './hybrid-homepage.module.scss';

import { CarouselSection } from '../../sections/carouselSection';
import { CtaSection } from '../../sections/cta';
import { centerColumn, wideColumn } from '../../components/layout/page-frame';

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
					/>

					{mainCta}
				</div>

				{communityCollections}

				<EnterpriseSection className={classNames(centerColumn, styles.foldMargin)} />

				<CarouselSection className={classNames(wideColumn)} />

				<div className={styles.uEllipse}></div>

				<div
					className={classNames(
						styles.greyBackground,
						styles.greyBgPadding,
						styles.foldMargin
					)}
				>
					<BookingBreakdown className={classNames(centerColumn, styles.foldMargin)} />

					<ComponentsAdvantages className={classNames(centerColumn)} />
				</div>

				<SyncSection className={classNames(centerColumn, styles.foldMargin)} />

				<TalkToExperts className={classNames(centerColumn, styles.foldMargin)} />

				<div
					className={classNames(
						styles.greyBackground,
						styles.greyBgPadding,
						styles.foldMargin
					)}
				>
					<HybridPerfectSync className={classNames(centerColumn)} />
				</div>

				<AutoDocs className={classNames(centerColumn, styles.foldMargin)} />

				<div
					className={classNames(
						styles.greyBackground,
						styles.greyBgPadding,
						styles.foldMargin
					)}
				>
					<IndependentTeams className={classNames(centerColumn)} />
				</div>

				<CommunitySection
					className={classNames(centerColumn, styles.foldMargin)}
					githubStars={githubStars}
				/>

				<CtaSection className={classNames(centerColumn, styles.foldMargin)} />
			</div>
		);
	}
}
