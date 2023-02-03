import React, { useEffect } from 'react'
import { Col, Divider, Layout, Row } from 'antd'
import Sidebar from './Sidebar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { BreadCrumb } from '@components'
import CreateDropDown from '../../admin/createDropdown/CreateDropDown'
import CreateAdminModal from '../../admin/modals/CreateAdminModal'
import CreateDirectionModal from '../../admin/modals/CreateDirectionModal'
import CreateTeacherModal from '../../admin/modals/CreateTeacherModal'

const { Content, Header } = Layout

const AdminLayout = () => {
	const navigate = useNavigate()

	const { pathname } = useLocation()
	useEffect(() => {
		navigate('statistics')
	}, [])

	useEffect(() => {
		if (pathname === '/admin') {
			navigate('statistics')
		}
	}, [pathname])

	return (
		<Layout
			style={{
				minHeight: '100vh'
			}}>
			<Sidebar />
			<Layout>
				<Header style={{ background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
					<CreateDropDown />
				</Header>
				<Content>
					<Row style={{ marginTop: 30 }}>
						<Col
							md={20}
							offset={2}>
							<BreadCrumb />
							<Divider />
							<Outlet />
						</Col>
					</Row>
				</Content>
				<CreateAdminModal />
				<CreateDirectionModal />
				<CreateTeacherModal />
			</Layout>
		</Layout>
	)
}

export default AdminLayout
