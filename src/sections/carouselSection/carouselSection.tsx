import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '../../constants/sizes';
import { H2 } from '../../components/concrete/heading';
import styles from './carouselSection.module.scss';
import { textColumn } from '../../components/layout/grid';
import { marginCenter } from '../../components/layout/align';

import CommentCarousel from '../../components/concrete/comment-carousel/comment-carousel';
import { bitTestimonials } from '../../content/bit-testimonials';

export function CarouselSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={props.className}>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm} className={styles.heading}>
					Trusted by over 100,000 developers
				</H2>
			</div>
			<CommentCarousel content={bitTestimonials} />
			{/* <div data-bit-id="commentCarousel"> */}
			{/* </div> */}
		</div>
	);
}
