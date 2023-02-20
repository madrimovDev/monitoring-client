import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '@config/theme'

import '@fontsource/open-sans'
import UserProvider from './UserProvider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider } from 'react-router-dom'
import { rootRouter } from '@routers'

const query = new QueryClient()

const RootProvider = () => {
	return (
		<>
			<QueryClientProvider client={query}>
				<ChakraProvider theme={theme}>
					<UserProvider>
						<RouterProvider router={rootRouter} />
					</UserProvider>
				</ChakraProvider>
			</QueryClientProvider>
		</>
	)
}

export default RootProvider
