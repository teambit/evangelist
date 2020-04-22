import colorStyles from './theme-color.module.scss';

export const baseColor = {
	primary: colorStyles.primary,
	secondary: colorStyles.secondary, //vigilant, fear,
	complementary: colorStyles.complementary,
	impulse: colorStyles.impulsive, //joy, danger,
	hunger: colorStyles.hungry, //risk, worry, confidence
	success: colorStyles.success,
	neutral: {
		default: colorStyles.neutral,
		muted: colorStyles.muted,
	},
};
