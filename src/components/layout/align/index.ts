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

type bla = 'xs'| 'sm'| 'md'| 'l'| 'lg'| 'xl';

type TextOptions = {
	left: string;
	center: string;
	right: string;
};
type TextProps = {
	[key in BreakPoints]: TextOptions;
	// left: string;
	// center: string;
	// right: string;
};

const breakpoints = ['xs', 'sm', 'md', 'l', 'lg', 'xl'];
export const text = ((): any => {
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
	};
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
