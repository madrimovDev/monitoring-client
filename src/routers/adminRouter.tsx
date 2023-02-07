import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Admins, Direction, Directions, Group, Groups, Statistics, Teacher, Teachers } from '@pages'
import { DirectionsList, GroupsTable, TeachersTable } from '@components'

const adminRouter: RouteObject[] = [
	{
		path: 'statistics',
		element: <Statistics />
	},
	{
		path: 'admins',
		element: <Admins />
	},
	{
		path: 'directions',
		element: <Directions />,
		children: [
			{
				index: true,
				element: <DirectionsList />
			},
			{
				path: ':id',
				element: <Direction />
			}
		]
	},
	{
		path: 'teachers',
		element: <Teachers />,
		children: [
			{
				index: true,
				element: <TeachersTable />
			},
			{
				path: ':id',
				element: <Teacher />
			}
		]
	},
	{
		path: 'groups',
		element: <Groups />,
		children: [
			{
				index: true,
				element: <GroupsTable />
			},
			{
				path: ':id',
				element: <Group />
			}
		]
	}
]

export default adminRouter
