import React from 'react'
import { Layout } from '@/widgets'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
	return (
		<>
			<Layout content={<Outlet />} />
		</>
	)
}

export default RootPage
