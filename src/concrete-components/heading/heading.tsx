import React from "react";
import classNames from "classnames";
import {
  HeadingProps,
  Heading
} from "../../components/base-components/heading/heading";
import sizeStyles from "./heading-sizes.module.scss";

export function H1(props: HeadingProps) {
  return (
    <Heading
      element="h1"
      {...props}
      className={classNames(sizeStyles[props.size], props.className)}
    />
  );
}
export function H2(props: HeadingProps) {
  return (
    <Heading
      element="h2"
      {...props}
      className={classNames(sizeStyles[props.size], props.className)}
    />
  );
}
export function H3(props: HeadingProps) {
  return (
    <Heading
      element="h3"
      {...props}
      className={classNames(sizeStyles[props.size], props.className)}
    />
  );
}
export function H4(props: HeadingProps) {
  return (
    <Heading
      element="h4"
      {...props}
      className={classNames(sizeStyles[props.size], props.className)}
    />
  );
}
export function H5(props: HeadingProps) {
  return (
    <Heading
      element="h5"
      {...props}
      className={classNames(sizeStyles[props.size], props.className)}
    />
  );
}
export function H6(props: HeadingProps) {
  return (
    <Heading
      element="h6"
      {...props}
      className={classNames(sizeStyles[props.size], props.className)}
    />
  );
}
