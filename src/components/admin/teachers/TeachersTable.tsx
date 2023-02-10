import React from 'react'
import { deleteTeacher, updateTeacherModal, useActionCreator, useAppSelector } from '@store'
import { Button, Space, Table, Tag } from 'antd'
import { formatPhone } from '@utils'
import DeleteFilled from '@ant-design/icons/DeleteFilled'
import CustomLink from '../../customs/CustomLink'

const TeachersTable = () => {
	const teachers = useAppSelector(state => state.teachers.data)
	const status = useAppSelector(state => state.teachers.status)

	const actions = useActionCreator({
		deleteTeacher,
		updateTeacherModal
	})

	const handleDelete = (id: number) => actions.deleteTeacher(id)

	if (!teachers) return null

	return (
		<Table
			loading={status === 'pending'}
			dataSource={teachers}
			rowKey={item => item.id}
			bordered
			columns={[
				{
					key: '#',
					title: '#',
					render(_, record, index) {
						return index + 1
					}
				},
				{
					key: 'name',
					title: 'Name',
					render(_, record) {
						return (
							<CustomLink to={'teachers/' + record.id}>
								{record.name} {record.surname}
							</CustomLink>
						)
					}
				},
				{
					key: 'directions',
					title: 'Directions',
					render(_, record) {
						return record.directions.map(direction => (
							<Tag
								key={direction.id}
								color='blue'>
								{direction.name}
							</Tag>
						))
					}
				},
				{
					key: 'phone',
					title: 'Phone',
					render(_, record) {
						return formatPhone(record.phone)
					}
				},
				{
					key: 'group',
					title: 'Groups Count',
					render(_, record) {
						return record.groups.length
					}
				},
				{
					key: 'actions',
					title: 'Actions',
					render(_, record) {
						return (
							<Space>
								<Button
									onClick={() => handleDelete(record.id)}
									danger
									size='middle'
									type='primary'
									shape='circle'
									icon={<DeleteFilled />}
								/>
							</Space>
						)
					}
				}
			]}
		/>
	)
}

export default TeachersTable
