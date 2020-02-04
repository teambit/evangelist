import React from "react";
import classNames from 'classnames';
import {CommunityLink as BaseCommunityLink} from '../../base/community-link';
import styles from './community-link.module.scss';
import { Icon } from "../icon";

/**
 * concrete community link component - pill flavor for base link component
 */
export type GithubLinkProps = {
  /**
   * override className for styling
   */
  className?: string;
  /**
   * the link to refer to
   */
  href: string;
} & React.HTMLAttributes<HTMLAnchorElement>;

export function GithubLink({
  className,
  href,
  ...rest
}: GithubLinkProps) {
  
  return (
    <BaseCommunityLink
      href={href}
      className={classNames(styles.githubLink, className)}
      {...rest}
    >
      <Icon of='github-logo' className={classNames('bitcon', styles.icon)} />
      <span>teambit/bit</span>
    </BaseCommunityLink>
  );
}
