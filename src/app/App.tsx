import React from 'react';

import {Terminal} from '../components/terminal';
import styles from './App.module.scss';

export function App() {
	return (
		<div className={styles['app']}>
			<Terminal />
		</div>
	);
}
