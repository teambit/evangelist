import React, { PureComponent } from 'react';
import classNames from 'classnames';

import styles from './reuse-page.module.scss';

import { CarouselSection } from '../../sections/carouselSection';
import { CtaSection } from '../../sections/cta';
import { centerColumn, wideColumn } from '../../components/layout/page-frame';
import { Separator } from '../../components/base/separator';

import { ReuseLandingSection } from '../../sections/reuse-landing-section';
import { EnterpriseSection } from '../../sections/enterprise-section/enterprise-section';
import { SyncSection } from '../../sections/sync-section';

export class ReusePage extends PureComponent {
	render() {
		return (
			<div>
				<div className={styles.hotpinkBackground}>
					<ReuseLandingSection
						className={classNames(styles.landingSection, centerColumn)}
					/>

					<div className={classNames(centerColumn, styles.padding80)}>
						collections
					</div>
				</div>

				<div className={classNames(centerColumn, styles.padding80)}>components</div>

				<EnterpriseSection className={classNames(centerColumn, styles.padding80)} />

				<CarouselSection className={classNames(styles.padding80)} />

				<div className={classNames(styles.greyBackground, styles.padding80)}>
					<SyncSection className={centerColumn}/>
				</div>

				<CtaSection className={classNames(centerColumn, styles.ctaSection)} />

				<div>keep aps in perfect sync + 4 images</div>

				<div className={classNames(styles.greyBackground, styles.padding80)}>
					<div>let bit manage your docs + 6z</div>
				</div>

				<div>enjoy the most advanced tools + accordion</div>

				<Separator />

				<CtaSection className={classNames(centerColumn, styles.ctaSection)} />

				<Separator />
			</div>
		);
	}
}
