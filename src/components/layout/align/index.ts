import styles from './align.module.scss';

export const text = {
	left: styles['text-left'],
	center: styles['text-center'],
	right: styles['text-right'],
};

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
}
