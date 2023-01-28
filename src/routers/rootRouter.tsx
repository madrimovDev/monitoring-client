import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RequireAuth, Statistics, Login, RedirectRole, Admins } from '@pages'
import { AdminLayout } from '@components'

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
				children: [
					{
						path: 'statistics',
						element: <Statistics />
					},
					{
						path: 'admins',
						element: <Admins />
					}
				]
			},
			{
				path: 'teacher',
				element: <>Teacher</>
			}
		]
	}
])

export default rootRouter
