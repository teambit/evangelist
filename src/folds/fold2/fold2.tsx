import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

//@ts-ignore
import {CommentCarousel, carouselContent} from "@bit/bit.web.components.comment-carousel";
import { PossibleSizes } from '../../constants/sizes';
import { H1, H2, H5 } from '../../components/concrete/heading';
import styles from './fold2.module.scss';

export function Fold2(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.fold2, props.className)}>
		<H2 size={PossibleSizes.md}>Trusted by over 100,000 developers</H2>
		<CommentCarousel content={carouselContent} />
	</div>
	);
}
