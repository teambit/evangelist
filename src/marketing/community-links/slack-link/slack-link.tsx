import React from 'react';
import classNames from 'classnames';

import styles from './slack-link.module.scss';

import { CommunityLink, PrimaryLinkProps } from '../community-link';
import { Icon } from '../../../elements/icon';

export type SlackLinkProps = PrimaryLinkProps;

/**
 * Concrete link to a Slack channel. Styled as a 'pill' button, with the Slack logo
 * @name SlackLink
 * @example
 * <SlackLink href="https://join.slack.com/..." />
 */
export function SlackLink({ className, ...rest }: SlackLinkProps) {
	return (
		<CommunityLink
			external
			data-bit-id="bit.evangelist/marketing/community-links/slack-link"
			className={classNames(styles.slackLink, className)}
			{...rest}
		>
			<Icon of="slack" className={classNames(styles.icon)} />
			<span>bit-dev-community</span>
		</CommunityLink>
	);
}
