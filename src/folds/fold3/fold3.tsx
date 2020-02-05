import React from "react";
import classNames from "classnames";


import { Paragraph } from "../../components/base/paragraph";

import { PossibleSizes } from "../../themes/sizes";
import { H1, H2, H5 } from "../../components/concrete/heading";
import {PrimaryButton} from '../../components/base/primary-button';
import{Label} from '../../components/base/label';
import styles from "./fold3.module.scss";
import { CtaButton } from "../../components/concrete/cta-button";


export function Fold3() {

  return (
    <div className={classNames(styles.fold3)}>
        <div className={classNames(styles.maxWidth)}>
          <Label>Develop</Label>
          <H2 size={PossibleSizes.xs}>
            Build UI apps in simple decoupled codebases
          </H2>
          <Paragraph>
            Split the development of your frontend applications into components.
            Decouple team codebases by giving each the power to build, test,
            integrate and deploy components. Make it easier to maintain each
            codebase, reduce complexity and deliver faster.
          </Paragraph>
          <img src="https://static.bit.dev/homepage/collaborate.svg" />

          <div className={styles.splitCard}>
            <div>
              <H2 size={PossibleSizes.xs}>
                Build UI apps in simple decoupled codebases
              </H2>
              <Paragraph>
                Split the development of your frontend applications into
                components. Decouple team codebases by giving each the power to
                build, test, integrate and deploy components. Make it easier to
                maintain each codebase, reduce complexity and deliver faster.
              </Paragraph>
            </div>
            <img src="https://static.bit.dev/homepage/collaborate.svg" />
          </div>
          <div className={styles.splitCard}>
            <img src="https://static.bit.dev/homepage/collaborate.svg" />
            <div>
              <H2 size={PossibleSizes.xs}>
                Build UI apps in simple decoupled codebases
              </H2>
              <Paragraph>
                Split the development of your frontend applications into
                components. Decouple team codebases by giving each the power to
                build, test, integrate and deploy components. Make it easier to
                maintain each codebase, reduce complexity and deliver faster.
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
  );
}
