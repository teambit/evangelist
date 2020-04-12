import React, { PureComponent } from 'react';
import classNames from 'classnames';
//@ts-ignore
import numberAbbreviate from 'number-abbreviate';

import styles from './github-link.module.scss';

import { PrimaryLink, PrimaryLinkProps } from '../community-link';
import { Icon } from '../../../elements/icon';
import { Image } from '../../../elements/image';

export type GithubLinkProps = {
	/**
	 * Shows github stars count inside the link.
	 */
	starCount?: number;
} & PrimaryLinkProps;

/**
 * Concrete link to a Github repository, with logo and star count.
 * @name GithubLink
 *
 * Automatically shortens long numbers into metric prefix, using [number-abbreviate](https://www.npmjs.com/package/number-abbreviate)
 * @example
 * <GithubLink href="https://github.com/teambit/bit" starCount={500000} />
 */

export class GithubLink extends PureComponent<GithubLinkProps> {
	render() {
		const { className, starCount, ...rest } = this.props;

		return (
			<PrimaryLink
				external
				data-bit-id="bit.evangelist/marketing/community-links/github-link"
				className={classNames(styles.githubLink, className)}
				{...rest}
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
