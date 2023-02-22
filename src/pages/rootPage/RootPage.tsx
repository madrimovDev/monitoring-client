import React from 'react'
import { Header, Layout, Profile, Sidebar } from '@/widgets'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
	return (
		<>
			<Layout
				header={<Header profile={<Profile />} theme />}
				sidebar={<Sidebar />}
				content={<Outlet />}
			/>
		</>
	)
}

export default RootPage
