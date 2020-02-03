import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./card.module.scss";


export type CardProps = {
  /**
   * @param {ReactNode} children - nested components.
   */
  children: ReactNode;
  /**
   * @param {string} className - override styles.
   */
  className?: string;
  /**
   * @param {ReactNode} elevation - to control the shadow effect of a card.
   */
  elevation?: "low" | "medium" | "high";
};

/**
 * @description Card component - distinguishes a group of elements from the surrounding context to improve readability
 */
export function Card({ children, className, elevation }: CardProps) {
  // const { children, className = {}, elevation } = props;

  return (
    <div
      className={classNames(
        styles.card,
        styles[`elevation-${elevation}`],
        className
      )}
    >
      {children}
    </div>
  );
}

Card.defaultProps = {
  elevation: "low",
  className: '',
};
