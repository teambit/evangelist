import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';
import { Link } from '../../elements/link';
import { colorPalette } from '@bit/bit.base-ui.theme.color-palette';
import styles from './privacy-disclaimer.module.scss';

export type PrivacyDisclaimerProps = {
	className?: any;
} & HTMLAttributes<HTMLDivElement>;

export const PrivacyDisclaimer = (props: PrivacyDisclaimerProps) => {
	const { className } = props;
	return (
		<div className={classNames(styles.main, className)}>
			<span className={classNames(styles.text, colorPalette.muted)}>
				Submitting this form confirms you have read our{' '}
			</span>
			<Link external href="/resources/privacy">
				privacy policy
			</Link>
			.
		</div>
	);
};
