import React, { PureComponent } from 'react';
import classNames from 'classnames';
//@ts-ignore
import numberAbbreviate from 'number-abbreviate';

import styles from './github-link.module.scss';

import { CommunityLinkProps } from '../../../base/community-link/community-link';

import { PrimaryLink } from '../primary-link';
import { Icon } from '../../icon';
import { Image } from '../../image';

/**
 * concrete community link component - pill flavor for base link component
 */
export interface GithubLinkProps extends CommunityLinkProps {
	starCount?: number;
}

export class GithubLink extends PureComponent<GithubLinkProps> {
	render() {
		const { className, starCount, ...rest } = this.props;

		return (
			<PrimaryLink
				{...rest}
				className={classNames(styles.githubLink, className)}
				data-bit-id="bit.evangelist/atom/community-links/github-link"
			>
				<Icon of="github-logo" className={styles.icon} />
				<span>teambit/bit</span>
				{starCount && (
					<Image alt="star" src="homepage/star.svg" className={styles.star} />
				)}
				{starCount && <span>{numberAbbreviate(starCount)}</span>}
			</PrimaryLink>
		);
	}
}
