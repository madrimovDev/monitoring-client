import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import {
	Admins,
	Dashboard,
	Direction,
	Directions,
	Login,
	DirectionsPage,
	RequiredAuth,
	RequiredPermission,
	RootPage
} from '@/pages'

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
						element: <DirectionsPage />,
						children: [
							{
								index: true,
								element: <Directions />
							},
							{
								path: ':directionId',
								element: <Direction />
							}
						]
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
