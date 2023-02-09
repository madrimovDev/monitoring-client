import { Col, Divider, Layout, Row } from 'antd'
import React from 'react'
import { Outlet } from 'react-router-dom'
import GoBack from '../../customs/GoBack'
import Sidebar from './Sidebar'

const { Content, Header } = Layout

const TeacherLayout = () => {
	return (
		<Layout
			style={{
				minHeight: '100vh'
			}}>
			<Sidebar />
			<Layout>
				<Header
					style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 10 }}>
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
