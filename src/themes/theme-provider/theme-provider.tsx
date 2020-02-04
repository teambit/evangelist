import React, { ReactNode } from "react";
import classNames from "classnames";
import { ThemeProvider } from "styled-components";
// import {sizes, SizeProps} from '../sizes';
import size from "../size-definition.module.scss";
import shadow from "../shadow-definition.module.scss";
import colors from "../color-definition.module.scss";
import brands from "../brand-definition.module.scss";

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  // return <div className={props.lassName}></div>
  return (
    <div
      {...props}
      className={classNames(
        size.heading,
        size.text,
        shadow.shadowTheme,
        colors.primary,
        brands.brands
      )}
    ></div>
  );
}
// export const defaultThemeParams = {
//     colors: {
//       powderWhite: "#FFFDF9",
//       persianGreen: "#06B49A",
//       lightBlue: "#AFDBD2",
//       onyx: "#36313D"
//     },
//     // fonts: ["sans-serif", "Roboto"],
//     fontSize: sizes,
//   };

//   type ThemeProps = {
//       children: ReactNode,
//       theme?: EvaTheme,
//   }

// export type EvaTheme = {
//     colors: any,
//     fontSize: SizeProps | undefined;
// }

//   export function Theme({ children, theme }: ThemeProps) {
//       return <ThemeProvider theme={theme || defaultThemeParams}>{children}</ThemeProvider>
//     }
