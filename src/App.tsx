import React from 'react';
import 'reset-css';
import classNames from 'classnames';
import './App.css';

import { Theme } from './themes/theme-provider';

import { EmbedIconSet } from './components/concrete/icon';
import { Section1 } from './sections/section1';
import { Section2 } from './sections/section2';
import { Section3 } from './sections/section3';
import { Section4 } from './sections/section4';
import { Section5 } from './sections/section5';
import { Section6 } from './sections/section6';
import { CommunitySection } from './sections/community';
import { CtaSection } from './sections/cta';
import { ReuseSection } from './sections/reuse';
import { SummaryCards } from './sections/summary-cards';
import { centerColumn, wideColumn } from './components/layout/grid';
import { Separator } from './components/base/separator';

import styles from './app-concrete.module.scss';

const App = () => {
	return (
		<Theme>
			<EmbedIconSet query="aqq93z" />
			<div className={styles.whiteBackground}>
				<div className={styles.purpleBackground}>
					<Section1 className={centerColumn} />
				</div>
				<SummaryCards className={classNames(styles.summaryCards, wideColumn)} />
				<Section2 />
			</div>
			<div className={classNames(styles.greyBackground, styles.padding80)}>
				<Section3 className={centerColumn} />
			</div>

			<div className={classNames(styles.whiteBackground, styles.padding80)}>
				<Section4 className={centerColumn} />
				<CtaSection className={classNames(centerColumn, styles.padding80)} />
			</div>
			<div className={classNames(styles.greyBackground, styles.padding80)}>
				<Section5 className={centerColumn} />
				<Separator className={classNames(styles.separator, centerColumn)} />
				<Section6 className={centerColumn} />
			</div>
			<div className={styles.reuseSection}>
				<ReuseSection className={centerColumn} />
			</div>
			<Separator className={classNames(styles.separator, centerColumn)} />
			<div className={styles.communityBackground}>
				<CommunitySection className={centerColumn} />
				<CtaSection className={classNames(centerColumn, styles.ctaSection)} />
			</div>
		</Theme>
	);
};

export default App;
