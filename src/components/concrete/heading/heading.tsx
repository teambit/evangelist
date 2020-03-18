import React from "react";
import classNames from "classnames";
import {
  HeadingProps,
  Heading
} from "../../base/heading";
import sizeStyles from "./heading-sizes.module.scss";
import marginStyles from "./heading-margins.module.scss";
import styles from './heading.module.scss';

export function H1(props: HeadingProps) {
  return (
    <Heading
      data-bit-id="bit.evangelist/atom/headers"
      element="h1"
      {...props}
      className={classNames(styles.h1, marginStyles.h1, sizeStyles[props.size || 'xl'], props.className)}
    />
  );
}
export function H2(props: HeadingProps) {
  return (
    <Heading
      data-bit-id="bit.evangelist/atom/headers"
      element="h2"
      {...props}
      className={classNames(styles.h2, marginStyles.h2, sizeStyles[props.size || 'lg'], props.className)}
    />
  );
}
export function H3(props: HeadingProps) {
  return (
    <Heading
      data-bit-id="bit.evangelist/atom/headers"
      element="h3"
      {...props}
      className={classNames(styles.h3, marginStyles.h3, sizeStyles[props.size || 'md'], props.className)}
    />
  );
}
export function H4(props: HeadingProps) {
  return (
    <Heading
      data-bit-id="bit.evangelist/atom/headers"
      element="h4"
      {...props}
      className={classNames(styles.h4, marginStyles.h4, sizeStyles[props.size || 'sm'], props.className)}
    />
  );
}
export function H5(props: HeadingProps) {
  return (
    <Heading
      data-bit-id="bit.evangelist/atom/headers"
      element="h5"
      {...props}
      className={classNames(styles.h5, marginStyles.h5, sizeStyles[props.size || 'xs'], props.className)}
    />
  );
}
export function H6(props: HeadingProps) {
  return (
    <Heading
      data-bit-id="bit.evangelist/atom/headers"
      element="h6"
      {...props}
      className={classNames(styles.h6, marginStyles.h6, sizeStyles[props.size || 'xxs'], props.className)}
    />
  );
}
