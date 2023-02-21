import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '@/shared'
import { RouterProvider } from 'react-router-dom'
import rootRouter from './router/root.routes'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient()

const App = () => {
	return (
		<ChakraProvider theme={theme}>
			<QueryClientProvider client={client}>
				<RouterProvider router={rootRouter} />
			</QueryClientProvider>
		</ChakraProvider>
	)
}

export default App
