import {MoonIcon, SunIcon} from '@chakra-ui/icons';
import {Box, Button, Icon, Link, useColorMode} from '@chakra-ui/react';
import React from 'react';
import {SiGithub} from 'react-icons/si';

export const Toolbar = () => {
	const {colorMode, toggleColorMode} = useColorMode();
	return (
		<Box
			display="flex"
			flexDirection="row"
			alignItems="center"
			columnGap="8px"
			h="64px">
			<Link fontWeight="bold">Matthew</Link>
			<Link>Works</Link>
			<Box flexGrow="1" />
			<Link
				width="40px"
				href="https://github.com/GrafHollywood/mi-spacker"
				isExternal>
				<Icon width="40px" as={SiGithub} />
			</Link>
			<Button onClick={toggleColorMode}>
				{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
			</Button>
		</Box>
	);
};
