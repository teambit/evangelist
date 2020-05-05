import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { MutedText } from '@bit/bit.base-ui.text.muted-text';

import { H2, H3 } from '../../../elements/heading';
import { Image } from '../../../elements/image';

import styles from './reliability.module.scss';
import { marginCenter, text } from '@bit/bit.base-ui.layout.align';
import { Link } from '../../../elements/link';

export const Reliability = (props: HTMLAttributes<HTMLDivElement>) => (
	<Grid
		colL={2}
		{...props}
		className={classNames(props.className, styles.reverseGrid, text.center, text.md.left)}
	>
		<div>
			<H2 size={PossibleSizes.sm}>Reliable and secured</H2>

			<AdvantageList />
		</div>
		<Image
			src="enterprise-offering-v1/4-secured-section/sphere-enterprise.png"
			alt="corporosphere"
			className={classNames(styles.corposphere, marginCenter)}
		/>
	</Grid>
);

const AdvantageList = () => (
	<ul className={styles.bulletList}>
		<li>
			<Image
				src="enterprise-offering-v1/4-secured-section/design.svg"
				alt="designed"
				className={styles.bullet}
			/>
			<div>
				<H3 size={PossibleSizes.xs}>Reliable by design</H3>
				<MutedText>
					Build with auto-scaling resources that never block you, while ensuring
					impeccable availability with a Google-grade multi-zone architecture.
				</MutedText>
			</div>
		</li>
		<li>
			<Image
				src="enterprise-offering-v1/4-secured-section/shield.svg"
				alt="shield"
				className={styles.bullet}
			/>
			<div>
				<H3 size={PossibleSizes.xs}>Always secured</H3>
				<MutedText>
					Keep your source-code and information secured with the highest-standards
					measures, policies, and practices.{' '}
					<Link external href="/resources/security">
						Learn more
					</Link>
				</MutedText>
			</div>
		</li>
		<li>
			<Image
				src="enterprise-offering-v1/4-secured-section/trusted.svg"
				alt="trusted"
				className={styles.bullet}
			/>
			<div>
				<H3 size={PossibleSizes.xs}>Trusted by the best</H3>
				<MutedText>
					Bit is trusted by over 100,000 developers and teams from the world’s leading
					companies from various industry sectors.
				</MutedText>
			</div>
		</li>
	</ul>
);
