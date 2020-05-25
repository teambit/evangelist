import React, { HTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

import { centerColumn, textColumn } from '@bit/bit.base-ui.layout.page-frame';
import { marginCenter, text } from '@bit/bit.base-ui.layout.align';
import { margin } from '../../layout/spacing';

import { Hero } from '../../sections/support-page/hero';

import styles from './support.module.scss';
import { SupportDevelopers } from '../../sections/support-page/support-developers';
import { SupportChannels } from '../../sections/support-page/support-channels';
import { GlobalEnterprise } from '../../sections/support-page/global-enterprise';
import { SupportCta } from '../../sections/support-page/support-cta';
import { TransparentPackages } from '../../sections/support-page/transparent-packages';

export type SupportPageProps = {
	table?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

/**
 * A full, responsive page, detailing Bit's offering for support page.
 * @name SupportPage
 */
export function SupportPage(props: SupportPageProps) {
	return (
		<div>
			<div className={classNames(styles.supportCirclesBg, styles.paddingTop140)}>
				<Hero className={classNames(centerColumn, styles.foldMargin)} />
			</div>
			<SupportDevelopers />
			<SupportChannels />
			<TransparentPackages>{props.table}</TransparentPackages>
			<GlobalEnterprise />
			<SupportCta />
		</div>
	);
}
