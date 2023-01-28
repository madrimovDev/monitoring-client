import React from 'react'
import { useAppSelector } from '@store'
import { Button, List } from 'antd'

const AdminsList = () => {
	const admins = useAppSelector((state) => state.admins.admins)

	if (!admins) return null

	return (
		<List
			bordered
			dataSource={admins}
			renderItem={(item) => {
				return (
					<List.Item
						actions={[
							<Button
								key='Edit'
								type='primary'>
								Edit
							</Button>,
							<Button
								key='Delete'
								danger
								type='primary'>
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
