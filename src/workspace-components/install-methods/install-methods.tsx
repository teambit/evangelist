import React from 'react';
import classNames from 'classnames';
import styles from './install-methods.module.scss';
import { Grid } from '@bit/bit.base-ui.layout.grid-component';
import { PossibleSizes } from '@bit/bit.base-ui.theme.sizes';
import { H5 } from '../../elements/heading';
import { CopyBox } from '../copy-box';


type InstallMethodsData = {
	title: string;
	content: string;
};

type InstallMethodsProps = {
	data: InstallMethodsData[];
};
export function InstallMethods({ data }: InstallMethodsProps) {
	return (
		<Grid colMd={2} className={styles.copyMethod}>
			{data.map((method) => (
				<>
					<H5 className={styles.copyTitle} size={PossibleSizes.xxs}>
						{method.title}
					</H5>
					<CopyBox className={styles.copyBox}>{method.content}</CopyBox>
				</>
			))}
		</Grid>
	);
}
