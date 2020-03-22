import React, { Component, ReactNode } from 'react';
import classNames from 'classnames';

//@ts-ignore
import Spinner from '@bit/joshk.react-spinners-css.ellipsis';

import styles from './button.module.scss';

const defaultSpinner = (
	<Spinner color="#ffffff" size={18} style={{ verticalAlign: 'middle' }} />
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	loader?: ReactNode;
	loading?: boolean;
}

/**
 * @name BaseButton
 * @description
 * Base button, with very basic styles. Receives all args of native html button.
 * If onClick returns a promise, BaseButton will show a loader automatically until the promise is resolved or rejected.
 * @param {boolean} loading force loader to show
 * @param {ReactNode} loader element to show while loading
 */
export default class Button extends Component<ButtonProps> {
	state = { isLoading: false };

	static defaultProps = {
		loader: defaultSpinner,
	};

	handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		const { onClick } = this.props;
		if (!onClick) return;

		this.setState({ isLoading: true });

		Promise.resolve(onClick.call(this, event))
			.catch(() => {})
			.then(() => {
				this.setState({ isLoading: false });
			});
	};

	render() {
		const { onClick, className, children, loader, loading, ...rest } = this.props;
		const { isLoading } = this.state;

		//ignore internal state when component is controlled
		const content = (loading !== undefined && loading) || isLoading ? loader : children;

		return (
			<button
				data-bit-id="bit.base/atoms/button"
				{...rest}
				onClick={this.handleClick}
				className={classNames(className, styles.vanillaButton)}
			>
				{content}
			</button>
		);
	}
}
