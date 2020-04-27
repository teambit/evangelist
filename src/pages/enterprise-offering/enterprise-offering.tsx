import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { centerColumn, textColumn, wideColumn } from '@bit/bit.base-ui.layout.page-frame';
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
import { SalesCta } from './sales-cta';
import { margin } from './spacing';

import styles from './enterprise-offering.module.scss';

export function EnterpriseOffering(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props}>
			<div className={classNames(styles.gradient00, styles.paddingTop130)}>
				<Hero className={classNames(centerColumn, styles.foldMargin)} />

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
				className={centerColumn}
				style={{ paddingTop: '130px', marginBottom: '180px' }}
			/>

			<CurvePeek filling="cloud" className={styles.intersectingBorder} />

			<div className={styles.gradient02} style={{ paddingTop: '80px' }}>
				<EcoSystem className={classNames(centerColumn, text.center)} />
				<Integrations className={classNames(wideColumn, margin[130])} />
				<ComponentAnalytics className={centerColumn} />
			</div>
			<div className={styles.supportCirclesBg}>
				<ExpertSupport
					className={classNames(textColumn, marginCenter)}
					style={{ marginBottom: '311px' }}
				/>
				<SalesCta className={classNames(marginCenter, centerColumn)} />
			</div>
		</div>
	);
}
