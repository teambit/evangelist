import React from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';

type InputProps = { error: boolean } & React.InputHTMLAttributes<HTMLInputElement>;
type TextareaProps = { error: boolean } & React.InputHTMLAttributes<HTMLTextAreaElement>;

export function Input(props: InputProps) {
	const { className, error, ...rest } = props;

	return (
		<input
			{...rest}
			data-error={error ? '' : undefined}
			className={classNames(className, styles.evaInput)}
		/>
	);
}

export function TextArea(props: TextareaProps) {
	const { className, error, ...rest } = props;
	return (
		<textarea
			{...rest}
			data-error={error ? '' : undefined}
			className={classNames(className, styles.evaInput)}
		/>
	);
}
