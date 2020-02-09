import React from "react";
import classNames from "classnames";
import {
  HeadingProps,
  Heading
} from "../../base/heading";
import sizeStyles from "./heading-sizes.module.scss";
import marginStyles from "./heading-margins.module.scss";

export function H1(props: HeadingProps) {
  return (
    <Heading
      element="h1"
      {...props}
      className={classNames(marginStyles.h1, sizeStyles[props.size || 'xl'], props.className)}
    />
  );
}
export function H2(props: HeadingProps) {
  return (
    <Heading
      element="h2"
      {...props}
      className={classNames(marginStyles.h2, sizeStyles[props.size || 'lg'], props.className)}
    />
  );
}
export function H3(props: HeadingProps) {
  return (
    <Heading
      element="h3"
      {...props}
      className={classNames(marginStyles.h3, sizeStyles[props.size || 'md'], props.className)}
    />
  );
}
export function H4(props: HeadingProps) {
  return (
    <Heading
      element="h4"
      {...props}
      className={classNames(marginStyles.h4, sizeStyles[props.size || 'sm'], props.className)}
    />
  );
}
export function H5(props: HeadingProps) {
  return (
    <Heading
      element="h5"
      {...props}
      className={classNames(marginStyles.h5, sizeStyles[props.size || 'xs'], props.className)}
    />
  );
}
export function H6(props: HeadingProps) {
  return (
    <Heading
      element="h6"
      {...props}
      className={classNames(marginStyles.h6, sizeStyles[props.size || 'xxs'], props.className)}
    />
  );
}
