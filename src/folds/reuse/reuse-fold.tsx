import React, { ReactNode } from 'react';
import classnames from 'classnames';

import { H2, H3 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { Paragraph } from '../../components/base/paragraph';
import { Label } from '../../components/base/label';

import styles from './reuse-fold.module.scss';
import { singleColumn } from '../../components/layout/grid';
import { staticStorageUrl } from '../../constants/storage';

export function ReuseFold(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div {...props} className={classnames(singleColumn, styles.reuseFold, props.className)}>
			<Label className={styles.ctaLabel} color="hotpink">
				Reuse
			</Label>
			<H2 size={PossibleSizes.md}>Reuse everything in a collaborative ecosystem</H2>
			<Paragraph className={styles.subHeader}>
				Forget about monolithic libraries, and create your collaborative component
				ecosystem. Make it easy for everyone to share, discover and reuse every
				component you have. We provides everything you need out of the box, so you can
				focus on building great apps.
			</Paragraph>

			<div>
				<Details
					img={`${staticStorageUrl}/homepage/collaborate.svg`}
					title="Organize and discover components"
				>
					Keep components organized and segmented using labels and namespaces. Easily
					discover components using smart search and powerful filters.
				</Details>
				<Details
					img={`${staticStorageUrl}/homepage/collaborate.svg`}
					title="Write code, generate stunning docs"
				>
					Focus on writing code and let Bit generate your API documentation, prop
					tables and more. Enjoy a live, editable component sandbox to visually
					explore components.
				</Details>
				<Details
					img={`${staticStorageUrl}/homepage/collaborate.svg`}
					title="Reuse any component, any way you like"
				>
					Install any component from the Bit.dev registry using yarn or npm. Or, use
					Bit to fork any component into your local project to quickly edit and debug.
					Updated a new version? Share it with your team!
				</Details>
				<Details
					img={`${staticStorageUrl}/homepage/collaborate.svg`}
					title="Easily on board new team members"
				>
					Make it easy for every team member to learn what you already have. Make it
					easy for new people to find and use every component you have, with their own
					eyes.
				</Details>
			</div>
		</div>
	);
}

function Details({
	img,
	title,
	children,
}: {
	img: string;
	title: ReactNode;
	children: ReactNode;
}) {
	return (
		<div>
			<img src={img} alt="visualization" />
			<H3 size={PossibleSizes.xs}>{title}</H3>
			<Paragraph>{children}</Paragraph>
		</div>
	);
}
