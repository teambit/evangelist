import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import styles from './workspace-page.module.scss';
import { Icon } from '../../elements/icon';
import { themedText } from '@bit/bit.base-ui.text.themed-text';
import { H2, H3, H5 } from '../../elements/heading';
import { VersionTag } from '../../workspace-components/version-tag';
import { TimeAgo } from '../../workspace-components/time-ago';
import { Status } from '../../workspace-components/status';
import { Avatar } from '../../workspace-components/avatar';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { CopyBox } from '../../workspace-components/copy-box';
import { Accordion } from '../../workspace-components/accordion';

export type WorkSpacePageProps = {} & HTMLAttributes<HTMLDivElement>;
/**
 * A full, responsive page, detailing Bit's offering for support.
 * @name WorkSpacePage
 */
export function WorkSpacePage(props: WorkSpacePageProps) {
	return (
		<div className={styles.versionBlock}>
			<div className={styles.topRow}>
				<H2 className={classNames(styles.heading, styles.marginRight)}>5.0.10</H2>
				{/* <Icon of="billing-checkmark" className={themedText} /> */}
				<VersionTag className={styles.marginRight}>Latest</VersionTag>
				<TimeAgo className={styles.marginRight} date="2019-12-31 23:02:51.561Z" />
				<Status className={styles.marginRight} color="green" text="Ci" />
				<Status className={styles.marginRight} color="green" text="Tests" />
			</div>
			<Avatar
				className={styles.marginRight}
				src="https://bitsrc.imgix.net/11b8acfbc5f7a64c0ecec1e2a8d4b4866eaf4431.png?size=41&w=41&h=41&fill=fillmax&bg=fff"
				alt=""
			/>
			<Avatar
				className={styles.marginRight}
				src="https://bitsrc.imgix.net/11b8acfbc5f7a64c0ecec1e2a8d4b4866eaf4431.png?size=41&w=41&h=41&fill=fillmax&bg=fff"
				alt=""
			/>
			<Avatar
				className={styles.marginRight}
				src="https://bitsrc.imgix.net/11b8acfbc5f7a64c0ecec1e2a8d4b4866eaf4431.png?size=41&w=41&h=41&fill=fillmax&bg=fff"
				alt=""
			/>
			<H5 size={PossibleSizes.xxs}>Minor changes</H5>
			<Paragraph>Commit message</Paragraph>
			<Accordion anchor="use in your project">
				<div>
					<CopyBox>bit import @bit/yomama</CopyBox>
					<CopyBox>bit import @bit/yomama</CopyBox>
					<CopyBox>bit import @bit/yomama</CopyBox>
				</div>
			</Accordion>
		</div>
	);
}
