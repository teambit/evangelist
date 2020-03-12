import React, { HTMLAttributes } from 'react';
import { MarketingCard } from '../../components/concrete/marketing-card';
import styles from './summary-cards.module.scss';
import { Grid } from '../../components/layout/grid-component';

export const SummaryCards = (props: HTMLAttributes<HTMLDivElement>) => {
	return (
		<Grid {...props} colMd={2} colXl={4} data-bit-id="sections/summary-cards">
			<MarketingCard
				className={styles.marketingCard}
				ctaColor={'#6c5ce7'}
				linkText="learn more"
				label="Develop"
				title="Build UI apps in decoupled codebases"
			>
				Develop components in simple, decoupled codebases. Make each codebase simpler to
				build, test and maintain
			</MarketingCard>
			<MarketingCard
				className={styles.marketingCard}
				ctaColor={'#37b26c'}
				linkText="learn more"
				label="Build"
				title="Empower autonomous teams to deliver"
			>
				Empower every team to independently build their components in their own
				codebase. Let each team integrate and deploy components
			</MarketingCard>
			<MarketingCard
				className={styles.marketingCard}
				ctaColor={'#0984e3'}
				linkText="learn more"
				label="Deploy"
				title="Continuously integrate and deploy components"
			>
				Continuously integrate and deploy components and updates. Leverage per-component
				CI/CD for a faster release cycle
			</MarketingCard>
			<MarketingCard
				className={styles.marketingCard}
				ctaColor={'#ff0281'}
				linkText="learn more"
				label="Reuse"
				title="Reuse everything in a collaborative ecosystem"
			>
				Make all your components reusable in a collaborative ecosystem. Make it easy for
				everyone to share, discover and use every
			</MarketingCard>
		</Grid>
	);
};
