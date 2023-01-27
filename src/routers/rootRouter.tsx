import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Login } from '@pages'

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: <Login />
	}
])

export default rootRouter
