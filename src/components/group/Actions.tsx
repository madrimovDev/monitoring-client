import React from 'react'
import { Button, Space } from 'antd'
import { useAppSelector } from '@store'
import EditFilled from '@ant-design/icons/EditFilled'
import DeleteFilled from '@ant-design/icons/DeleteFilled'

const Actions = () => {
	const permission = useAppSelector(state => state.user.data?.permissions[0])
	if (permission !== 'admin') return null
	return (
		<Space>
			<Button
				type='primary'
				size='small'
				icon={<EditFilled />}>
				Edit
			</Button>
			<Button
				type='default'
				size='small'
				danger
				icon={<DeleteFilled />}>
				Delete
			</Button>
		</Space>
	)
}

export default Actions
