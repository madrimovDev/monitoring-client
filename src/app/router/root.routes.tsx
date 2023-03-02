import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Admins, Dashboard, Directions, Login, RequiredAuth, RequiredPermission, RootPage } from '@/pages'

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <RequiredAuth />,
		children: [
			{
				index: true,
				element: <RequiredPermission />
			},
			{
				path: 'admin',
				element: <RootPage />,
				children: [
					{
						index: true,
						element: <Dashboard />
					},
					{
						path: 'admins',
						element: <Admins />
					},
					{
						path: 'directions',
						element: <Directions />
					}
				]
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	}
])

export default rootRouter
