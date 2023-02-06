import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RequireAuth, Login, RedirectRole } from '@pages'
import { AdminLayout } from '@components'
import adminRouter from './adminRouter'

const rootRouter = createBrowserRouter([
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/',
		element: <RequireAuth />,
		children: [
			{
				index: true,
				element: <RedirectRole />
			},
			{
				path: 'admin',
				element: <AdminLayout />,
				children: adminRouter
			}
		]
	}
])

export default rootRouter
