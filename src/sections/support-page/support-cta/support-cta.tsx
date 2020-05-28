import React from 'react';
import classNames from 'classnames';


import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { alignItems, text} from '@bit/bit.base-ui.layout.align';
import { centerColumn } from '@bit/bit.base-ui.layout.page-frame';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';

import { H2 } from '../../../elements/heading';
import { Link } from '../../../elements/link';
import { Button } from '../../../elements/button';

import styles from './support-cta.module.scss';

/**
 * @name SupportCta
 * @description
 * A static section, calling users to contact us.
 */
export function SupportCta(props: React.HTMLAttributes<HTMLDivElement>) {
	const { className, ...rest } = props;
	return (
		<Grid
			colMd={2}
			{...rest}
			data-bit-id="bit.evangelist/sections/enterprise-offering/hero"
			className={classNames(
				className,
				text.center,
				text.md.left,
				centerColumn,
				styles.mainGrid
			)}
		>
			<div className={styles.topSection}>
				<H2 size={PossibleSizes.xs}>Need support?</H2>
				<Paragraph size={PossibleSizes.xl}>Reach out to our team.</Paragraph>
			</div>
			<div className={classNames(styles.buttons, alignItems.center)}>
				<Link className={styles.link} href="/support">
					<Button className={styles.button} elevation="medium" importance="cta">
						Contact support
					</Button>
				</Link>
				<div className={styles.spacer} />
				<Link className={styles.link} href="/pricing">
					<Button elevation="medium" className={styles.button} importance="normal">
					Upgrade support
					</Button>
				</Link>
			</div>
		</Grid>
	);
}
