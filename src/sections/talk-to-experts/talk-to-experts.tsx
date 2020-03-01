import React from 'react';
import classNames from 'classnames';

import styles from './talk-to-experts.module.scss';

import { H2 } from '../../components/concrete/heading';
import { PossibleSizes } from '../../constants/sizes';
import { CtaButton } from '../../components/concrete/cta-button';
import { Paragraph } from '../../components/base/paragraph';
import { justifyItems, alignItems } from '../../components/layout/align';
import { Link } from '../../components/base/link';

export function TalkToExperts(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(
				props.className,
				styles.talkToExperts,
				justifyItems.center,
				alignItems.center
			)}
			data-bit-id="sections/talk-to-experts"
		>
			<div>
				<H2 size={PossibleSizes.xs}>
					Exploring component reuse? Talk to world experts
				</H2>
				<Paragraph size={PossibleSizes.xl}>
					We help the best teams reuse components together. Get in touch with our
					expert architects to find the best solution for your team!
				</Paragraph>
			</div>
			<div>
				<Link href="https://bit.dev/support">
					{/* pending final texts from Yoni */}
					<CtaButton>Get in touch 😉</CtaButton>
				</Link>
			</div>
		</div>
	);
}
