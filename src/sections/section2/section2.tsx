import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

//@ts-ignore
import { CommentCarousel, carouselContent } from '@bit/bit.web.components.comment-carousel';
import { PossibleSizes } from '../../constants/sizes';
import { H2 } from '../../components/concrete/heading';
import styles from './section2.module.scss';

export function Section2(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classNames(styles.section2, props.className)}>
			<H2 size={PossibleSizes.md} className={styles.heading}>
				Trusted by over 100,000 developers
			</H2>
			<CommentCarousel content={carouselContent} />
		</div>
	);
}
