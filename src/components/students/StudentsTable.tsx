import React from 'react'
import { Button, Space, Table } from 'antd'
import { useAppSelector } from '@store'
import CustomLink from '../customs/CustomLink'
import { Link } from 'react-router-dom'
import { formatDate, formatPhone } from '@utils'

const StudentsTable = () => {
	const data = useAppSelector(state => state.students.data)
	const status = useAppSelector(state => state.students.status)

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
					render(_, record) {
						return (
							<Space>
								{record.groups.map(group => {
									return (
										<CustomLink
											key={group.id}
											to={'groups/' + group.id}>
											{group.name}
										</CustomLink>
									)
								})}
							</Space>
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
									size='small'
									type='primary'>
									Edit
								</Button>
								<Button
									size='small'
									type='primary'
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

export default StudentsTable
