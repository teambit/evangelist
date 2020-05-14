import React, { Component, RefObject } from 'react';
import classNames from 'classnames';

//@ts-ignore
import createRef from 'react-create-ref';
import { Instance, createPopper } from '@popperjs/core';

import styles from './overlay-border.module.scss';
import { ignorePopperSize } from '@bit/bit.base-ui.utils.popper-js.ignore-popper-size';
import { resizeToMatchReference } from '@bit/bit.base-ui.utils.popper-js.resize-to-match-reference';

const BASE_OFFSET = +styles.offset;

export type ComponentBorderProps = {
	/** DOM element to highlight */
	targetElement?: HTMLElement;
	/** Actively recalculate position, to support moving elements  */
	motionTracking?: boolean;
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
	private ref: RefObject<HTMLDivElement> = createRef();

	componentDidMount() {
		const { targetElement } = this.props;
		if (targetElement) {
			this.reposition(targetElement);
		}
	}

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

		const overlayElem = this.ref.current;
		if (!overlayElem) return;

		this.popperInstance = createPopper(targetElement, overlayElem, {
			placement: 'top-start',
			modifiers: popperModifiers,
		});

		window.requestAnimationFrame(this.step);
	};

	private step = () => {
		if (!this.popperInstance || !this.props.motionTracking) return;

		this.popperInstance.update();
		window.requestAnimationFrame(this.step);
	};

	private destroy() {
		if (!this.popperInstance) return;
		this.popperInstance.destroy();
		this.popperInstance = undefined;
	}

	render() {
		const { className, targetElement, motionTracking, ...rest } = this.props;
		return (
			<div
				{...rest}
				className={classNames(className, styles.overlayBorder)}
				ref={this.ref}
			/>
		);
	}
}

const popperModifiers = [
	ignorePopperSize,
	resizeToMatchReference,
	{
		name: 'flip',
		enabled: false,
	},
	{
		name: 'offset',
		options: {
			// move box from above the target ('top-start')
			// to directly cover the target.
			offset: ({ reference }: any) => [BASE_OFFSET, BASE_OFFSET - reference.height],
		},
	},
];
