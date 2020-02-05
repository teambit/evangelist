import React from "react";
import classNames from "classnames";

import size from "../size-definition.module.scss";
import shadow from "../shadow-definition.module.scss";
import colors from "../color-definition.module.scss";
import brands from "../brand-definition.module.scss";

export function Theme(props: React.HTMLAttributes<HTMLDivElement>) {
  
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
