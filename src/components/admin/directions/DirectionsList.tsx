import React from 'react'
import { deleteDirection, updateDirectionModal, useActionCreator, useAppSelector } from '@store'
import { Button, List } from 'antd'

const DirectionsList = () => {
	const directions = useAppSelector(state => state.directions.data)
	const status = useAppSelector(state => state.directions.status)

	const actions = useActionCreator({
		deleteDirection,
		updateDirectionModal
	})

	if (!directions) return null

	return (
		<List
			bordered
			loading={status === 'pending'}
			dataSource={directions}
			style={{ background: 'white' }}
			renderItem={item => {
				return (
					<List.Item
						actions={[
							<Button
								key='Edit'
								onClick={() => actions.updateDirectionModal(item)}
								type='primary'>
								Edit
							</Button>,
							<Button
								key='Delete'
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
