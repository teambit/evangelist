import React from 'react';
import 'reset-css';
import classNames from 'classnames';
import './App.css';

import { Theme } from './themes/theme-provider';

import { EmbedIconSet } from './components/concrete/icon';
import { Fold1 } from './folds/fold1';
import { Fold2 } from './folds/fold2';
import { Fold3 } from './folds/fold3';
import { Fold4 } from './folds/fold4';
import { Fold5 } from './folds/fold5';
import { Fold6 } from './folds/fold6';
import { CommunityFold } from './folds/community';
import { CtaFold } from './folds/cta';
import { ReuseFold } from './folds/reuse';
import { SummaryCards } from './folds/summary-cards';
import { centerColumn, wideColumn } from './components/layout/grid';
import { Separator } from './components/base/separator';

import styles from './app-concrete.module.scss';

const App = () => {
	return (
		<Theme>
			<EmbedIconSet query="aqq93z" />
			<div className={styles.purpleBackground}>
				<Fold1 className={centerColumn} />
			</div>
			<SummaryCards className={classNames(styles.summaryCards, wideColumn)} />
			<div className={styles.whiteBackground}>
				<Fold2 />
			</div>
			<div className={classNames(styles.greyBackground, styles.padding80)}>
				<Fold3 className={centerColumn} />
			</div>

			<div className={classNames(styles.whiteBackground, styles.padding80)}>
				<Fold4 className={centerColumn} />
				<CtaFold className={classNames(centerColumn, styles.padding80)} />
			</div>
			<div className={classNames(styles.greyBackground, styles.padding80)}>
				<Fold5 className={centerColumn} />
				<Separator className={classNames(styles.separator, centerColumn)} />
				<Fold6 className={centerColumn} />
			</div>
			<div className={styles.reuseFold}>
				<ReuseFold className={centerColumn} />
			</div>
			<CommunityFold className={centerColumn} />
			<div className={styles.ctaFold}>
				<CtaFold className={centerColumn} />
			</div>
		</Theme>
	);
};

export default App;
