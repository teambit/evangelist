import React, {ReactNode} from "react";
import classNames from 'classnames';
import styles from './community-link.module.scss';

/**
 * community link component - wraps children with an anchor tag
 */
export type CommunityLinkProps = {
  /**
   * override className for styling
   */
  className?: string;
  /**
   * the link to refer to
   */
  href: string;
  /**
   * nested children
   */
  children: ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function CommunityLink({
  className,
  href,
  children,
  ...rest
}: CommunityLinkProps) {
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
