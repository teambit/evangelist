import React, { AnchorHTMLAttributes } from 'react';
import classNames from 'classnames';
import styles from './community-link.module.scss';

/**
 * @name PrimaryLink
 * @description Base class for all community links, with basic styles.
 * @example
 * ```tsx
 * function AcmeLink(props) {
 *   return (
 *     <PrimaryLink {...props} className={props.className + ' ' + styles.acmeLink}>
 *       Bit at ACME!
 *     </PrimaryLink>
 *   )
 * }
 * ```
 */
export interface CommunityLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export function CommunityLink({ className, href, children, ...rest }: CommunityLinkProps) {
	return (
		<a
			{...rest}
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={classNames(styles.communityLink, className)}
		>
			{children}
		</a>
	);
}
