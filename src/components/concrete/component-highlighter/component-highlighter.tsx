import React, { Component, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './component-highlighter.module.scss';

import { activateHighlighterTooltip } from './tooltip';

export interface ComponentHighlighterProps extends HTMLAttributes<HTMLDivElement> {
	active?: boolean;
}

export class ComponentHighlighter extends Component<ComponentHighlighterProps> {
	ref?: HTMLDivElement = undefined;

	componentDidMount() {
		if (this.props.active) {
			activateHighlighterTooltip(this.ref);
		}
	}

	handleRef = (instance: HTMLDivElement) => {
		this.ref = instance;
	};

	render() {
		const { active, ...rest } = this.props;

		return (
			<div
				{...rest}
				className={classNames(styles.componentHighlighter, active && styles.active)}
				ref={this.handleRef}
			/>
		);
	}
}
