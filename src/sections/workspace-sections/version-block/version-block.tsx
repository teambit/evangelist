import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import {Version} from '../../../pages/workspace-page/change-log.data';
import styles from './version-block.module.scss';
import { Icon } from '../../../elements/icon';

import { H2, H3, H5 } from '../../../elements/heading';
import { VersionTag } from '../../../workspace-components/version-tag';
import { TimeAgo } from '../../../workspace-components/time-ago';
import { Status } from '../../../workspace-components/status';
// import { Avatar } from '../../../workspace-components/avatar';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';

import { MiddleDot } from '../../../workspace-components/middle-dot';
import { mutedText } from '@bit/bit.base-ui.text.muted-text';
import Avatar from '../../../workspace-components/Avatar';



export type VersionBlockProps = {
	version: Version;
} & HTMLAttributes<HTMLDivElement>;
/**
 * change log section
 * @name VersionBlock
 */
export function VersionBlock({version, className, ...rest}: VersionBlockProps) {
	
	return (
		<div className={classNames(styles.versionBlock, className)} {...rest}>
			<div className={styles.topRow}>
				<H2 className={classNames(styles.heading, styles.marginRight)}>{version.id}</H2>
				<VersionTag className={styles.marginRight}>Latest</VersionTag>
				<TimeAgo className={styles.marginRight} date={version.time} />
				<MiddleDot className={classNames(mutedText, styles.marginRight)} />
				<Status className={styles.marginRight} status={version.ciStatus} />
				<MiddleDot className={classNames(mutedText, styles.marginRight)} />
				<Status className={styles.marginRight} status={version.testStatus} />
				<Avatar
					className={styles.marginRight}
					account={version.contributors}
					size={30}
					// name={version.contributors.name} 
					// alt=""
				/>
				<Icon of="arrow_right"/>
			</div>

			<H5 size={PossibleSizes.xxs}>Minor changes</H5>
			<Paragraph>{version.message}</Paragraph>
		</div>
	);
}
