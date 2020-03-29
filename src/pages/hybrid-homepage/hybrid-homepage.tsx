import React, { PureComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './hybrid-homepage.module.scss';

import { CarouselSection } from '../../sections/carouselSection';
import { CtaSection } from '../../sections/cta';
import { centerColumn, wideColumn } from '@bit/bit.base.layout.page-frame';

import { ReuseLandingSection } from '../../sections/reuse-landing-section';
import { EnterpriseSection } from '../../sections/enterprise-section';
import { SyncSection } from '../../sections/sync-section';
import { BookingBreakdown } from '../../sections/booking-breakdown';
import { CommunitySection } from '../../sections/community';
import { ComponentsAdvantages } from '../../sections/component-advantages';
import { HybridPerfectSync } from '../../sections/hybrid-perfect-sync';
import { AutoDocs } from '../../sections/auto-docs';
import { IndependentTeams } from '../../sections/independent-teams';
import { TalkToExperts } from '../../sections/talk-to-experts';

export type HybridHomepageProps = {
	/**
	 * placeholder for content, after the first purple background fold.
	 */
	communityCollections?: ReactNode;
	/**
	 * placeholder for content, at the bottom of the first purple background fold
	 */
	mainCta?: ReactNode;
	/**
	 * show github star count at the community section
	 */
	githubStars?: number;
} & HTMLAttributes<HTMLDivElement>;

/**
 * Full, responsive page, showing the many benefits of bit, in a simple application.
 *
 * Developing this component in isolation allowed us to use new technology not available in the consuming project,
 * namely TypeScript and @testing-library/react.
 * @name HybridHomepage
 */

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
