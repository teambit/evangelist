import React from 'react';
import classNames from 'classnames';

import { Paragraph } from '../../components/base/paragraph';

import { PossibleSizes } from '../../constants/sizes';
import { H1, H2, H5 } from '../../components/concrete/heading';
import { Label } from '../../components/base/label';
import styles from './fold5.module.scss';
import { Separator } from '../../components/base/separator';

export function Fold5() {

	return (
		<div className={classNames(styles.fold5)}>
			<div className={classNames(styles.maxWidth)}>
				<Label className={styles.ctaLabel}>Build</Label>
				<H2 size={PossibleSizes.xs}>Hyper fast Incrementall component builds</H2>
				<Paragraph>
					Increase productivity with a powerful CI/CD process for every component.
					Constantly build and test changes to components to see results. Continuously
					integrate, deploy and deliver new component versions from concept to
					production. Deliver faster.
				</Paragraph>
				<img src="https://static.bit.dev/homepage-bit/4-integrate.png" />
				<div className={styles.textBoxesSection}>
					<div>
						<H5 size={PossibleSizes.xxs}>
							Automatically propagate liability updates
						</H5>
						<Paragraph>
							Distribute frontends between teams though scopes of components. Each
							team and build, own and maintain their components from idea to
							production.
						</Paragraph>
					</div>

					<div>
						<H5 size={PossibleSizes.xxs}>Pinpoint issues to components</H5>
						<Paragraph>
							Empower each team to innovate in fast-paced delivery cycles. Let
							smaller teams make decisions and relentlessly drive towards their
							goals to deliver better results.
						</Paragraph>
					</div>
					<div>
						<H5 size={PossibleSizes.xxs}>Hyper-fast build time</H5>
						<Paragraph>
							Make it easy for every developer to harvest and share their
							components. Increase usage and adoption of components in a
							collaborative ecosystem to gain UI consistency.
						</Paragraph>
					</div>
				</div>
				<Separator />
			</div>
		</div>
	);
}
