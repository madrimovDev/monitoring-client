import { Button } from 'antd'
import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

const rootRouter = createBrowserRouter([
	{
		path: '/',
		element: (
			<>
				<Button type='primary' size='large'>
					Button 
				</Button>
			</>
		)
	}
])

export default rootRouter
