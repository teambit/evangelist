import styles from './align.module.scss';


// TODO - fix types!!!
enum BreakPoints {
	xs = 'xs',
	sm = 'sm',
	md = 'md',
	l = 'l',
	lg = 'lg',
	xl = 'xl',
}

type TextOptions = {
	left: string;
	center: string;
	right: string;
};
type TextProps = {
	left: string;
	center: string;
	right: string;

	xs: TextOptions;
	sm: TextOptions;
	md: TextOptions;
	l: TextOptions;
	lg: TextOptions;
	xl: TextOptions;
};

const breakpoints = ['xs', 'sm', 'md', 'l', 'lg', 'xl'];
export const text = ((): TextProps => {
	const medias = breakpoints
		.map(br => {
			const obj = {
				[br]: {
					left: styles[`text-${br}-left`],
					center: styles[`text-${br}-center`],
					right: styles[`text-${br}-right`],
				},
			};
			return obj;
		})
		.reduce((prev, next) => Object.assign(prev, next), {});
	return {
		left: styles['text-left'],
		center: styles['text-center'],
		right: styles['text-right'],
		...medias,
	} as TextProps;
})();

export const marginCenter = styles.marginCenter;

//consider moving this logic to <Grid/>
export const justifyItems = {
	left: styles['justifyItems-left'],
	center: styles['justifyItems-center'],
	right: styles['justifyItems-right'],
};

export const alignItems = {
	start: styles['alignItems-start'],
	center: styles['alignItems-center'],
	end: styles['alignItems-end'],
};
