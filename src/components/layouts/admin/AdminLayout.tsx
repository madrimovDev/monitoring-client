import React, { useEffect } from 'react'
import { Col, Layout, Row } from 'antd'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'

const { Content, Header } = Layout

const AdminLayout = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('statistics')
	}, [])

	return (
		<Layout
			style={{
				minHeight: '100vh'
			}}>
			<Sidebar />
			<Layout>
				<Header style={{ background: 'white' }}></Header>
				<Content>
					<Row style={{ marginTop: 30 }}>
						<Col
							md={20}
							offset={2}>
							<Outlet />
						</Col>
					</Row>
				</Content>
			</Layout>
		</Layout>
	)
}

export default AdminLayout
