import React, {useEffect, useState} from 'react';

import {CommandInput} from '../command-input';
import {CommandLine} from '../command-line';
import styles from './Terminal.module.scss';

export const Terminal = () => {
	const [ip, setIp] = useState<string | null>(null);
	useEffect(() => {
		fetch('http://icanhazip.com')
			.then(res => res.text())
			.then(data => setIp(data));
	}, []);

	const renderCommands = () => {
		if (ip === null) return null;
		const commands = ['start', 'npm install', 'npm start'].map(
			(command, i) => <CommandLine ip={ip} command={command} key={i} />
		);
		commands.push(<CommandInput ip={ip} key={commands.length} />);
		return commands;
	};

	return <div className={styles['terminal']}>{renderCommands()}</div>;
};
