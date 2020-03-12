import { Modifier } from '@popperjs/core';

export const ignorePopperSize: Modifier<{}> = {
	name: 'ignorePopperSize',
	enabled: true,
	phase: 'beforeRead',
	fn({ state }) {
		state.rects.popper = {
			...state.rects.popper,
			height: 0,
			width: 0,
		};
	},
};
