import React, { Component } from 'react';
import classNames from 'classnames';

//@ts-ignore
import createRef from 'react-create-ref';
import { Instance, createPopper } from '@popperjs/core';

import styles from './overlay-border.module.scss';
import { ignorePopperSize } from '@bit/bit.base-ui.utils.popper-js.ignore-popper-size';
import { resizeToMatchReference } from '@bit/bit.base-ui.utils.popper-js.resize-to-match-reference';

export type ComponentBorderProps = {
	/** DOM element to highlight */
	targetElement?: HTMLElement;
} & React.HTMLAttributes<HTMLDivElement>;
 
/**
 * Highlight a component using a border.<br/>
 * The border is positioned at the top left of the component using [Popper.js](https://popper.js.org/),
 * and covers the element from edge to edge. The border does not interfere with normal user flow,
 * using `pointer-events: none; user-select: none;`.
 *
 * @name OverlayBorder
 * @example
 * this.elementRef = react.createRef();
 * //...
 * <OverlayBorder targetElement={this.elementRef.current} />
 */
export class OverlayBorder extends Component<ComponentBorderProps> {
	private popperInstance?: Instance;
	private ref = createRef();

	componentWillUnmount() {
		this.destroy();
	}

	componentDidUpdate(prevProps: ComponentBorderProps) {
		const nextProps = this.props;

		if (prevProps.targetElement !== nextProps.targetElement) {
			this.reposition(nextProps.targetElement);
		}
	}

	private reposition = (targetElement?: HTMLElement) => {
		if (!targetElement) {
			this.destroy();
			return;
		}

		const overlayElem: HTMLDivElement = this.ref.current;

		if (!overlayElem) return;

		this.popperInstance = createPopper(targetElement, overlayElem, {
			placement: 'top-start',
			modifiers: [
				ignorePopperSize,
				resizeToMatchReference,
				{
					name: 'flip',
					enabled: false,
				},
				{
					name: 'computeStyles',
					options: {
						// do not update coordinates continuously, and ignore popper size
						adaptive: false,
					},
				},
				{
					name: 'offset',
					options: {
						offset: [-6, 6],
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
		const { className, targetElement, ...rest } = this.props;
		return (
			<div
				{...rest}
				className={classNames(className, styles.overlayBorder)}
				ref={this.ref}
			></div>
		);
	}
}
