import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { ChangeLog } from '../../sections/workspace-sections/change-log/change-log';
import styles from './workspace-page.module.scss';
import {versionExample} from '../workspace-page/change-log.data';

export type WorkSpacePageProps = {} & HTMLAttributes<HTMLDivElement>;
/**
 * A full, responsive page, detailing Bit's offering for support.
 * @name WorkSpacePage
 */
export function WorkSpacePage(props: WorkSpacePageProps) {
	return (
		<div>
			<ChangeLog version={versionExample} className={styles.marginBottom} />
			<ChangeLog version={versionExample} className={styles.marginBottom} />
			<ChangeLog version={versionExample} className={styles.marginBottom} />
		</div>
	);
}
