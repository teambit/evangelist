import React from "react";
import classNames from "classnames";
import styles from "./card.module.scss";
import elevations from './elevations.module.scss';

/**
 * Card component - distinguishes a group of elements from the surrounding context to improve readability
 */
export type CardProps = {
  /**
   * override styles.
   */
  className?: string;
  /**
   * to control the shadow effect of a card.
   */
  elevation?: "none" | "low" | "medium" | "high";
} & React.HTMLAttributes<HTMLDivElement>;


export function Card({ className, elevation = "low", ...rest }: CardProps) {

  return (
    <div
      className={classNames(
        styles.card,
        elevations[elevation],
        className
      )}
      {...rest}
    />
  );
}

