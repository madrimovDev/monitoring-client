import React from 'react'
import { deleteTeacher, updateTeacherModal, useActionCreator, useAppSelector } from '@store'
import { Button, Space, Table, Tag } from 'antd'
import { Link, useNavigate } from 'react-router-dom'

const TeachersTable = () => {
	const teachers = useAppSelector(state => state.teachers.data)
	const status = useAppSelector(state => state.teachers.status)
	const navigate = useNavigate()

	const actions = useActionCreator({
		deleteTeacher,
		updateTeacherModal
	})

	const handleDelete = (id: number) => actions.deleteTeacher(id)
	const handleEdit = (teacher: Teachers.Teacher) => navigate(teacher.id.toString())

	if (!teachers) return null

	return (
		<Table
			loading={status === 'pending'}
			dataSource={teachers}
			rowKey={item => item.id}
			bordered
			expandable={{
				expandedRowRender(record) {
					return (
						<Table
							bordered
							dataSource={record.groups}
							pagination={false}
							showHeader
							rowKey={item => item.id}
							title={() => 'Groups'}
							columns={[
								{
									key: 'name',
									title: 'Name',
									render(_, record) {
										return <Link to={'#'}>{record.name}</Link>
									}
								},
								{
									key: 'direction',
									title: 'Direction',
									render(_, record) {
										return <Link to={'#'}>{record.direction.name}</Link>
									}
								},
								{
									key: 'students',
									title: 'Students count',
									render(_, record) {
										return record.students
									}
								}
							]}
						/>
					)
				}
			}}
			columns={[
				{
					key: 'name',
					title: 'Name',
					render(_, record) {
						return record.name
					}
				},
				{
					key: 'surname',
					title: 'Surname',
					render(_, record) {
						return record.surname
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
						return record.phone
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
									size='small'
									type='primary'>
									Delete
								</Button>
								<Button
									onClick={() => handleEdit(record)}
									size='small'
									type='primary'>
									Edit
								</Button>
							</Space>
						)
					}
				}
			]}
		/>
	)
}

export default TeachersTable
