import React from 'react';
import { GithubLink } from '../../components/concrete/community-links';
import classnames from 'classnames';
//@ts-ignore
import { links } from '@bit/bit.web.config.links';
import { centerColumn } from '../../components/layout/grid';
import styles from './community-fold.module.scss';
import { SlackLink } from '../../components/concrete/community-links/slack-link';
import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { TwitterLink } from '../../components/concrete/community-links/twitter-link';
import { TwitterCard } from '../../components/concrete/twitter-card';
import { staticStorageUrl } from '../../constants/storage';

export function CommunityFold(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classnames(centerColumn, styles.communityFold, props.className)}
		>
			<div>
				<H2 size={PossibleSizes.sm}>Join the community!</H2>
				<div>
					Join over 100,000 developers in the Bit community to share, discover and
					collaborate over frontend building blocks. Share your components with the
					world to get usage, feedback and contributions from people around the world.
				</div>
				<GithubLink href={links.github} />
				<SlackLink href={links.slack} />
				<TwitterLink href={links.twitter} />
			</div>

			<div>
				<TwitterCard
					title="@TheNextWeb"
					image={`${staticStorageUrl}/homepage/join-fold/tnw.png`}
					verified
					titleId="twitterTitle0"
					textId="twitterText0"
				>
					Build software like Lego with this smart new developer tool.
				</TwitterCard>
				<TwitterCard
					title="@smashingmag"
					image={`${staticStorageUrl}/homepage/join-fold/smashing.png`}
					verified
					titleId="twitterTitle1"
					textId="twitterText2"
				>
					Bit, a distributed virtual component repository for projects built in a
					modular way.
				</TwitterCard>
				<TwitterCard
					title="@ncthis"
					image={`${staticStorageUrl}/homepage/join-fold/ncthis.jpg`}
					verified
					titleId="twitterTitle0"
					textId="twitterText0"
				>
					I've been looking at @bitdev_ for a few days in my quest to make "micro
					front-ends" out of a big monolith. So far, I've been having a blast. Much
					better than using git submodules or rolling your own with NPM.
				</TwitterCard>
			</div>
		</div>
	);
}
