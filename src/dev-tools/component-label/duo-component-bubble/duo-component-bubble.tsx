import React from 'react';
import classNames from 'classnames';
import { Card, CardProps } from '@bit/bit.base-ui.surfaces.card';
//@ts-ignore
import BitNameId from '@bit/bit.javascript.component.id';

import scopeStyles from './scope-colors.module.scss';
import { BASE_URL } from '../base-url';

import styles from './duo-component-bubble.module.scss';

type DuoComponentBubbleProps = {
	bitId: BitNameId;
	fullScopeName?: boolean;
} & CardProps;

type ScopeBubbleProps = {
	bitId: BitNameId;
	fullScopeName?: boolean;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type ComponentBubbleProps = {
	bitId: BitNameId;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function DuoComponentBubble({
	bitId,
	fullScopeName,
	className,
	...rest
}: DuoComponentBubbleProps) {
	const scopeFullName = bitId.getFullScopeName();

	return (
		<Card
			{...rest}
			className={classNames(
				className,
				scopeStyles.scopeColorDefinition,
				styles.duoComponentBubble
			)}
			data-current-scope={scopeFullName}
			data-ignore-component-highlight
		>
			<ScopeBubble
				bitId={bitId}
				fullScopeName={fullScopeName}
				className={styles.scopeBubble}
			/>
			<ComponentBubble bitId={bitId} />
		</Card>
	);
}

export function ScopeBubble({ bitId, fullScopeName, className, ...rest }: ScopeBubbleProps) {
	const fullName = bitId.getFullScopeName();
	const name = bitId.scope;
	const scopeUrl = `${BASE_URL}/${bitId.getFullScopeName('/')}`;

	return (
		<a
			href={scopeUrl}
			className={classNames(styles.link, className)}
			rel="noopener noreferrer"
			target="_blank"
			{...rest}
		>
			<div className={classNames(styles.scopeName)}>
				{fullScopeName ? fullName : name}
			</div>
		</a>
	);
}

export function ComponentBubble({ bitId, className, ...rest }: ComponentBubbleProps) {
	const version = bitId.version;
	const fullName = bitId.getFullName();
	const componentQuery = bitId.toQueryParams();
	const url = `${BASE_URL}/${bitId.toUrl()}${componentQuery && `?${componentQuery}`}`;
	return (
		<a
			href={url}
			className={classNames(styles.link, styles.componentName, className)}
			rel="noopener noreferrer"
			target="_blank"
		>
			<div className={styles.fullName}>{fullName}</div>
			{version && (
				<div className={styles.version}>
					{/* <span className={styles.separator}>|</span> */}
					<span className={styles.versionPrefix}>@</span>
					{version}
				</div>
			)}
		</a>
	);
}
