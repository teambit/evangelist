import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
import {default as BaseButton, ButtonProps as BaseProps} from '@bit/bit.gui.base.button';
// import elevations from './elevations.module.scss';

/**
 * Card component - distinguishes a group of elements from the surrounding context to improve readability
 */
export type ButtonProps = {
  /**
   * override styles.
   */
  className?: ReactNode;
  /**
   * to control the shadow effect of a button.
   */
  elevation: "none" | "low" | "medium" | "high";
} & BaseProps;


export function PrimaryButton({ className, elevation, ...rest }: ButtonProps) {

  return (
    <BaseButton
      className={classNames(
        styles.button,
        // elevations[elevation],
        className
        
      )}
      
      {...rest}
    ></BaseButton>
  );
}

PrimaryButton.defaultProps = {
  elevation: "low",
};
