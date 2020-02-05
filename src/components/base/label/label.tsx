import React, { ReactNode } from "react";
import classNames from "classnames";
import styles from "./label.module.scss";


type LabelProps = {
  children: ReactNode;
  className?: string;

}
export function Label({children, className}: LabelProps) {
return <div className={classNames(styles.label, className)}>{children}</div>
}
