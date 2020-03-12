import React, { Component, HTMLAttributes } from 'react';
//@ts-ignore
// import createRef from 'react-create-ref';
import classNames from 'classnames';
// import { Modifier } from '@popperjs/core';

import debounce from 'lodash.debounce';

import styles from './component-highlighter.module.scss';
import { ComponentTooltip } from './tooltip/component-tooltip';
// import { ComponentBorder } from './border/border';
import { OverlayBorder } from './overlay-border';

export interface ComponentHighlighterProps extends HTMLAttributes<HTMLDivElement> {
	active?: boolean;
	componentsDictionary: { [id: string]: string };
}

interface ComponentHighlighterState {
	highlighting?: string;
	targetElement?: HTMLElement;
}

export class ComponentHighlighter extends Component<
	ComponentHighlighterProps,
	ComponentHighlighterState
> {
	// private borderRef = createRef();

	state: ComponentHighlighterState = {
		highlighting: undefined,
		targetElement: undefined,
	};

	componentDidUpdate(prevProps: ComponentHighlighterProps) {
		const nextProps = this.props;

		if (prevProps.active !== nextProps.active && !nextProps.active) {
			//triggers state change, but should not change props.active
			this.destroyPopper();
		}
	}

	componentWillUnmount() {
		this.highlight.cancel();
	}

	_highlight = (targetElement: HTMLElement, value?: string) => {
		const { componentsDictionary } = this.props;

		if (targetElement.hasAttribute('data-ignore-component-highlight')) return;

		if (!value || !componentsDictionary[value]) {
			this.setState({ targetElement: undefined, highlighting: undefined });
			return;
		}

		this.setState({ targetElement: targetElement, highlighting: value });
	};

	highlight = debounce(this._highlight, 180);

	handleEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { target } = event;
		const element = target as HTMLElement;

		if (!element) return;

		const bitId = element.getAttribute('data-bit-id') || undefined;

		this.highlight(element, bitId);
	};

	destroyPopper = () => {
		this.setState({ highlighting: undefined, targetElement: undefined });
	};

	render() {
		const { active, children, componentsDictionary, ...rest } = this.props;
		const { highlighting, targetElement } = this.state;
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

				<ComponentTooltip
					href={href}
					className={classNames(
						styles.tooltipWrapper,
						highlighting && styles.visible
					)}
					targetElement={targetElement}
				>
					{highlighting}
				</ComponentTooltip>

				<OverlayBorder targetElement={targetElement} />
				{/* <ComponentBorder targetElement={targetElement}/> */}
				{/*  */}
				{/* </ComponentBorder> */}
				{/* </div> */}

				{/* <div ref={this.borderRef} className={styles.border}>
					stretcher
				</div> */}
			</div>
		);
	}
}
