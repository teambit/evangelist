import React from 'react';
import classNames from 'classnames';

import styles from './support-cta.module.scss';

import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { Paragraph } from '@bit/bit.base-ui.text.paragraph';
import { justifyItems, alignItems, text, marginCenter } from '@bit/bit.base-ui.layout.align';
import { centerColumn, textColumn } from '@bit/bit.base-ui.layout.page-frame';


import { H2 } from '../../../elements/heading';
import { Link } from '../../../elements/link';
import { Button } from '../../../elements/button';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';

/**
 * @name SupportCta
 * @description
 * A static section, calling users to contact us.
 * Assumes the consuming component to supply className with width and other styles.
 */
export function SupportCta(props: React.HTMLAttributes<HTMLDivElement>) {
	return (
		<Grid
			colL={2}
			// {...rest}
			data-bit-id="bit.evangelist/sections/enterprise-offering/hero"
			className={classNames(
				props.className,
				text.center,
				text.l.left,
				centerColumn,
				styles.mainGrid,
			)}
		>
			<div>
				<H2 size={PossibleSizes.xs}>
				Need support?
				</H2>
				<Paragraph size={PossibleSizes.xl}>
				Don’t hesitate to let us know!
				</Paragraph>
			</div>
			<div className={classNames(styles.buttons, alignItems.center)}>
				<Link href="/contact-sales">
					<Button className={styles.button} elevation="high" importance="cta">Contact support</Button>
				</Link>
				<Button elevation="high" className={styles.button} importance="normal">View plans</Button>
			</div>
		</Grid>
	);
}
