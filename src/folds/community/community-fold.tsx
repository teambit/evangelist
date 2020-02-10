import React from 'react';
import { GithubLink } from '../../components/concrete/community-links';
import classnames from 'classnames';
//@ts-ignore
import { links } from '@bit/bit.web.config.links';
import styles from './community-fold.module.scss';
import { SlackLink } from '../../components/concrete/community-links/slack-link';
import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { TwitterLink } from '../../components/concrete/community-links/twitter-link';
import { TwitterCard } from '../../components/concrete/twitter-card';
import { staticStorageUrl } from '../../constants/storage';
import { brLg } from '../../components/layout/grid-templates';
import { Paragraph } from '../../components/base/paragraph';

export function CommunityFold(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classnames(styles.communityFold, brLg.col2, props.className)}
		>
			<div className={styles.cta}>
				<H2 className={styles.title} size={PossibleSizes.md}>
					Join the community!
				</H2>
				<Paragraph className={styles.text} size={PossibleSizes.xl}>
					Join over 100,000 developers in the Bit community to share, discover and
					collaborate over frontend building blocks. Share your components with the
					world to get usage, feedback and contributions from people around the world.
				</Paragraph>

				<div className={styles.links}>
					<GithubLink href={links.github} />
					<SlackLink href={links.slack} />
					<TwitterLink href={links.twitter} />
				</div>
			</div>

			<div>
				<TwitterCard
					className={styles.tweet}
					title="@Sketch2R"
					image={`${staticStorageUrl}/homepage-bit/tweets/sketch2r.jpg`}
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
					image={`${staticStorageUrl}/homepage/join-fold/tnw.png`}
					verified
					titleId="twitterTitle0"
					textId="twitterText0"
				>
					Build software like Lego with this smart new developer tool.
				</TwitterCard>
				<TwitterCard
					className={styles.tweet}
					title="@smashingmag"
					image={`${staticStorageUrl}/homepage/join-fold/smashing.png`}
					verified
					titleId="twitterTitle1"
					textId="twitterText2"
				>
					Bit, a distributed virtual component repository for projects built in a
					modular way.
				</TwitterCard>
				{/* <TwitterCard
					className={styles.tweet}
					title="@ncthis"
					image={`${staticStorageUrl}/homepage/join-fold/ncthis.jpg`}
					verified
					titleId="twitterTitle0"
					textId="twitterText0"
				>
					I've been looking at @bitdev_ for a few days in my quest to make "micro
					front-ends" out of a big monolith. So far, I've been having a blast. Much
					better than using git submodules or rolling your own with NPM.
				</TwitterCard> */}
			</div>
		</div>
	);
}
