import React from 'react'
import { Button, Dropdown, MenuProps, Space } from 'antd'
import DownOutlined from '@ant-design/icons/DownOutlined'

const items: MenuProps['items'] = [
	{
		key: 'create-admin',
		label: <Space>Create Admin</Space>
	},
	{
		key: 'create-teacher',
		label: <Space>Create Teacher</Space>
	}
]

const CreateDropDown = () => {
	return (
		<Dropdown
			menu={{
				items: items,
				onClick: (e) => {
					console.log(e)
				}
			}}
			dropdownRender={(menu) => {
				return menu
			}}
			arrow>
			<Button
				type='primary'
				icon={<DownOutlined />}>
				Create
			</Button>
		</Dropdown>
	)
}

export default CreateDropDown
