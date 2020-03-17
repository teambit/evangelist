import React, { AnchorHTMLAttributes, Component } from 'react';
import classNames from 'classnames';

//@ts-ignore
import createRef from 'react-create-ref';
import { createPopper, Instance } from '@popperjs/core';

import styles from './component-tooltip.module.scss';

export interface ComponentTooltipProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	targetElement?: HTMLElement;
}

export class ComponentTooltip extends Component<ComponentTooltipProps> {
	private ref = createRef();
	private popperInstance?: Instance;

	componentWillUnmount() {
		this.destroy();
	}

	componentDidUpdate(prevProps: ComponentTooltipProps) {
		const nextProps = this.props;

		if (prevProps.targetElement !== nextProps.targetElement) {
			this.reposition(nextProps.targetElement);
		}
	}

	private reposition = (targetElement?: HTMLElement) => {
		const popperElement = this.ref.current;

		if (!targetElement) {
			this.destroy();
		}

		if (!targetElement || !popperElement) return;

		this.popperInstance = createPopper(targetElement, popperElement, {
			placement: 'top',
			modifiers: [
				{
					name: 'flip',
					enabled: false,
				},
				{
					name: 'offset',
					options: {
						// offset: [0, 9],
					},
				},
			],
		});
	};

	private destroy() {
		if (!this.popperInstance) return;

		this.popperInstance.destroy();
		this.popperInstance = undefined;
	}

	render() {
		const { children, className, targetElement, ...rest } = this.props; //TODO
		return (
			<div
				ref={this.ref}
				className={styles.tooltipWrapper}
				data-ignore-component-highlight
			>
				<a
					{...rest}
					rel="noopener"
					target="_blank"
					className={classNames(className, styles.componentTooltip)}
				>
					{children}
				</a>
			</div>
		);
	}
}
