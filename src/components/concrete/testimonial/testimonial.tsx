import React, { PureComponent } from 'react';
import classNames from 'classnames';

import styles from './testimonial.module.scss';
import { TestimonialObj } from './testimonial-obj';

export interface TestimonialProps extends React.HTMLAttributes<HTMLDivElement> {
	active?: boolean;
	data: TestimonialObj;
}

export class Testimonial extends PureComponent<TestimonialProps> {
	render() {
		const { data, active, className, ...rest } = this.props;

		return (
			<div
				data-bit-id="concrete/testimonial"
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
