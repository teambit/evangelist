import React from "react";
import classNames from "classnames";
import styles from "./button.module.scss";
import {default as BaseButton, ButtonProps as BaseProps} from '@bit/bit.gui.base.button';
import elevations from './elevations.module.scss';

/**
 * Button component 
 */
export type ButtonProps = {
  /**
   * to control the shadow effect of a button.
   */
  elevation?: "none" | "low" | "medium" | "high";
} & BaseProps;


export function PrimaryButton({ className, elevation = "none", ...rest }: ButtonProps) {

  return (
    <BaseButton
      className={classNames(
        styles.button,
        elevations[elevation],
        className
        
      )}
      
      {...rest}
    ></BaseButton>
  );
}

PrimaryButton.defaultProps = {
  elevation: "none",
};
