import React from 'react';
import classNames from 'classnames';
//@ts-ignore
// import {CommentCarousel, carouselContent} from "@bit/bit.web.components.comment-carousel";
import './App.css';

import { Paragraph } from './components/base/paragraph';
import { Label } from './components/base/label';
import { MarketingCard } from './components/concrete/marketing-card';
// import { Separator } from "./components/base/separator";
import { Theme } from './themes/theme-provider';
import { PossibleSizes } from './constants/sizes';
import { H1, H2, H5 } from './components/concrete/heading';
import { EmbedIconSet } from './components/concrete/icon';
import { Fold1 } from './folds/fold1';
import { Fold2 } from './folds/fold2';
import { Fold3 } from './folds/fold3';
import { Fold4 } from './folds/fold4';
import { Fold5 } from './folds/fold5';
import { Fold6 } from './folds/fold6';
import styles from './app-concrete.module.scss';
import { CommunityFold } from './folds/community';
import { CtaFold } from './folds/cta';
import { ReuseFold } from './folds/reuse';
import { SummaryCards } from './folds/summary-cards';
import { centerColumn, wideColumn } from './components/layout/grid';
import { Separator } from './components/base/separator';
const App = () => {
	return (
		<Theme>
			<EmbedIconSet query="aqq93z" />
			<div className={styles.purpleBackground}>
				<Fold1 className={centerColumn} />
			</div>
			<SummaryCards className={classNames(styles.summaryCards, wideColumn)} />
			<div className={styles.whiteBackground}>
				<Fold2 className={centerColumn} />
			</div>
			<div className={styles.greyBackground}>
				<Fold3 className={centerColumn} />
			</div>

			<div className={styles.whiteBackground}>
				<Fold4 className={centerColumn} />
        <CtaFold className={centerColumn} />
			</div>
			<div className={styles.greyBackground}>
				<Fold5 className={centerColumn} />
        <Separator className={classNames(styles.separator, centerColumn)} />
				<Fold6 className={centerColumn} />
			</div>
			<ReuseFold className={centerColumn} />
			<CommunityFold className={centerColumn} />
			<CtaFold className={centerColumn} />
		</Theme>
	);
};

export default App;
