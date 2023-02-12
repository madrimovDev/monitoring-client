import React from 'react'
import { LoaderFunctionArgs, RouteObject } from 'react-router-dom'
import { Dashboard, Group, TeacherGroup } from '@pages'
import { Lesson } from '@components'
import { GroupService } from '@services'

const teacherRouter: RouteObject[] = [
	{
		path: 'dashboard',
		element: <Dashboard />
	},
	{
		path: 'groups/:groupId',
		element: <TeacherGroup />,
		children: [
			{
				index: true,
				element: <Group />
			},
			{
				path: 'lesson/:lessonId',
				element: <Lesson />,
				loader: async ({ params }) => {
					return await GroupService.getLessonAssessments(params.groupId, params.lessonId)
				}
			}
		]
	}
]

export default teacherRouter
