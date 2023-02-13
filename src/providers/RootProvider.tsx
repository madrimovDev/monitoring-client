import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { rootRouter } from '@routers'
import { store } from '@store'
import { QueryClient, QueryClientProvider } from 'react-query'

const query = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			refetchOnReconnect: false
		}
	}
})

const RootProvider: FC = () => {
	return (
		<>
			<Provider store={store}>
				<QueryClientProvider client={query}>
					<RouterProvider router={rootRouter} />
				</QueryClientProvider>
			</Provider>
		</>
	)
}

export default RootProvider
