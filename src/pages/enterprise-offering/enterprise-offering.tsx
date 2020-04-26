import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { centerColumn, textColumn, wideColumn } from '@bit/bit.base-ui.layout.page-frame';
import { marginCenter } from '@bit/bit.base-ui.layout.align';

import { Hero } from './hero/hero';
import { PoweringEnterprise } from './powering-enterprise/powering-enterprise';
import { AdvantageCards } from './advantage-cards';
import { Reliability } from './reliability/reliability';
import { EcoSystem } from './eco-system/eco-system';
import { Integrations } from './integrations/integrations';
import { ComponentAnalytics } from './component-analytics/component-analytics';
import { ExpertSupport } from './experts-support/expert-support';
import { SalesCta } from './sales-cta';

import styles from './enterprise-offering.module.scss';

export function EnterpriseOffering(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props}>
			<div
				style={{
					// background: 'url(enterprise-img/1-hero-section/hero-bg.svg)',
					background: '#0c0c0c', //$d70
					color: '#eceaff',
					padding: '136px 0',
				}}
			>
				<Hero className={centerColumn} />
			</div>
			<div style={{ margin: '137px 0' }}>
				<PoweringEnterprise className={centerColumn} />
			</div>
			<div
				style={{
					// background: '#ededed' //$w20
					// background: 'url(/enterprise-img/3-bit-enterprise/bg-container.svg)',
					backgroundSize: 'auto 100%',
					paddingBottom: '166px',
				}}
			>
				<AdvantageCards className={centerColumn} />
			</div>
			<div>
				<Reliability className={centerColumn} />
			</div>
			<div>
				<EcoSystem className={centerColumn} />
				<Integrations className={wideColumn} />
				<ComponentAnalytics className={centerColumn} />
			</div>
			<div className={styles.supportCirclesBg}>
				<ExpertSupport
					className={classNames(textColumn, marginCenter)}
					style={{ marginBottom: '311px' }}
				/>
				<SalesCta className={classNames(marginCenter)} />
			</div>
		</div>
	);
}
