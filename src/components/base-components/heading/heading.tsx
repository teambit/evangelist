import React, { ReactNode } from "react";
// import { EvaTheme } from "../../../themes/theme-provider/theme-provider";
import { PossibleSizes } from "../../../themes/sizes";

export type HeadingProps = {
  // /**
  //  * @param {ReactNode} children - nested components.
  //  */
  // children: ReactNode;
  // /**
  //  * @param {string | undefined} className - override styles.
  //  */
  // className?: string;
  /**
   * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} element - the generated element.
   */
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /**
   * @param {"xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl"} size - heading font size.
   */
  size: PossibleSizes;
} & React.HTMLAttributes<HTMLHeadingElement>;

/**
 * @description Generates titles
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
