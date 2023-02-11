import React from 'react'
import { deleteDirection, updateDirectionModal, useActionCreator, useAppSelector } from '@store'
import { Button, List } from 'antd'

const DirectionsList = () => {
	const directions = useAppSelector(state => state.admin.directions.data)
	const status = useAppSelector(state => state.admin.directions.status)

	const actions = useActionCreator({
		deleteDirection,
		updateDirectionModal
	})

	if (!directions) return null

	return (
		<List
			loading={status === 'pending'}
			dataSource={directions}
			style={{ background: 'white' }}
			renderItem={item => {
				return (
					<List.Item
						actions={[
							<Button
								key='Edit'
								size='small'
								onClick={() => actions.updateDirectionModal(item)}
								type='primary'>
								Edit
							</Button>,
							<Button
								key='Delete'
								size='small'
								danger
								type='primary'
								onClick={() => actions.deleteDirection(item.id)}>
								Delete
							</Button>
						]}>
						<List.Item.Meta
							title={item.name}
							description={item.status}
						/>
					</List.Item>
				)
			}}
		/>
	)
}

export default DirectionsList
