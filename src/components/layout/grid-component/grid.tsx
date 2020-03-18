import React, { PureComponent } from 'react';
import classNames from 'classnames';
import styles from './grid.module.scss';

import {
	colGrid,
	colGridL,
	colGridLg,
	colGridMd,
	colGridSm,
	colGridXl,
	colGridXs,
} from './grid-template';

type ColCount = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

type GridProps = {
	col?: ColCount;
	colL?: ColCount;
	colLg?: ColCount;
	colMd?: ColCount;
	colSm?: ColCount;
	colXl?: ColCount;
	colXs?: ColCount;
} & React.HTMLAttributes<HTMLDivElement>;

export class Grid extends PureComponent<GridProps> {
	render() {
		const { className, col, colL, colLg, colMd, colSm, colXl, colXs, ...rest } = this.props;

		const classes = [className, styles.gridContainer];

		//yup, it's dirty, but it does exactly what it is supposed to do.
		// don't abuse it

		if (col !== undefined) classes.push(colGrid[col]);
		if (colL !== undefined) classes.push(colGridL[colL]);
		if (colLg !== undefined) classes.push(colGridLg[colLg]);
		if (colMd !== undefined) classes.push(colGridMd[colMd]);
		if (colSm !== undefined) classes.push(colGridSm[colSm]);
		if (colXl !== undefined) classes.push(colGridXl[colXl]);
		if (colXs !== undefined) classes.push(colGridXs[colXs]);

		return <div {...rest} className={classNames(...classes)} data-bit-id="bit.base/layout/grid" />;
	}
}
