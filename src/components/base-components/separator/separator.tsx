import React from "react";
import classNames from "classnames";
import styles from "./separator.module.scss";


export type SeparatorProps = {
  /**
   * @param {'vertical' | 'horizontal'} layout - separator should be horizontal or vertical.
   */
  layout: 'vertical' | 'horizontal';
  /**
   * @param {string} className - override styles.
   */
  className?: string;
};

/**
 * @description Separator component divides between different areas to improve readability.
 */
export function Separator({ layout, className }: SeparatorProps) {
  return (
    <div className={classNames(styles.separator, styles[layout], className)}>
    </div>
  );
}

Separator.defaultProps = {
  layout: 'horizontal'
}