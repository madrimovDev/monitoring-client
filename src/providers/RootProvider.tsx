import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@config/theme'

import '@fontsource/open-sans'

const RootProvider = () => {
	return (
		<>
			<ChakraProvider theme={theme}>
				App
			</ChakraProvider>
		</>
	)
}

export default RootProvider