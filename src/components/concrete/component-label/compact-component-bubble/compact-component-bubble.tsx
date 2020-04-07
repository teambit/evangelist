import React from 'react';
import classNames from 'classnames';
import { Card, CardProps } from '@bit/bit.base-ui.surfaces.card';
//@ts-ignore
import BitNameId from '@bit/bit.javascript.component.id';

import scopeStyles from './scope-colors.module.scss';
import { BASE_URL } from '../base-url';

import styles from './compact-component-bubble.module.scss';

type CompactComponentBubbleProps = {
	bitId: BitNameId;
} & CardProps;

// type ComponentBubbleProps = {
// 	bitId: BitNameId;
// } & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export function CompactComponentBubble({
	bitId,
	className,
	...rest
}: CompactComponentBubbleProps) {
	const version = bitId.version;
	const fullName = bitId.getFullName();
	const scope = bitId.scope;
	const fullScope = bitId.getFullScopeName();
	const componentQuery = bitId.toQueryParams();
	const url = `${BASE_URL}/${bitId.toUrl()}${componentQuery && `?${componentQuery}`}`;

	return (
		<Card
			{...rest}
			className={classNames(
				className,
				scopeStyles.scopeColorDefinition,
				styles.compactComponentBubble
			)}
			data-current-scope={fullScope}
		>
			<a
				href={url}
				className={classNames(styles.link, styles.componentName, className)}
				rel="noopener noreferrer"
				target="_blank"
			>
				{scope && <div>{scope}/</div>}
				<div>{fullName}</div>
				{version && (
					<div className={styles.version}>
						{/* <span className={styles.separator}>|</span> */}
						<span className={classNames(styles.versionPrefix)}>@</span>
						{version}
					</div>
				)}
			</a>
		</Card>
	);
}

// export function ComponentBubble({ bitId, className, ...rest }: ComponentBubbleProps) {
// 	const version = bitId.version;
// 	const fullName = bitId.getFullName();
// 	const scope = bitId.scope;
// 	const componentQuery = bitId.toQueryParams();
// 	const url = `${BASE_URL}/${bitId.toUrl()}${componentQuery && `?${componentQuery}`}`;
// 	return (
// 		<a
// 			{...rest}
// 			href={url}
// 			className={classNames(styles.link, styles.componentName, className)}
// 			rel="noopener noreferrer"
// 			target="_blank"
// 		>
// 			{scope && <div>{scope}</div>}
// 			<span className={styles.separator}>|</span>
// 			<div>{fullName}</div>
// 			{version && (
// 				<div className={styles.version}>
// 					<span className={styles.separator}>|</span>
// 					<span className={styles.versionPrefix}>@</span>
// 					{version}
// 				</div>
// 			)}
// 		</a>
// 	);
// }
