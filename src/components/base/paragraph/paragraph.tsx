import React from "react";
import classNames from 'classnames';

import { PossibleSizes } from "../../../constants/sizes";
import styles from './paragraph.module.scss';

export type ParagraphProps = {
  /**
   * heading font size.
   */
  size: PossibleSizes;
} & React.HTMLAttributes<HTMLParagraphElement>;

/**
 * text component
 */
export function Paragraph({ className, size, ...rest }: ParagraphProps) {
  return (
    <p className={classNames(styles[size], className)} data-bit-id="paragraph" {...rest} />
  );
}

Paragraph.defaultProps = {
  size: 'md',
}