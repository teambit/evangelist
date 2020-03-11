import React, { Component, HTMLAttributes } from 'react';
//@ts-ignore
import createRef from 'react-create-ref';
import classNames from 'classnames';
import { createPopper } from '@popperjs/core';

import debounce from 'lodash.debounce';

import styles from './component-highlighter.module.scss';
import { ComponentTooltip } from './tooltip/component-tooltip'

export interface ComponentHighlighterProps extends HTMLAttributes<HTMLDivElement> {
	active?: boolean;
	componentsDictionary: { [id: string]: string };
}

interface ComponentHighlighterState {
	highlighting?: string;
}

export class ComponentHighlighter extends Component<
	ComponentHighlighterProps,
	ComponentHighlighterState
> {
	ref?: HTMLDivElement = undefined;

	state: ComponentHighlighterState = {
		highlighting: undefined,
	};

	_highlight = (targetElement: HTMLElement, value: string) => {
		const { componentsDictionary } = this.props;
		const tooltip = this.popperRef.current;
		if (!tooltip || !componentsDictionary[value]) return;

		this.setState({ highlighting: value });
		// this.currentTarget = targetElement;

		createPopper(targetElement, tooltip, {
			placement: 'top',
			modifiers: [],
		});
	};

	// //performance is ok, and I'd rather not have a race-condition with highlight()
	// //so no debounce
	// unHighlight = (element: HTMLElement) => {
	// 	const { popperInstance } = this;

	// 	if (!popperInstance || element !== this.currentTarget) return;

	// 	popperInstance.destroy();
	// 	this.currentTarget = undefined;
	// 	this.popperInstance = undefined;
	// 	this.setState({ highlighting: undefined });
	// };

	highlight = debounce(this._highlight, 80, {
		maxWait: 80,
	});

	handleEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { target } = event;
		const element = target as HTMLElement;

		if (!element) return;

		const bitId = element.getAttribute('data-bit-id');
		if (!bitId) return;

		this.highlight(element, bitId);
	};

	// handleOut = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
	// 	const { target } = event;
	// 	const element = target as HTMLElement;

	// 	this.unHighlight(element);
	// };

	// currentTarget?: HTMLElement;
	// popperInstance?: Instance;

	popperRef = createRef();

	render() {
		const { active, children, componentsDictionary, ...rest } = this.props;
		const { highlighting } = this.state;
		const href = highlighting ? componentsDictionary[highlighting] : undefined;

		return (
			<div
				{...rest}
				className={classNames(styles.componentHighlighter, active && styles.active)}
				// "Both `onmouseenter` and `onmouseover` fire when the mouse enters the boundary of an element.
				// However, `onmouseenter` doesn't fire again (does not bubble)
				// if the mouse enters a child element within this first element."
				// https://stackoverflow.com/a/1638929/9941961

				// (this is perfect for this use case)
				onMouseOver={this.handleEnter}
				//TODO - mouseout
				// onMouseOut={this.handleOut}
			>
				{children}
				<div ref={this.popperRef}>
					<ComponentTooltip
						href={href}
						className={classNames(
							styles.tooltipWrapper,
							highlighting && styles.visible
						)}
					>
						{highlighting}
					</ComponentTooltip>
				</div>
			</div>
		);
	}
}
