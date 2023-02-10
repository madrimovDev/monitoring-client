import React from 'react'
import { Button, Space, Table, Tooltip } from 'antd'
import { getAllStudents, useActionCreator, useAppSelector } from '@store'
import { GroupsService } from '@services'
import { formatDate, formatPhone } from '@utils'
import CustomLink from '../customs/CustomLink'
import { Link } from 'react-router-dom'
import AddGroup from '../customs/AddGroup'
import DeleteFilled from '@ant-design/icons/DeleteFilled'

const StudentsTable = () => {
	const data = useAppSelector(state => state.students.data)
	const status = useAppSelector(state => state.students.status)

	const actions = useActionCreator({
		getAllStudents
	})

	const onRemove = async (groupId: number, studentId: number) => {
		await GroupsService.removeStudentToGroup(groupId, studentId)
		actions.getAllStudents()
	}

	if (!data) return null

	return (
		<Table
			loading={status === 'pending'}
			dataSource={data}
			bordered
			rowKey={r => r.id}
			footer={data => {
				return (
					<>
						<strong>All Students: </strong> {data.length}
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
						return (
							<Link to={record.id.toString()}>
								{record.name} {record.surname}
							</Link>
						)
					}
				},
				{
					key: 'username',
					title: 'Username',
					render(_, record) {
						return record.username
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
					key: 'birthday',
					title: 'Birthday',
					render(_, record) {
						return formatDate(record.birthday)
					}
				},
				{
					key: 'groups',
					title: 'Groups',
					width: 300,
					render(_, record) {
						return (
							<>
								<Space
									split=','
									style={{ marginRight: 20 }}>
									{record.groups.map(group => (
										<Tooltip
											title={
												<>
													<Button
														type='primary'
														onClick={() => onRemove(group.id, record.id)}
														size='small'
														danger>
														Remove Group
													</Button>
												</>
											}
											key={group.id}>
											<span>
												<CustomLink
													key={group.id}
													to={'groups/' + group.id}>
													{group.name}
												</CustomLink>
											</span>
										</Tooltip>
									))}
								</Space>
								<AddGroup student={record} />
							</>
						)
					}
				},
				{
					key: 'actions',
					title: 'actions',
					render() {
						return (
							<Space>
								<Button
									size='middle'
									type='primary'
									danger
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

export default StudentsTable
