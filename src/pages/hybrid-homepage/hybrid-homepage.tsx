import React, { PureComponent, HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './hybrid-homepage.module.scss';

import { backgrounds } from '@bit/bit.base-ui.surfaces.background';
import { centerColumn, wideColumn } from '@bit/bit.base-ui.layout.page-frame';

import { CarouselSection } from '../../sections/hybrid-homepage/carouselSection';
import { CtaSection } from '../../sections/hybrid-homepage/cta';
import { EnterpriseSection } from '../../sections/hybrid-homepage/enterprise-section';
import { CommunitySection } from '../../sections/hybrid-homepage/community';
import { ComponentsAdvantages } from '../../sections/hybrid-homepage/component-advantages';
import { IndependentTeams } from '../../sections/hybrid-homepage/independent-teams';
import { TalkToExperts } from '../../sections/hybrid-homepage/talk-to-experts';
import { Hero } from '../../sections/hybrid-homepage/hero';
import { DevelopComponents } from '../../sections/hybrid-homepage/develop-components';
import { ReuseComponents } from '../../sections/hybrid-homepage/reuse-components';
import { BuildTogether } from '../../sections/hybrid-homepage/build-together';
import { DiscoverComponents } from '../../sections/hybrid-homepage/discover-components';

export type HybridHomepageProps = {
	/** placeholder for content, after the first purple background fold. */
	communityCollections?: ReactNode;
	/** placeholder for content, at the bottom of the first purple background fold */
	mainCta?: ReactNode;
	/** show github star count at the community section */
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
		const {
			communityCollections = null,
			mainCta,
			githubStars,
			className,
			...rest
		} = this.props;

		return (
			<div {...rest} className={classNames(backgrounds.bedrock, className)}>
				<div
					className={classNames(
						styles.purpleBackground,
						styles.purpleFold,
						styles.margin180
					)}
				>
					<Hero className={classNames(styles.landingSection, centerColumn)} />

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
					<DevelopComponents
						className={classNames(centerColumn, styles.foldMargin)}
					/>

					<ComponentsAdvantages className={classNames(centerColumn)} />
				</div>

				<ReuseComponents className={classNames(centerColumn, styles.foldMargin)} />

				<TalkToExperts className={classNames(centerColumn, styles.foldMargin)} />

				<div
					className={classNames(
						styles.greyBackground,
						styles.greyBgPadding,
						styles.foldMargin
					)}
				>
					<BuildTogether className={classNames(centerColumn)} />
				</div>

				<DiscoverComponents className={classNames(centerColumn, styles.foldMargin)} />

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
