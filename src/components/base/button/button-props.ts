import { ButtonHTMLAttributes, ReactNode } from 'react';

type BaseButtonProps = {
	loader?: ReactNode;
	loading?: boolean;
};
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & BaseButtonProps;
