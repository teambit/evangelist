import React, { CSSProperties } from "react";
import classNames from "classnames";

import { Paragraph } from "../../components/base/paragraph";

import { PossibleSizes } from "../../themes/sizes";
import { H1, H2, H5 } from "../../components/concrete/heading";
import { PrimaryButton } from "../../components/base/primary-button";
import { Label } from "../../components/base/label";
import styles from "./fold5.module.scss";
import { CtaButton } from "../../components/concrete/cta-button";
import { Separator } from "../../components/base/separator";

export function Fold5() {
  const accentColor = { [styles.accentVar]: "green" } as CSSProperties;
  const accentColor2 = { [styles.accentVar]: "blue" } as CSSProperties;

  return (
    <div className={classNames(styles.fold5)} style={accentColor}>
      <div className={classNames(styles.maxWidth)}>
        <Label className={styles.ctaLabel}>Build</Label>
        <H2 size={PossibleSizes.xs}>
          A scalable way to build modern frontend applications.
        </H2>
        <Paragraph>
          Split the development of your frontend applications into components.
          Decouple team codebases by giving each the power to build, test,
          integrate and deploy components. Make it easier to maintain each
          codebase, reduce complexity and deliver faster.
        </Paragraph>
        <img src="https://static.bit.dev/homepage-bit/3-empower.png" />
        <div className={styles.textBoxesSection}>
          <div>
            <H5 size={PossibleSizes.xxs}>
              Build UI apps in simple decoupled codebases
            </H5>
            <Paragraph>
              Split the development of your frontend applications into
              components. Decouple team codebases by giving each the power to
              build, test, integrate and deploy components. Make it easier to
              maintain each codebase, reduce complexity and deliver faster.
            </Paragraph>
          </div>

          <div>
            <H5 size={PossibleSizes.xxs}>
              Build UI apps in simple decoupled codebases
            </H5>
            <Paragraph>
              Split the development of your frontend applications into
              components. Decouple team codebases by giving each the power to
              build, test, integrate and deploy components. Make it easier to
              maintain each codebase, reduce complexity and deliver faster.
            </Paragraph>
          </div>
          <div>
            <H5 size={PossibleSizes.xxs}>
              Build UI apps in simple decoupled codebases
            </H5>
            <Paragraph>
              Split the development of your frontend applications into
              components. Decouple team codebases by giving each the power to
              build, test, integrate and deploy components. Make it easier to
              maintain each codebase, reduce complexity and deliver faster.
            </Paragraph>
          </div>
        </div>
        <Separator />
      </div>
    </div>
  );
}
