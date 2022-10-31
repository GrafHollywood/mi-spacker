import React, {useEffect, useState} from 'react';

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
		return ['start', 'npm install', 'npm start'].map((command, i) => (
			<CommandLine ip={ip} command={command} key={i} />
		));
	};

	return <div className={styles['terminal']}>{renderCommands()}</div>;
};
