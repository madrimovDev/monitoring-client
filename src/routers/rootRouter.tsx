import { Spinner } from '@components'
import React, { Suspense, lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

const Login = lazy(() => import('@pages/Login'))

const rootRouter = createBrowserRouter([
	{
		path: '/login',
		element: (
			<Suspense fallback={<Spinner />}>
				<Login />
			</Suspense>
		)
	}
])

export default rootRouter
