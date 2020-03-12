import React, { Component, HTMLAttributes } from 'react';
import classNames from 'classnames';

import debounce from 'lodash.debounce';

import styles from './component-highlighter.module.scss';
import { ComponentTooltip } from './tooltip/component-tooltip';
import { OverlayBorder } from './overlay-border';
import { ComponentHighlightDictionary, VersionMap } from './content-type';

export interface ComponentHighlighterProps extends HTMLAttributes<HTMLDivElement> {
	active?: boolean;
	componentsDictionary: ComponentHighlightDictionary;
	versionMap?: VersionMap;
}

interface ComponentHighlighterState {
	highlightTargetId?: string;
	targetElement?: HTMLElement;
}

export class ComponentHighlighter extends Component<
	ComponentHighlighterProps,
	ComponentHighlighterState
> {
	state: ComponentHighlighterState = {
		highlightTargetId: undefined,
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

	private _highlight = (targetElement: HTMLElement, value?: string) => {
		const { componentsDictionary } = this.props;

		if (targetElement.hasAttribute('data-ignore-component-highlight')) return;

		if (!value || !componentsDictionary[value]) {
			this.setState({ targetElement: undefined, highlightTargetId: undefined });
			return;
		}

		this.setState({ targetElement: targetElement, highlightTargetId: value });
	};

	private highlight = debounce(this._highlight, 180);

	private handleEnter = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		const { target } = event;
		const element = target as HTMLElement;

		if (!element) return;

		const bitId = element.getAttribute('data-bit-id') || undefined;

		this.highlight(element, bitId);
	};

	private destroyPopper = () => {
		this.setState({ highlightTargetId: undefined, targetElement: undefined });
	};

	render() {
		const { active, children, componentsDictionary, versionMap = {}, ...rest } = this.props;
		const { highlightTargetId, targetElement } = this.state;

		const componentDetails = highlightTargetId
			? componentsDictionary[highlightTargetId]
			: { url: undefined };
		const explicitVersion = highlightTargetId && versionMap[highlightTargetId];

		const { url: href, displayName = highlightTargetId } = componentDetails;
		const version = explicitVersion || componentDetails.version;

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
						highlightTargetId && styles.visible
					)}
					targetElement={targetElement}
				>
					{displayName}
					{FormatVersion(version)}
				</ComponentTooltip>

				<OverlayBorder targetElement={targetElement} />
			</div>
		);
	}
}

function FormatVersion(version?: string) {
	if (!version) return '';

	return `@${version}`;
}
