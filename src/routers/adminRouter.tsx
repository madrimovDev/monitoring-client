import React from 'react'
import { RouteObject } from 'react-router-dom'
import { Admins, Directions, Groups, Statistics, Teachers } from '@pages'

const adminRouter: RouteObject[] = [
	{
		path: 'statistics',
		element: <Statistics />
	},
	{
		path: 'admins',
		element: <Admins />,
		action: args => {
			console.log(args)
		}
	},
	{
		path: 'directions',
		element: <Directions />
	},
	{
		path: 'teachers',
		element: <Teachers />
	},
	{
		path: 'groups',
		element: <Groups />
	}
]

export default adminRouter
