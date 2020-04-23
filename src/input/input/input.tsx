import React from 'react';
import classNames from 'classnames';
import styles from './input.module.scss';

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
	const { className, ...rest } = props;
	return <input {...rest} className={classNames(className, styles.evaInput)} />;
}

export function TextArea(props: React.InputHTMLAttributes<HTMLTextAreaElement>) {
	const { className, ...rest } = props;
	return <textarea {...rest} className={classNames(className, styles.evaInput)} />;
}
