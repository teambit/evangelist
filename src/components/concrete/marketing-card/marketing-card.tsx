import React, { ReactNode, CSSProperties } from "react";
import classNames from "classnames";
import { Card } from "../../base/card";
import { H1 } from "../heading";
import { Paragraph } from "../../base/paragraph";
import { Label } from "../../base/label";
import { PossibleSizes } from "../../../themes/sizes";
import { CommunityLink } from "../../base/community-link";
import styles from "./marketing-card.module.css";


type MarketingCardProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  ctaColor?: string;
  label: string;
  linkText?: string;
  to?: string;
};
export const MarketingCard = (props: MarketingCardProps) => {
  const { title, children, className, ctaColor, label, to, linkText } = props;
  const accentColor = { [styles.accentVar]: ctaColor } as CSSProperties;

  return (
    <Card
      elevation="none"
      className={classNames(styles.card, className)}
      style={accentColor}
    >
      <Label className={styles.ctaLabel}>{label}</Label>
      <H1 element="h5" size={PossibleSizes.xs}>
        {title}
      </H1>
      <Paragraph className={classNames(styles.text)}>{children}</Paragraph>
      <CommunityLink className={styles.ctaLink} href={to || "#"}>
        {linkText}
      </CommunityLink>
    </Card>
  );
};

export default MarketingCard;
