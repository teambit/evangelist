import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { TestimonialObj } from './testimonial-obj';
import styles from './testimonial.module.scss';

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
	active?: boolean;
	data: TestimonialObj;
}

/**
 * @name Testimonial
 * @description A single testimonial element.
 * @param active Highligh current Testimonial. Makes half transparent when false
 * @param {ReactNode} data.content main text
 * @param {string} data.avatar url to user's avatar
 * @param {string} data.name owner name
 * @param {string} data.description owner subtitle
 * @example
 * ```tsx
 * <Testimonial active
 * 	data={{ name: 'Barbra', description: 'head of barbering', content: 'Great scissors!', avatar: '...', }}
 * />
 * ```
 */
export class Testimonial extends PureComponent<TestimonialProps> {
	render() {
		const { data, active, className, ...rest } = this.props;

		return (
			<div
				data-bit-id="bit.evangelist/atom/testimonial"
				{...rest}
				className={classNames(styles.box, className)}
				data-active={active || null}
			>
				<div className={styles.quote}>{data.content}</div>
				<div className={styles.bottom}>
					<img alt="avatar" src={data.avatar} className={styles.image} />
					<div>
						<div className={styles.name}>{data.name}</div>
						<div className={styles.description}>{data.description}</div>
					</div>
				</div>
			</div>
		);
	}
}
