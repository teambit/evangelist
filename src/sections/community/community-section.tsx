import React from 'react';
import { GithubLink } from '../../components/concrete/community-links/github-link';
import classnames from 'classnames';

import styles from './community-section.module.scss';

import { links } from '../../content/links';
import { SlackLink } from '../../components/concrete/community-links/slack-link';
import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { TwitterLink } from '../../components/concrete/community-links/twitter-link';
import { TwitterCard } from '../../components/concrete/twitter-card';
import { Paragraph } from '../../components/base/paragraph';
import { Grid } from '../../components/layout/grid-component';
import { alignItems, marginCenter } from '../../components/layout/align';
import { textColumn } from '../../components/layout/page-frame';

interface CommunitySectionProps extends React.HTMLAttributes<HTMLDivElement> {
	githubStars?: number;
}

export function CommunitySection(props: CommunitySectionProps) {
	const { githubStars, ...rest } = props;

	return (
		<Grid
			{...rest}
			colL={2}
			className={classnames(props.className, styles.communitySection, alignItems.center)}
			data-bit-id="bit.evangelist/sections/community"
		>
			<div className={styles.cta}>
				<div className={classnames(textColumn, marginCenter)}>
					<H2 className={styles.title} size={PossibleSizes.sm}>
						Join the community
					</H2>
					<Paragraph className={styles.text} size={PossibleSizes.md}>
						Join over 100,000 developers around the world to share and build
						components together. Enjoy the world’s largest open-source component
						community with over 60,000 components and growing. Come join us.
					</Paragraph>

					<div className={styles.links}>
						<GithubLink href={links.github} starCount={githubStars} />
						<SlackLink href={links.slack} />
						<TwitterLink href={links.twitter} />
					</div>
				</div>
			</div>

			<div className={styles.tweets}>
				<TwitterCard
					className={styles.tweet}
					title="@Sketch2R"
					image={'homepage-bit/tweets/sketch2r.jpg'}
					verified
					titleId="twitterTitle0"
					textId="twitterText0"
				>
					Great news! We just published our first Stratos components to
					http://bit.dev!
				</TwitterCard>
				<TwitterCard
					className={styles.tweet}
					title="@TheNextWeb"
					image={'homepage/join-fold/tnw.png'}
					verified
					titleId="twitterTitle0"
					textId="twitterText0"
				>
					Build software like Lego with this smart new developer tool.
				</TwitterCard>
				<TwitterCard
					className={styles.tweet}
					title="@smashingmag"
					image={'homepage/join-fold/smashing.png'}
					verified
					titleId="twitterTitle1"
					textId="twitterText2"
				>
					Bit, a distributed virtual component repository for projects built in a
					modular way.
				</TwitterCard>
			</div>
		</Grid>
	);
}
