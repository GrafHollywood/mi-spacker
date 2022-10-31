import React from 'react';

import styles from './CommandLine.module.scss';

export interface ICommandLineProps {
	ip: string;
	command: string;
}

export const CommandLine = ({ip, command}: ICommandLineProps) => {
	return (
		<div>
			<span className={styles['welcome-line']}>root@{ip.trim()}$ </span>
			<span className={styles['command-line']}>{command}</span>
		</div>
	);
};
