import React from 'react'
import { DataSource } from '../Menu'
import HomeOutlined from '@ant-design/icons/HomeFilled'

const menuItems: DataSource[] = [
	{
		href: '/',
		title: 'Home',
		icon: <HomeOutlined />,
		key: '1'
	},
	{
		href: '/',
		title: 'About',
		key: '2'
	}
]

export default menuItems
