import React from "react";
import classNames from "classnames";
//@ts-ignore
// import {CommentCarousel, carouselContent} from "@bit/bit.web.components.comment-carousel";
import "./App.css";

import { Paragraph } from "./components/base/paragraph";
import { ConcreteCard } from "./components/concrete/concrete-card";
// import { Separator } from "./components/base/separator";
import {Theme} from './themes/theme-provider';
import {PossibleSizes} from './themes/sizes';
import {H1, H2, H5} from './components/concrete/heading';
// import {GithubLink} from './components/concrete/community-links';
import {EmbedIconSet} from './components/concrete/icon';
import styles from "./app-concrete.module.scss";

const App = () => {
  return (
    <Theme>
      <EmbedIconSet query='aqq93z' />
      {/* <div className={styles.page}> */}
        <div className={styles.fold1}>
          <div className={styles.maxWidth}>
            <div className={styles.first}>
              <div>
                <H1 size={PossibleSizes.md}>
                  A scalable way to build modern frontend applications.
                </H1>
                <Paragraph size={PossibleSizes.xxl}>
                  Bit helps you build frontends with decoupled codebases,
                  independent teams, continuous delivery, infinite reuse and so
                  much more.
                </Paragraph>
                {/* <GithubLink href="ss" className={styles.communityLink}></GithubLink> */}
              </div>
              <img src="https://static.bit.dev/homepage-bit/1-illustration.svg" className={styles.img1} />
            </div>
          </div>
        </div>
        <Boxes />
        <div className={styles.fold2}>
          {/* <div className={classNames(styles.maxWidth)}> */}
          <H2 size={PossibleSizes.xs} >
            Trusted by over 100,000 developers
          </H2>
          {/* </div> */}
          {/* <CommentCarousel content={carouselContent} /> */}
        </div>
        <div className={classNames(styles.fold3)}>
          <div className={styles.clipPath}></div>
          <div className={classNames(styles.maxWidth)}>
            <H2 size={PossibleSizes.xs} >
              Build UI apps in simple decoupled codebases
            </H2>
            <Paragraph>
              Split the development of your frontend applications into components.
              Decouple team codebases by giving each the power to build, test,
              integrate and deploy components. Make it easier to maintain each
              codebase, reduce complexity and deliver faster.
            </Paragraph>
            <img src="https://static.bit.dev/homepage/collaborate.svg" />
          </div>
        </div>
        {/* <div className={styles.bla}>
        <Separator layout='vertical' />
        </div> */}
        <div className={styles.fold4}>
          <H2 size={PossibleSizes.xs}>
            Build UI apps in simple decoupled codebases
          </H2>
          <Paragraph>
              Split the development of your frontend applications into components.
              Decouple team codebases by giving each the power to build, test,
              integrate and deploy components. Make it easier to maintain each
              codebase, reduce complexity and deliver faster.
            </Paragraph>
        </div>
      {/* </div> */}
    </Theme>
    
  );
};

export default App;

const Boxes = () => {
  return (
    <div className={styles.boxes}>
      <ConcreteCard
        title="Build UI apps in decoupled codebases"
        text="Develop components in simple, decoupled codebases. Make each codebase simpler to build, test and maintain"
        className={{
          root: styles.appCard,
          title: styles.titleSpc,
          text: styles.textClass
        }}
      />
      <ConcreteCard
        title="Build UI apps in decoupled codebases"
        text="Develop components in simple, decoupled codebases. Make each codebase simpler to build, test and maintain"
        className={{
          root: styles.appCard,
          title: styles.titleSpc,
          text: styles.textClass
        }}
      />
      <ConcreteCard
        title="Build UI apps in decoupled codebases"
        text="Develop components in simple, decoupled codebases. Make each codebase simpler to build, test and maintain"
        className={{
          root: styles.appCard,
          title: styles.titleSpc,
          text: styles.textClass
        }}
      />
      <ConcreteCard
        title="Build UI apps in decoupled codebases"
        text="Develop components in simple, decoupled codebases. Make each codebase simpler to build, test and maintain"
        className={{
          root: styles.appCard,
          title: styles.titleSpc,
          text: styles.textClass
        }}
      />
    </div>
  );
};
