import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Login, RedirectRole } from '@pages'
import { RequireAuth } from '@pages'

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
				element: <>Admin</>
			},
			{
				path: 'teacher',
				element: <>Teacher</>
			}
		]
	}
])

export default rootRouter
