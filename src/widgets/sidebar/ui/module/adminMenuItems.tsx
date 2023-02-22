import React from 'react'
import FileZipOutlined from '@ant-design/icons/FileZipOutlined'
import  GroupOutlined from '@ant-design/icons/GroupOutlined'
import TeamOutlined from '@ant-design/icons/TeamOutlined'
import UserOutlined from '@ant-design/icons/UserOutlined'
import  DashboardOutlined  from '@ant-design/icons/DashboardFilled'
import BranchesOutlined from '@ant-design/icons/BranchesOutlined'
import { DataSource } from '../Menu'

const adminMenuItems: DataSource[] = [
	{
		href: '',
		title: 'Dashboard',
		icon: <DashboardOutlined style={{ fontSize: 'inherit' }} />,
		key: '1'
	},
	{
		href: 'admins',
		title: 'Admins',
		icon: <UserOutlined style={{ fontSize: 'inherit' }} />,
		key: 'admins'
	},
	{
		key: 'directions',
		title: 'Directions',
		icon: <BranchesOutlined />,
		href: 'directions'
	},
	{
		key: 'teachers',
		title: 'Teachers',
		icon: <UserOutlined style={{ fontSize: 'inherit' }} />,
		href: 'teachers'
	},
	{
		key: 'students',
		title: 'Students',
		icon: <TeamOutlined style={{ fontSize: 'inherit' }} />,
		href: 'teachers'
	},
	{
		key: 'groups',
		title: 'Groups',
		icon: <GroupOutlined style={{ fontSize: 'inherit' }} />,
		href: 'groups'
	},
	{
		key: 'archive',
		title: 'Archive',
		icon: <FileZipOutlined style={{ fontSize: 'inherit' }} />,
		href: 'archive'
	}
]

export default adminMenuItems