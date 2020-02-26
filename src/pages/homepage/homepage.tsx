import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { MainSection } from '../../sections/mainSection';
import { CarouselSection } from '../../sections/carouselSection';
import { DevSection } from '../../sections/devSection';
import { AutoSection } from '../../sections/autoSection';
import { BuildSection } from '../../sections/buildSection';
import { DeploySection } from '../../sections/deploySection';
import { CommunitySection } from '../../sections/community';
import { CtaSection } from '../../sections/cta';
import { ReuseSection } from '../../sections/reuse';
import { SummaryCards } from '../../sections/summary-cards';
import { centerColumn, wideColumn } from '../../components/layout/grid';
import { Separator } from '../../components/base/separator';

import styles from './homepage.module.scss';

export class Homepage extends PureComponent {
	render() {
		return (
			<div>
				<div className={styles.whiteBackground}>
					<div className={styles.purpleBackground}>
						<MainSection className={centerColumn} />
					</div>
					<SummaryCards className={classNames(styles.summaryCards, wideColumn)} />
					<CarouselSection />
				</div>
				<div className={classNames(styles.greyBackground, styles.padding80)}>
					<DevSection className={classNames(centerColumn, styles.padding80)} />
				</div>

				<div className={classNames(styles.whiteBackground, styles.padding80)}>
					<AutoSection className={centerColumn} />
					<CtaSection className={classNames(centerColumn, styles.padding80)} />
				</div>
				<div className={classNames(styles.greyBackground, styles.padding80)}>
					<BuildSection className={classNames(centerColumn, styles.padding80)} />
					<Separator className={classNames(styles.separator, centerColumn)} />
					<DeploySection className={centerColumn} />
				</div>
				<div className={styles.reuseSection}>
					<ReuseSection className={centerColumn} />
				</div>
				<Separator className={classNames(styles.separator, centerColumn)} />
				<div className={styles.communityBackground}>
					<CommunitySection className={centerColumn} />
					<CtaSection className={classNames(centerColumn, styles.ctaSection)} />
				</div>
			</div>
		);
	}
}
