import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Card } from '@bit/bit.base.atoms.card';
import { pillClass } from '@bit/bit.base.atoms.pill';
//@ts-ignore
import BitNameId from '@bit/bit.javascript.component.id';

import styles from './component-label.module.scss';
import scopeStyles from './scope-colors.module.scss';

const BASE_URL = 'https://bit.dev';

export type ComponentLabelProps = {
	bitId?: string;
	versionOverride?: string;
	// href?: string;
} & HTMLAttributes<HTMLDivElement>;

export function ComponentLabel(props: ComponentLabelProps) {
	const { bitId, versionOverride, className, ...rest } = props;

	if (!bitId) return null;

	const parsed = BitNameId.fromBitId(bitId);

	//local or malformed component ids may fail parsing
	if (!parsed) {
		return (
			<Card {...rest} className={classNames(className, pillClass, styles.defaultLabel)}>
				{bitId}
			</Card>
		);
	}

	if (versionOverride) parsed.version = versionOverride;

	const version = parsed.version;
	const scopeName = parsed && parsed.getFullScopeName();
	const fullName = parsed ? parsed.getFullName() : bitId;

	const componentQuery = parsed.toQueryParams();
	const url = `${BASE_URL}/${parsed.toUrl()}${componentQuery && `?${componentQuery}`}`;
	const scopeUrl = `${BASE_URL}/${parsed && parsed.getFullScopeName('/')}`;

	return (
		<Card
			{...rest}
			className={classNames(
				className,
				pillClass,
				scopeStyles.scopeColorDefinition,
				styles.componentLabel
			)}
			data-current-scope={scopeName}
		>
			{scopeName && (
				<a
					href={scopeUrl}
					className={styles.link}
					rel="noopener noreferrer"
					target="_blank"
				>
					<div className={styles.scopeName}>{scopeName}</div>
				</a>
			)}

			<a
				href={url}
				className={classNames(styles.link, styles.componentLink)}
				rel="noopener noreferrer"
				target="_blank"
			>
				<div className={styles.fullName}>{fullName}</div>
				{version && '|'}
				{version && <div className={styles.version}>v{version}</div>}
			</a>
		</Card>
	);
}
