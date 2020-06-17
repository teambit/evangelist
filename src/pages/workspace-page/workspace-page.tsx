import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';
import { ChangeLog } from '../../sections/workspace-sections/change-log/change-log';
import styles from './workspace-page.module.scss';

export type WorkSpacePageProps = {} & HTMLAttributes<HTMLDivElement>;
/**
 * A full, responsive page, detailing Bit's offering for support.
 * @name WorkSpacePage
 */
export function WorkSpacePage(props: WorkSpacePageProps) {
	return (
		<div>
			<ChangeLog className={styles.marginBottom} />
			<ChangeLog className={styles.marginBottom} />
			<ChangeLog className={styles.marginBottom} />
			
		</div>
	);
}
