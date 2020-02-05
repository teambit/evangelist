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
import { PossibleSizes } from './themes/sizes';
import { H1, H2, H5 } from './components/concrete/heading';
// import {GithubLink} from './components/concrete/community-links';
import { EmbedIconSet } from './components/concrete/icon';
import { Fold1 } from './folds/fold1';
import { Fold3 } from './folds/fold3';
import { Fold4 } from './folds/fold4';
import { Fold5 } from './folds/fold5';
import styles from './app-concrete.module.scss';
import { CommunityFold } from './folds/community';
import { CtaFold } from './folds/cta';

const App = () => {
	return (
		<Theme>
			<EmbedIconSet query="aqq93z" />
			<Fold1 />
			<Boxes />
			<div className={styles.fold2}>
				{/* <div className={classNames(styles.maxWidth)}> */}
				<H2 size={PossibleSizes.xs}>Trusted by over 100,000 developers</H2>
				{/* </div> */}
				{/* <CommentCarousel content={carouselContent} /> */}
			</div>
			<Fold3 />
			{/* <div className={styles.bla}>
        <Separator layout='vertical' />
        </div> */}
			<Fold4 />
			<Fold5 />
			<CommunityFold />
			<CtaFold />
		</Theme>
	);
};

export default App;

const Boxes = () => {
	return (
		<div className={styles.boxes}>
			<MarketingCard
				ctaColor={'purple'}
				linkText="learn more"
				label="Develop"
				title="Build UI apps in decoupled codebases"
			>
				Develop components in simple, decoupled codebases. Make each codebase simpler to
				build, test and maintain
			</MarketingCard>
			<MarketingCard
				ctaColor={'lightgreen'}
				linkText="learn more"
				label="Develop"
				title="Build UI apps in decoupled codebases"
			>
				Develop components in simple, decoupled codebases. Make each codebase simpler to
				build, test and maintain
			</MarketingCard>
			<MarketingCard
				ctaColor={'blue'}
				linkText="learn more"
				label="Develop"
				title="Build UI apps in decoupled codebases"
			>
				Develop components in simple, decoupled codebases. Make each codebase simpler to
				build, test and maintain
			</MarketingCard>
			<MarketingCard
				ctaColor={'hotpink'}
				linkText="learn more"
				label="Develop"
				title="Build UI apps in decoupled codebases"
			>
				Develop components in simple, decoupled codebases. Make each codebase simpler to
				build, test and maintain
			</MarketingCard>
		</div>
	);
};
