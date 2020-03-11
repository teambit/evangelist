import React, { Component, HTMLAttributes } from 'react';
//@ts-ignore
import createRef from 'react-create-ref';
import classNames from 'classnames';
import { createPopper, Instance } from '@popperjs/core';

import debounce from 'lodash.debounce';

import styles from './component-highlighter.module.scss';
import { ComponentTooltip } from './tooltip/component-tooltip';

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
	private popperJsInstance?: Instance;
	private popperRef = createRef();

	state: ComponentHighlighterState = {
		highlighting: undefined,
	};

	componentDidUpdate(prevProps: ComponentHighlighterProps) {
		const nextProps = this.props;

		if (prevProps.active !== nextProps.active && !nextProps.active) {
			//triggers state change, but should not change props.active
			this.destroyPopper();
		}
	}

	_highlight = (targetElement: HTMLElement, value?: string) => {
		const { componentsDictionary } = this.props;
		const tooltip: HTMLElement = this.popperRef.current;
		if (!tooltip) return;

		if (targetElement.hasAttribute('data-ignore-component-highlight')) return;

		if (!value || !componentsDictionary[value]) {
			this.destroyPopper();
			return;
		}

		this.setState({ highlighting: value });

		this.popperJsInstance = createPopper(targetElement, tooltip, {
			placement: 'top',
			modifiers: [
				{
					name: 'flip',
					enabled: false,
				},
			],
		});
	};

	highlight = debounce(this._highlight, 180, {
		maxWait: 180,
	});


	handleEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { target } = event;
		const element = target as HTMLElement;

		if (!element) return;

		const bitId = element.getAttribute('data-bit-id') || undefined;

		this.highlight(element, bitId);
	};

	destroyPopper = () => {
		this.popperJsInstance && this.popperJsInstance.destroy();
		this.popperJsInstance = undefined;
		this.setState({ highlighting: undefined });
	};

	render() {
		const { active, children, componentsDictionary, ...rest } = this.props;
		const { highlighting } = this.state;
		const href = highlighting ? componentsDictionary[highlighting] : undefined;

		return (
			<div
				{...rest}
				className={classNames(styles.componentHighlighter, active && styles.active)}
				// "Both `onmouseenter` and `onmouseover` fire when the mouse enters the boundary of an element.
				// However, `onmouseenter` doesn't fire again (does not bubble),
				// if the mouse enters a child element within this first element."
				// https://stackoverflow.com/a/1638929/9941961

				// (this is perfect for this use case)
				onMouseOver={this.handleEnter}
				// triggers when mouse exists this element (and not its children)
				onMouseLeave={this.destroyPopper}
			>
				{children}
				<div ref={this.popperRef} data-ignore-component-highlight>
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
