import React, { Component } from 'react';
import classNames from 'classnames';

//@ts-ignore
import createRef from 'react-create-ref';
import { createPopper, Instance } from '@popperjs/core';

import styles from './component-tooltip.module.scss';

export type ComponentTooltipProps = {
	targetElement?: HTMLElement;
} & React.HTMLAttributes<HTMLDivElement>;

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
			],
		});
	};

	private destroy() {
		if (!this.popperInstance) return;

		this.popperInstance.destroy();
		this.popperInstance = undefined;
	}

	render() {
		const { className, targetElement, ...rest } = this.props; //TODO
		return (
			<div
				{...rest}
				ref={this.ref}
				className={classNames(styles.tooltipWrapper, className)}
				data-ignore-component-highlight
			/>
		);
	}
}
