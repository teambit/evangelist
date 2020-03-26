import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Card } from '@bit/bit.base.atoms.card';
import { pillClass } from '@bit/bit.base.atoms.pill';
//@ts-ignore
import BitNameId from '@bit/bit.javascript.component.id';

import styles from './component-label.module.scss';

export type ComponentLabelProps = {
	bitId?: string;
	version?: string;
	href?: string;
} & HTMLAttributes<HTMLDivElement>;

export function ComponentLabel(props: ComponentLabelProps) {
	const { bitId, version, className, href, ...rest } = props;

	if (!bitId) return null;

	const parsed = BitNameId.fromBitId(bitId);
	const scopeName = parsed && parsed.getFullScopeName();
	const fullName = parsed ? parsed.getFullName() : bitId;

	return (
		<Card
			{...rest}
			className={classNames(className, pillClass, styles.componentPill)}
			data-current-scope={scopeName}
		>
			{scopeName && <div className={styles.scopeName}>{scopeName}</div>}
			<div className={styles.fullName}>{fullName}</div>
			{version && '|'}
			{version && <div className={styles.version}>v{version}</div>}
		</Card>
	);
}
