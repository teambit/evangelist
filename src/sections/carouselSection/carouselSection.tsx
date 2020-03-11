import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

//@ts-ignore
import { CommentCarousel } from '@bit/bit.web.components.comment-carousel';
//@ts-ignore
import { bitTestimonials } from '@bit/bit.web.content.testimonials';
import { PossibleSizes } from '../../constants/sizes';
import { H2 } from '../../components/concrete/heading';
import styles from './carouselSection.module.scss';
import { textColumn } from '../../components/layout/grid';
import { marginCenter } from '../../components/layout/align';

export function CarouselSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={props.className}>
			<div className={classNames(textColumn, marginCenter)}>
				<H2 size={PossibleSizes.sm} className={styles.heading}>
					Trusted by over 100,000 developers
				</H2>
			</div>
			<div data-bit-id="commentCarousel">
				<CommentCarousel content={bitTestimonials} />
			</div>
		</div>
	);
}
