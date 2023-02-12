import { Col, Divider, Layout, Row } from 'antd'
import React, { useEffect } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import GoBack from '../../customs/GoBack'
import Sidebar from './Sidebar'

const { Content, Header } = Layout

const TeacherLayout = () => {
	const navigate = useNavigate()

	const { pathname } = useLocation()
	useEffect(() => {
		navigate('dashboard')
	}, [])

	useEffect(() => {
		if (pathname === '/teacher') {
			navigate('dashboard')
		}
	}, [pathname])

	return (
		<Layout
			hasSider
			style={{
				minHeight: '100vh'
			}}>
			<Sidebar />
			<Layout style={{ marginLeft: 200 }}>
				<Header
					style={{
						position: 'sticky',
						top: 0,
						background: 'white',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-end',
						gap: 10
					}}>
					<GoBack />
				</Header>
				<Content>
					<Row style={{ marginTop: 30 }}>
						<Col
							md={20}
							offset={2}>
							<Divider />
							<Outlet />
						</Col>
					</Row>
				</Content>
			</Layout>
		</Layout>
	)
}

export default TeacherLayout
