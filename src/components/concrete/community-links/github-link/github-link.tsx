import React, { PureComponent } from 'react';
import classNames from 'classnames';
//@ts-ignore
import numberAbbreviate from 'number-abbreviate';

import styles from './github-link.module.scss';

import { PrimaryLink, PrimaryLinkProps } from '../primary-link';
import { Icon } from '../../icon';
import { Image } from '../../image';

/**
 * @name GithubLink
 * @param {number} [starCount] show github stars count inside the link.
 * @description Concrete link to Github. Styled as a 'pill' button, with the Github logo
 * @example
 * ```tsx
 * <GithubLink href="https://github.com/teambit/bit" starCount={100000} />
 * ```
 */
export interface GithubLinkProps extends PrimaryLinkProps {
	starCount?: number;
}

export class GithubLink extends PureComponent<GithubLinkProps> {
	render() {
		const { className, starCount, ...rest } = this.props;

		return (
			<PrimaryLink
				external
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
