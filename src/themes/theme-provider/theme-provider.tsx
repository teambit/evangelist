import React, { ReactNode } from "react";
import classNames from 'classnames';
import { ThemeProvider } from "styled-components";
// import {sizes, SizeProps} from '../sizes';
import styles from '../size-definition.module.scss';

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  // return <div className={props.lassName}></div>
  return <div {...props} className={classNames(styles.heading, styles.text)}></div>
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
  
