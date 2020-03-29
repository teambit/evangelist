import React, { PureComponent } from 'react';
import classNames from 'classnames';

import { TestimonialObj } from './testimonial-obj';
import styles from './testimonial.module.scss';

export type TestimonialProps = {
	/**
	 * Highlights current Testimonial. When `false`, testimonial will be half transparent.
	 */
	active?: boolean;
	/**
	 * Content of testimonial.
	 * -   avatar - url to user's avatar
	 * -   name - owner username
	 * -   description owner subtitle
	 */
	data: TestimonialObj;
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * User testimonial. Showing a quote, user avatar, and name.
 *
 * @example
 * <Testimonial active
 * 	data={{ name: 'Barbra', description: 'head of barbering', content: 'Great scissors!', avatar: '...', }}
 * />
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
