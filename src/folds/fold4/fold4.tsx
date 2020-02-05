import React, { CSSProperties } from "react";
import classNames from "classnames";

import { Paragraph } from "../../components/base/paragraph";

import { PossibleSizes } from "../../constants/sizes";
import { H1, H2, H5 } from "../../components/concrete/heading";
import { PrimaryButton } from "../../components/base/primary-button";

import styles from "./fold4.module.scss";
import { CtaButton } from "../../components/concrete/cta-button";

export function Fold4() {
  return (
    <div className={classNames(styles.fold4)}>
      <div className={classNames(styles.maxWidth)}>
        <H2 size={PossibleSizes.xs}>
          Build UI apps in simple decoupled codebases
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
            Split the development of your frontend applications into components.
            Decouple team codebases by giving each the power to build, test,
            integrate and deploy components. Make it easier to maintain each
            codebase, reduce complexity and deliver faster.
          </Paragraph>
        </div>

        <div>
          <H5 size={PossibleSizes.xxs}>
            Build UI apps in simple decoupled codebases
          </H5>
          <Paragraph>
            Split the development of your frontend applications into components.
            Decouple team codebases by giving each the power to build, test,
            integrate and deploy components. Make it easier to maintain each
            codebase, reduce complexity and deliver faster.
          </Paragraph>
        </div>
        <div>
          <H5 size={PossibleSizes.xxs}>
            Build UI apps in simple decoupled codebases
          </H5>
          <Paragraph>
            Split the development of your frontend applications into components.
            Decouple team codebases by giving each the power to build, test,
            integrate and deploy components. Make it easier to maintain each
            codebase, reduce complexity and deliver faster.
          </Paragraph>
        </div>
      </div>
      </div>
    </div>
  );
}
