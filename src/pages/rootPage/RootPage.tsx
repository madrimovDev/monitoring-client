import React from 'react'
import { Header, Layout, Sidebar } from '@/widgets'

const RootPage = () => {
	return (
		<>
			<Layout
				header={<Header />}
				sidebar={<Sidebar />}
				content={'Content'}
			/>
		</>
	)
}

export default RootPage
