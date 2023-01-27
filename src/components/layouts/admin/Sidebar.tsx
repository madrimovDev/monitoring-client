import React from 'react'
import { Layout, Menu, Typography } from 'antd'
import { ItemType } from 'antd/es/menu/hooks/useItems'
import { Link } from 'react-router-dom'

import DotChartOutlined from '@ant-design/icons/DotChartOutlined'
import TeamOutlined from '@ant-design/icons/TeamOutlined'

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
]

const Sidebar = () => {
	return (
		<Layout.Sider
			theme='light'
			breakpoint='md'>
			<Typography.Title
				level={5}
				style={{ margin: 16 }}
				type='secondary'>
				Monitoring
			</Typography.Title>
			<Menu items={menuItems} selectedKeys={['statistics']}/>
		</Layout.Sider>
	)
}

export default Sidebar
