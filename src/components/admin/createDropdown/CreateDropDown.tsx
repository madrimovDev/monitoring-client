import React from 'react'
import { Button, Dropdown, MenuProps, Space } from 'antd'
import DownOutlined from '@ant-design/icons/DownOutlined'
import { createAdminModal, createDirectionModal, useActionCreator } from '@store'

const items: MenuProps['items'] = [
	{
		key: 'create-admin',
		label: <Space>Create Admin</Space>
	},
	{
		key: 'create-teacher',
		label: <Space>Create Teacher</Space>
	},
	{
		key: 'create-direction',
		label: <Space>Create Direction</Space>
	}
]

const CreateDropDown = () => {
	const actions = useActionCreator({
		createAdminModal,
		createDirectionModal
	})
	return (
		<Dropdown
			menu={{
				items: items,
				onClick: (e) => {
					if (e.key === 'create-admin') {
						actions.createAdminModal()
					} else if (e.key === 'create-direction') {
						actions.createDirectionModal()
					}
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
