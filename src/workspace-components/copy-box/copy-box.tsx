import React from 'react';
import copy from 'copy-to-clipboard';
import styles from './copy-box.module.scss';
import classNames from 'classnames';

type CopyBoxProps = { children: string } & React.HTMLAttributes<HTMLDivElement>;

export function CopyBox({ children, className, ...rest }: CopyBoxProps) {
	const handleClick = () => {
		copy(children);
	};

	return (
		<div className={classNames(styles.copyBox, className)} {...rest}>
			<div>{children}</div>
			<button onClick={handleClick}>📋</button>
		</div>
	);
}
