import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { RequireAuth, Login, RedirectRole } from '@pages'
import { AdminLayout, TeacherLayout } from '@components'
import adminRouter from './adminRouter'
import teacherRouter from './teacherTouter'

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
			},
			{
				path: 'teacher',
				element: <TeacherLayout />,
				children: teacherRouter
			}
		]
	}
])

export default rootRouter
