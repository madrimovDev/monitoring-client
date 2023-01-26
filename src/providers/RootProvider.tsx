import React, { FC } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { rootRouter } from '@routers'
import { store } from '@store'

const RootProvider: FC = () => {
	return (
		<>
			<Provider store={store}>
				<RouterProvider router={rootRouter} />
			</Provider>
		</>
	)
}

export default RootProvider
