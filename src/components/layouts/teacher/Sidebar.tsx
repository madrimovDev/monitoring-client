import React from 'react'
import { Button, Layout, Menu, Tooltip, Typography } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { useLocation } from 'react-router-dom'

import LogoutOutline from '@ant-design/icons/LogoutOutlined'
import LockFilled from '@ant-design/icons/LockFilled'

import { logout, useAppDispatch } from '@store'
import { getFromToString } from '@utils'

const menuItems: ItemType[] = []

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
