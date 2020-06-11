import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import { centerColumn } from '@bit/bit.base-ui.layout.page-frame';

import { Hero } from '../../sections/support-page/hero';

import styles from './support.module.scss';
import { SupportDevelopers } from '../../sections/support-page/support-developers';
import { SupportChannels } from '../../sections/support-page/support-channels';
import { GlobalEnterprise } from '../../sections/support-page/global-enterprise';
import { SupportCta } from '../../sections/support-page/support-cta';
import { SupportPackages } from '../../sections/support-page/support-packages';

export type SupportPageProps = {
	table?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A full, responsive page, detailing Bit's offering for support.
 * @name SupportPage
 */
export function SupportPage({table, ...rest}: SupportPageProps) {
	return (
		<div className={styles.supportPageStyles} {...rest}>
			<div className={classNames(styles.supportCirclesBg)}>
				<Hero className={classNames(centerColumn, styles.foldMargin)} />
			</div>
			<SupportDevelopers className={classNames(centerColumn, styles.marginBottom150)} />
			<SupportChannels className={classNames(centerColumn, styles.marginBottom150)} />
			<SupportPackages className={classNames(centerColumn, styles.marginBottom150)} >{table}</SupportPackages>
			<GlobalEnterprise className={classNames(centerColumn, styles.marginBottom150)}/>
			<SupportCta className={classNames(centerColumn, styles.supportCta)}/>
		</div>
	);
}
