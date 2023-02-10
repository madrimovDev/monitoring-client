import React from 'react'
import { Button, Layout, Menu, Tooltip, Typography } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { Link, useLocation } from 'react-router-dom'

import DotChartOutlined from '@ant-design/icons/DotChartOutlined'
import TeamOutlined from '@ant-design/icons/TeamOutlined'
import LogoutOutline from '@ant-design/icons/LogoutOutlined'
import ClusterOutlined from '@ant-design/icons/ClusterOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'
import GroupOutlined from '@ant-design/icons/GroupOutlined'
import LockFilled from '@ant-design/icons/LockFilled'
import FileZipFilled from '@ant-design/icons/FileZipFilled'

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
	},
	{
		key: 'teachers',
		icon: <UserOutlined />,
		label: <Link to='teachers'>Teachers</Link>
	},
	{
		key: 'groups',
		icon: <GroupOutlined />,
		label: <Link to='groups'>Groups</Link>
	},
	{
		key: 'students',
		icon: <UserOutlined />,
		label: <Link to='students'>Students</Link>
	},
	{
		key: 'archive',
		icon: <FileZipFilled />,
		label: 'Archive',
		children: [
			{
				key: 'all',
				label: <Link to='archive'>All</Link>
			},
			{
				key: 'Groups',
				icon: <GroupOutlined />,
				label: <Link to='archive/groups'>Groups</Link>
			},
			{
				key: 'Students',
				icon: <TeamOutlined />,
				label: <Link to='archive/students'>Students</Link>
			},
			{
				key: 'Teachers',
				icon: <UserOutlined />,
				label: <Link to='archive/teachers'>Teachers</Link>
			}
		]
	}
]

const Sidebar = () => {
	const dispatch = useAppDispatch()
	const { pathname } = useLocation()

	const selectedKey = getFromToString(pathname)
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
					type='danger'>
					LMS
				</Typography.Title>
				<Menu
					mode='inline'
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
					<Tooltip
						title='Hudo Xoloso ishlidi. :)))'
						placement='right'
						color='gold'>
						<Button
							type='ghost'
							size='small'
							disabled
							icon={<LockFilled />}>
							Lock
						</Button>
					</Tooltip>
				</div>
			</div>
		</Layout.Sider>
	)
}

export default Sidebar
