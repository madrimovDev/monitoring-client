import React, { useMemo, useState } from 'react'
import { Button, Layout, Menu, Tooltip, Typography } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { Link } from 'react-router-dom'

import LogoutOutline from '@ant-design/icons/LogoutOutlined'
import LockFilled from '@ant-design/icons/LockFilled'

import { logout, useAppDispatch, useAppSelector } from '@store'
import { useQuery } from 'react-query'
import { TeachersService } from '@services'
import GroupOutlined from '@ant-design/icons/GroupOutlined'
import DashboardFilled from '@ant-design/icons/DashboardFilled'

const Sidebar = () => {
	const dispatch = useAppDispatch()
	const userId = useAppSelector(state => state.user.data?.userId) || 0
	const [key, setKey] = useState('def')

	const { data } = useQuery('teacher/groups', async () => (await TeachersService.getTeacherGroup(userId)).data, {
		refetchOnWindowFocus: false,
		refetchOnMount: false
	})

	const menuItems: ItemType[] = useMemo(() => {
		const _default: ItemType = {
			key: 'def',
			label: <Link to={'dashboard'}>Dashboard</Link>,
			icon: <DashboardFilled />,
			onClick: () => setKey('def')
		}

		if (!data) return []

		return [
			_default,
			...data.groups.map<ItemType>(group => {
				return {
					key: group.id,
					label: <Link to={'groups/' + group.id}>{group.name}</Link>,
					icon: <GroupOutlined />,
					onClick: () => setKey(group.id.toString())
				}
			})
		]
	}, [data])

	const logoutHandler = () => dispatch(logout())

	return (
		<Layout.Sider
			style={{
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				height: '100vh',
				overflow: 'auto'
			}}
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
					items={menuItems}
					selectedKeys={[key]}
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
