import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Dashboard, Group, TeacherGroup } from '@pages'
import { Lesson } from '@components'

const teacherRouter: RouteObject[] = [
	{
		path: 'dashboard',
		element: <Dashboard />
	},
	{
		path: 'groups/:id',
		element: <TeacherGroup />,
		children: [
			{
				index: true,
				element: <Group />
			},
			{
				path: 'lesson/:id',
				element: <Lesson />
			}
		]
	}
]

export default teacherRouter
