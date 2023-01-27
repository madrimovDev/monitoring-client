import React from 'react'
import { Layout, Menu } from 'antd'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const { Content } = Layout

const AdminLayout = () => {
	return (
		<Layout
			style={{
				minHeight: '100vh'
			}}>
			<Sidebar />
			<Content>
				<Outlet />
			</Content>
		</Layout>
	)
}

export default AdminLayout
