import React, {useCallback, useEffect, useState} from 'react';

import styles from './CommandInput.module.scss';

export interface ICommandInputProps {
	ip: string;
}

export const CommandInput = ({ip}: ICommandInputProps) => {
	const [command, setCommand] = useState('');
	const keyboardInput = useCallback((event: KeyboardEvent) => {
		const pressedButton = event.key;
		if (pressedButton.length === 1) {
			setCommand(old => old + pressedButton);
		}
		if (pressedButton === 'Backspace') {
			setCommand(old => old.slice(0, -1));
		}
	}, []);
	useEffect(() => {
		document.addEventListener('keydown', keyboardInput, false);
		return () =>
			document.removeEventListener('keydown', keyboardInput, false);
	}, []);

	return (
		<div>
			<span className={styles['welcome-line']}>root@{ip.trim()}$ </span>
			<span className={styles['command-line']}>{command}</span>
		</div>
	);
};
