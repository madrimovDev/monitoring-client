import React from 'react'
import { Button, Space, Table, Tag } from 'antd'
import { deleteGroup, useActionCreator, useAppSelector } from '@store'
import CustomLink from '../customs/CustomLink'
import { Link } from 'react-router-dom'
import CustomSkeleton from '../customs/CustomSkeleton'
import AddTeacher from '../customs/AddTeacher'

const GroupsTable = () => {
	const data = useAppSelector(state => state.groups.data)
	const status = useAppSelector(state => state.groups.status)
	const actions = useActionCreator({
		deleteGroup
	})

	if (!data || (status === 'pending' && !data)) {
		return <CustomSkeleton />
	}

	const onDelete = (id: number) => {
		actions.deleteGroup(id)
	}

	return (
		<Table
			loading={status === 'pending'}
			dataSource={data}
			bordered
			rowKey={r => r.id}
			footer={data => {
				return (
					<>
						<strong>All Groups: </strong> {data.length}
					</>
				)
			}}
			columns={[
				{
					key: 'index',
					title: '#',
					render(_, record, index) {
						return index + 1
					}
				},
				{
					key: 'name',
					title: 'Name',
					render(_, record) {
						return <Link to={record.id.toString()}>{record.name}</Link>
					}
				},
				{
					key: 'direction',
					title: 'Direction',
					render(_, record) {
						return <CustomLink to={'directions/' + record.direction.id}>{record.direction.name}</CustomLink>
					}
				},
				{
					key: 'month',
					title: 'Months',
					render(_, record) {
						return record.months
					}
				},
				{
					key: 'teacher',
					title: 'Teacher',
					render(_, record) {
						if (record.teacher) {
							return (
								<CustomLink to={'teachers/' + record.teacher.id}>
									{record.teacher.name} {record.teacher.surname}
								</CustomLink>
							)
						}
						return (
							<Space>
								<Tag color='red'>No Data</Tag>
								<AddTeacher group={record} />
							</Space>
						)
					}
				},
				{
					key: 'actions',
					title: 'actions',
					render(_, record) {
						return (
							<Space>
								<Button
									size='small'
									type='primary'>
									Edit
								</Button>
								<Button
									size='small'
									type='primary'
									onClick={() => onDelete(record.id)}
									danger>
									Delete
								</Button>
							</Space>
						)
					}
				}
			]}
		/>
	)
}

export default GroupsTable
