import React from 'react'
import { Button, Layout, Menu, Typography } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { Link, useLocation } from 'react-router-dom'

import DotChartOutlined from '@ant-design/icons/DotChartOutlined'
import TeamOutlined from '@ant-design/icons/TeamOutlined'
import LogoutOutline from '@ant-design/icons/LogoutOutlined'
import ClusterOutlined from '@ant-design/icons/ClusterOutlined'
import { logout, useAppDispatch } from '@store'
import { getFromToString } from '@utils'

const menuItems: ItemType[] = [
	{
		key: 'statistics',
		icon: <DotChartOutlined />,
		label: <Link to='statistics'>Statistics</Link>
	},
	{
		key: 'admins',
		icon: <TeamOutlined />,
		label: <Link to='admins'>Admins</Link>
	},
	{
		key: 'directions',
		icon: <ClusterOutlined />,
		label: <Link to={'directions'}>Directions</Link>
	}
]

const Sidebar = () => {
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()

	const selectedKey = getFromToString(pathname, '/')
	const logoutHandler = () => dispatch(logout())

	return (
		<Layout.Sider
			theme='light'
			breakpoint='md'>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					height: '100%'
				}}>
				<Typography.Title
					level={5}
					style={{ margin: 16 }}
					type='secondary'>
					Monitoring
				</Typography.Title>
				<Menu
					items={menuItems}
					selectedKeys={[selectedKey]}
				/>
				<div
					style={{
						flexGrow: 1,
						display: 'flex',
						flexDirection: 'column',
						justifyContent: 'flex-end',
						alignItems: 'flex-start',
						margin: 16
					}}>
					<Button
						type='ghost'
						size='small'
						onClick={logoutHandler}
						icon={<LogoutOutline />}>
						Logout
					</Button>
				</div>
			</div>
		</Layout.Sider>
	)
}

export default Sidebar
