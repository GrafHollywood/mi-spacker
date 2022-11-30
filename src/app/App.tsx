import {Button, useColorMode} from '@chakra-ui/react';
import React from 'react';

import styles from './App.module.scss';

export function App() {
	const {colorMode, toggleColorMode} = useColorMode();
	return (
		<div className={styles['app']}>
			<Button onClick={toggleColorMode}>
				Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
			</Button>
		</div>
	);
}
