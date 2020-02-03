import React from "react";
import classNames from 'classnames';

import { PossibleSizes } from "../../../themes/sizes";
import styles from './paragraph.module.scss';

export type ParagraphProps = {
  /**
   * @param {"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"} size - heading font size.
   */
  size: PossibleSizes;
} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * text component
 */
export function Paragraph({ className, size, ...rest }: ParagraphProps) {
  return (
    <p className={classNames(styles[size], className)} {...rest} />
  );
}

Paragraph.defaultProps = {
  size: 'md',
}