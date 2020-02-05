import React from "react";
import { PossibleSizes } from "../../../constants/sizes";

export type HeadingProps = {
  /**
   * the generated element.
   */
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * heading font size.
   */
  size: PossibleSizes;
} & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * Generates titles
 */
export function Heading(props: HeadingProps) {
  const { element, className, size, ...rest } = props;
  const Element = element || "h1";
  return <Element {...rest} className={className} />;
}

Heading.defaultProps = {
  size: "md",
  element: "h1"
};
