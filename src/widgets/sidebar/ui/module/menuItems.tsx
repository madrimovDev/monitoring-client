import React from 'react'
import { DataSource } from '../Menu'
import HomeOutlined from '@ant-design/icons/HomeFilled'
import DashboardFilled from '@ant-design/icons/DashboardFilled'

const menuItems: DataSource[] = [
	{
		href: '',
		title: 'Dashboard',
		icon: <HomeOutlined style={{ fontSize: 'inherit' }} />,
		key: '1'
	},
	{
		href: 'admins',
		title: 'Admins',
		icon: <DashboardFilled style={{ fontSize: 'inherit' }} />,
		key: '2'
	}
]

export default menuItems
