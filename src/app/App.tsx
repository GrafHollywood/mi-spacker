import {Container} from '@chakra-ui/react';
import React from 'react';

import {Toolbar} from '../components/toolbar/Toolbar';

export function App() {
	return (
		<Container maxW="900px">
			<Toolbar />
		</Container>
	);
}
