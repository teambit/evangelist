import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { centerColumn, textColumn } from '@bit/bit.base-ui.layout.page-frame';
import { marginCenter, text } from '@bit/bit.base-ui.layout.align';

import { Hero } from '../../sections/enterprise-offering/hero/hero';
import { PoweringEnterprise } from '../../sections/enterprise-offering/powering-enterprise/powering-enterprise';
import { AdvantageCards } from '../../sections/enterprise-offering/advantage-cards';
import { Reliability } from '../../sections/enterprise-offering/reliability/reliability';
import { EcoSystem } from '../../sections/enterprise-offering/eco-system/eco-system';
import { Integrations } from '../../sections/enterprise-offering/integrations/integrations';
import { ComponentAnalytics } from '../../sections/enterprise-offering/component-analytics/component-analytics';
import { ExpertSupport } from '../../sections/enterprise-offering/experts-support/expert-support';
import { SalesCta, ContactValues } from '../../sections/enterprise-offering/sales-cta';
import { margin } from '../../layout/spacing';

import styles from './enterprise-offering.module.scss';

export type EnterpriseOfferingProps = {
	/** handles "contact us" form submission. Return a promise to show loader */
	onSubmitCta?: (values: ContactValues) => any | Promise<any>;
	/** handles meeting call to action. Return a promise to show loader */
	onBookMeeting?: () => any | Promise<any>;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A full, responsive page, detailing Bit's offering for enterprises.
 * @name EnterpriseOffering
 */
export function EnterpriseOffering(props: EnterpriseOfferingProps) {
	const { onBookMeeting, onSubmitCta, className, ...rest } = props;

	return (
		<div {...rest} className={classNames(styles.enterpriseOffering, className)}>
			<div className={classNames(styles.gradient00, styles.paddingTop130)}>
				<Hero
					onBookMeeting={onBookMeeting}
					className={classNames(centerColumn, styles.foldMargin)}
				/>

				<div className={classNames(styles.curveWhite, styles.curveMargin)} />
			</div>

			<PoweringEnterprise className={classNames(centerColumn, margin[180])} />

			<div className={styles.gradient01}>
				<AdvantageCards className={classNames(centerColumn, styles.foldMarginPlus)} />

				<div className={classNames(styles.curveWhite, styles.curveMargin)} />
			</div>

			<Reliability
				className={classNames(centerColumn, styles.foldMargin, styles.paddingTop30)}
			/>

			<div className={classNames(styles.curveCloud, styles.curveMargin)} />

			<div className={classNames(styles.gradient02, styles.paddingTop30)}>
				<EcoSystem className={classNames(centerColumn, text.center)} />
				<Integrations className={classNames(margin[80])} />
				<ComponentAnalytics className={centerColumn} />
			</div>
			<div className={classNames(styles.supportCirclesBg, styles.circlesMargin)}>
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
