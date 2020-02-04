import React from "react";
import classNames from "classnames";
import { Card } from "../../base/card";
import { Heading } from "../../base/heading";
import { Paragraph } from "../../base/paragraph";
import {PossibleSizes} from '../../../themes/sizes';
import styles from "./concrete-card.module.css";

// export const ConcreteCard = (props: any) => {
//   const { title, text, className } = props;

//   const classes = {
//     root: '',
//     title: '',
//     text: ''
//   }
//   return (
//     <Card elevation='low' className={classNames(styles.card, classes.root)}>
//       <Heading element='h5' size={24} className={classNames(styles.title, classes.title)}>{title}</Heading>
//       <Paragraph className={classNames(styles.text, classes.text)}>{text}</Paragraph>
//     </Card>
//   );
// };

export const ConcreteCard = (props: any) => {
  const { title, text, className } = props;

  const classes = toClasses(className);
  return (
    <Card elevation="none" className={classNames(styles.card, classes.root)}>
      <div className={styles.bla}></div>
      <Heading
        element="h5"
        size={PossibleSizes.xxs}
      >
        {title}
      </Heading>
      <Paragraph className={classNames(styles.text, classes.text)}>
        {text}
      </Paragraph>
    </Card>
  );
};

function toClasses(classNames: string | { [className: string]: string }) {
  if (!classNames)
    return {
      root: "",
      title: "",
      text: ""
    };
  if (typeof classNames === "string") {
    return {
      root: classNames
    };
  }

  return classNames;
}

export default ConcreteCard;

//toClasses(className);
// console.log("ConcreteCard styles", styles, className)
// const cardClass = {
//     card: {
//         ...styles,
//         ...className.card
//     },
//     title: {
//         ...styles,
//         ...className.title
//     },
//     text: {
//         ...styles,
//         ...className.text
//     }
// }
