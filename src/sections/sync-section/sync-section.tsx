import React, { HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './enterprise-section.module.scss';

import { PossibleSizes } from '../../constants/sizes';
import { Image } from '../../components/concrete/image';
import { Paragraph } from '../../components/base/paragraph';

import { H2, H3, H5 } from '../../components/concrete/heading';
import { Label } from '../../components/base/label';

import { marginCenter, text, alignItems, justifyItems } from '../../components/layout/align';
import { Grid } from '../../components/layout/grid-component';

// import styles from './devSection.module.scss';
import { fourWayGrid } from '../../components/layout/grid-definition/four-way-grid';
import { Icon } from '../../components/concrete/icon';
import { CommunityLink } from '../../components/base/community-link';

export function EnterpriseSection(props: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...props}
			className={classNames(text.center, props.className)}
		>
			<Grid colSm={2} className={classNames(text.left, alignItems.center, styles.content)}>
				<div>
					<H2 size={PossibleSizes.sm}>
						Get your own enterprise-grade component cloud.
					</H2>
					<Paragraph>
						Bit lets you version and export components in minutes without having to
						setup complex libraries, define dependencies.
					</Paragraph>
					<div>
						<CommunityLink className={styles.ctaLink} href={'pricing'}>
							see plans and pricing {' '}
							<Icon of="right_arrow" className={styles.linkArrow} />
						</CommunityLink>
					</div>
				</div>
				<Image
					fullWidth
					alt="cloud components"
					src="homepage-bit/reuse-page/cloud-components.png"
				/>
			</Grid>

			<Grid colL={3} className={text.left}>
				<div>
					<Image
						className={styles.icon}
						alt="private"
						src="homepage-bit/reuse-page/private.svg"
					/>
					<H5 size={PossibleSizes.xxs}>Private and secured</H5>
					<Paragraph>
						Keep your code private and secured with highest standards.
					</Paragraph>
				</div>

				<div>
					<Image
						className={styles.icon}
						alt="cloud"
						src="homepage-bit/reuse-page/cloud.svg"
					/>
					<H5 size={PossibleSizes.xxs}>Zero setup overhead</H5>
					<Paragraph>
						Create a cloud workspace in seconds and start exporting.
					</Paragraph>
				</div>

				<div>
					<Image
						className={styles.icon}
						alt="vendor"
						src="homepage-bit/reuse-page/vendor.svg"
					/>
					<H5 size={PossibleSizes.xxs}>No vendor locking</H5>
					<Paragraph>Move components to your own server at any moment.</Paragraph>
				</div>
			</Grid>
		</div>
	);
}
