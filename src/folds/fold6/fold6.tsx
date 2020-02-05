import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';

import { PossibleSizes } from '../../constants/sizes';
import { H1, H2, H5 } from '../../components/concrete/heading';
import { Label } from '../../components/base/label';
import styles from './fold6.module.scss';

export function Fold6(props: HTMLAttributes<HTMLDivElement>) {
	
	return (
		<div {...props} className={classNames(styles.fold6, props.className)}>
			<Label className={styles.ctaLabel}>Develop</Label>
			<div>WIP + RIP</div>
			<H2 size={PossibleSizes.md}>Develop components in simple decoupled codebases</H2>
			<div className={styles.splitCard}>
				<div>
					<H2 size={PossibleSizes.xs}>Simple yet scalable semantic versioning.</H2>
					<Paragraph>
						Leverage semantic versioning to control the development of each
						component. Deploy, update, or rollback specific components across
						different screens, features and apps.
					</Paragraph>
				</div>
				<img src="https://static.bit.dev/homepage-bit/2-simple.png" />
			</div>
			<div className={styles.splitCard}>
				<img src="https://static.bit.dev/homepage-bit/2-per.png" />
				<div>
					<H2 size={PossibleSizes.xs}>Per component development environment.</H2>
					<Paragraph>
						When writing a component, Bit spawns an development environment that
						lets you build, test and render modular components in isolation. It
						works with your favorite tools, and, it uses pre-made reusable
						configurations to save you time. Best practices included.
					</Paragraph>
				</div>
			</div>
		</div>
	);
}
