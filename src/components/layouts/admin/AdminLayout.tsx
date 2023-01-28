import React, { useEffect } from 'react'
import { Col, Layout, Menu, Row } from 'antd'
import Sidebar from './Sidebar'
import { Outlet, useNavigate } from 'react-router-dom'
import { getStatistics, useActionCreator, useAppSelector } from '@store'

const { Content } = Layout

const AdminLayout = () => {
	const actions = useActionCreator({ getStatistics })
	const status = useAppSelector((state) => state.dashboard.status)
	const navigate = useNavigate()

	useEffect(() => {
		actions.getStatistics()
	}, [])

	useEffect(() => {
		if (status === 'fulfilled') {
			navigate('statistics')
		}
	}, [status])

	return (
		<Layout
			style={{
				minHeight: '100vh'
			}}>
			<Sidebar />
			<Content>
				<Row style={{ marginTop: 30 }}>
					<Col
						md={20}
						offset={2}
					>
						<Outlet />
					</Col>
				</Row>
			</Content>
		</Layout>
	)
}

export default AdminLayout
