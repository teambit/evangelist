import React from 'react';
import classNames from 'classnames';
import styles from './card.module.scss';
import elevations from './elevations.module.scss';

export type CardProps = {
	elevation?: 'none' | 'low' | 'medium' | 'high';
} & React.HTMLAttributes<HTMLDivElement>;

/**
 * distinguishes a group of elements to improve readability
 * @name Card
 * @param {string} elevation controls shadow effect of the card
 */
export function Card({ className, elevation = 'low', ...rest }: CardProps) {
	return (
		<div className={classNames(styles.card, elevations[elevation], className)} {...rest} />
	);
}
