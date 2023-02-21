import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Login, RequiredAuth, RequiredPermission, RootPage } from '@/pages'

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
				element: <RootPage />
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	}
])

export default rootRouter
