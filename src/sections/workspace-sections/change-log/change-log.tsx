import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './change-log.module.scss';
import { Icon } from '../../../elements/icon';

import { H2, H3, H5 } from '../../../elements/heading';
import { VersionTag } from '../../../workspace-components/version-tag';
import { TimeAgo } from '../../../workspace-components/time-ago';
import { Status } from '../../../workspace-components/status';
import { Avatar } from '../../../workspace-components/avatar';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';

import { MiddleDot } from '../../../workspace-components/middle-dot';
import { mutedText } from '@bit/bit.base-ui.text.muted-text';

export type ChangeLogProps = {} & HTMLAttributes<HTMLDivElement>;
/**
 * change log section
 * @name ChangeLog
 */
export function ChangeLog({className, ...rest}: ChangeLogProps) {
	return (
		<div className={classNames(styles.versionBlock, className)} {...rest}>
			<div className={styles.topRow}>
				<H2 className={classNames(styles.heading, styles.marginRight)}>5.0.10</H2>
				<VersionTag className={styles.marginRight}>Latest</VersionTag>
				<TimeAgo className={styles.marginRight} date="2019-12-31 23:02:51.561Z" />
				<MiddleDot className={classNames(mutedText, styles.marginRight)} />
				<Status className={styles.marginRight} color="green" text="Ci" />
				<MiddleDot className={classNames(mutedText, styles.marginRight)} />
				<Status className={styles.marginRight} color="green" text="Tests" />
				<Avatar
					className={styles.marginRight}
					src="https://bitsrc.imgix.net/11b8acfbc5f7a64c0ecec1e2a8d4b4866eaf4431.png?size=41&w=41&h=41&fill=fillmax&bg=fff"
					alt=""
				/>
				<Icon of="arrow_right"/>
			</div>

			<H5 size={PossibleSizes.xxs}>Minor changes</H5>
			<Paragraph>Commit message</Paragraph>
		</div>
	);
}
