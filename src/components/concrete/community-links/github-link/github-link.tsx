import React, { PureComponent } from 'react';
import classNames from 'classnames';
//@ts-ignore
import numberAbbreviate from 'number-abbreviate';

import { staticStorageUrl } from '../../../../constants/storage';
import { CommunityLink as BaseCommunityLink } from '../../../base/community-link';
import { Icon } from '../../icon';

import baseStyles from '../community-link.module.scss';
import styles from './github-link.module.scss';

const ENABLE_STAR_COUNT = false;

/**
 * concrete community link component - pill flavor for base link component
 */
export type GithubLinkProps = {
	/**
	 * override className for styling
	 */
	className?: string;
	/**
	 * the link to refer to
	 */
	href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

type GithubLinkState = {
	starCount?: number;
};

type StarsResponse = {
	code?: number;
	message?: string;
	payload?: {
		stars?: number;
	};
	//hope this is the correct Response
} & Response;

export class GithubLink extends PureComponent<GithubLinkProps, GithubLinkState> {
	state: GithubLinkState = {
		starCount: undefined,
	};

	componentDidMount() {
		if (ENABLE_STAR_COUNT) {
			fetch('https://api.bit.dev/social/stars')
				.then((starsData: StarsResponse) => {
					if (!starsData || !starsData.payload || !starsData.payload.stars) return;

					this.setState({ starCount: starsData.payload.stars });
				})
				.catch(e => {
					this.setState({ starCount: undefined });
				});
		}
	}

	render() {
		const { className, href, ...rest } = this.props;
		const { starCount } = this.state;

		return (
			<BaseCommunityLink
				href={href}
				{...rest}
				className={classNames(baseStyles.communityLink, styles.githubLink, className)}
			>
				<Icon of="github-logo" className={styles.icon} />
				<span>teambit/bit</span>
				{starCount && (
					<img
						alt="star"
						src={`${staticStorageUrl}/homepage/star.svg`}
						className={styles.star}
					/>
				)}
				{starCount && <span>{numberAbbreviate(starCount)}</span>}
			</BaseCommunityLink>
		);
	}
}
