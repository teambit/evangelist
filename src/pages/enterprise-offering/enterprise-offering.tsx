import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { centerColumn, textColumn } from '@bit/bit.base-ui.layout.page-frame';
import { marginCenter, text } from '@bit/bit.base-ui.layout.align';
import { CurvePeek } from '@bit/bit.base-ui.geometry.curve-peek';

import { Hero } from './hero/hero';
import { PoweringEnterprise } from './powering-enterprise/powering-enterprise';
import { AdvantageCards } from './advantage-cards';
import { Reliability } from './reliability/reliability';
import { EcoSystem } from './eco-system/eco-system';
import { Integrations } from './integrations/integrations';
import { ComponentAnalytics } from './component-analytics/component-analytics';
import { ExpertSupport } from './experts-support/expert-support';
import { SalesCta, ContactValues } from './sales-cta';
import { margin } from './spacing';

import styles from './enterprise-offering.module.scss';

export type EnterpriseOfferingProps = {
	onSubmitCta?: (values: ContactValues) => Promise<any>;
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

export function EnterpriseOffering(props: EnterpriseOfferingProps) {
	const { onBookMeeting, onSubmitCta, ...rest } = props;

	return (
		<div {...rest}>
			<div className={classNames(styles.gradient00, styles.paddingTop130)}>
				<Hero onBookMeeting={onBookMeeting} className={classNames(centerColumn, styles.foldMargin)} />

				<CurvePeek
					filling="white"
					className={classNames(styles.intersectingBorder, margin[30])}
				/>
			</div>

			<PoweringEnterprise className={classNames(centerColumn, margin[130])} />

			<div className={styles.gradient01}>
				<AdvantageCards className={classNames(centerColumn, margin[30])} />

				<CurvePeek filling="white" className={styles.intersectingBorder} />
			</div>

			<Reliability
				className={classNames(centerColumn, margin[180], styles.paddingTop80)}
			/>

			<CurvePeek filling="cloud" className={styles.intersectingBorder} />

			<div className={classNames(styles.gradient02, styles.paddingTop80)}>
				<EcoSystem className={classNames(centerColumn, text.center)} />
				<Integrations className={classNames(margin[130])} />
				<ComponentAnalytics className={centerColumn} />
			</div>
			<div className={styles.supportCirclesBg}>
				<ExpertSupport
					className={classNames(textColumn, marginCenter, styles.expertSupport)}
				/>
				<SalesCta
					onSubmitCta={onSubmitCta}
					onBookMeeting={onBookMeeting}
					className={classNames(marginCenter, centerColumn)}
				/>
			</div>
		</div>
	);
}
