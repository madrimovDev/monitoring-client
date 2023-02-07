import React from 'react'
import { deleteAdmin, updateAdminModal, useActionCreator, useAppSelector } from '@store'
import { Button, List } from 'antd'

const AdminsList = () => {
	const admins = useAppSelector(state => state.admins.data)
	const userId = useAppSelector(state => state.user.data?.userId)
	const status = useAppSelector(state => state.admins.status)

	const actions = useActionCreator({
		deleteAdmin,
		updateAdminModal
	})

	if (!admins) return null

	return (
		<List
			bordered
			loading={status === 'pending'}
			dataSource={admins}
			style={{ background: 'white' }}
			renderItem={item => {
				return (
					<List.Item
						actions={[
							<Button
								key='Edit'
								size='small'
								type='primary'
								onClick={() => actions.updateAdminModal(item)}>
								Edit
							</Button>,
							<Button
								key='Delete'
								size='small'
								danger
								type='primary'
								disabled={userId === item.userId}
								onClick={() => actions.deleteAdmin(item.id)}>
								Delete
							</Button>
						]}>
						<List.Item.Meta
							title={item.name}
							description={item.username}
						/>
					</List.Item>
				)
			}}
		/>
	)
}

export default AdminsList
