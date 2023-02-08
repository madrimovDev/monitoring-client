import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { formatDate } from '@utils'
import { Button, Card, Divider, Space, Table, Typography } from 'antd'
import { GroupService } from '@services'
import { CustomLink } from '@components'

const { Title, Paragraph } = Typography

const Group = () => {
	const { id } = useParams<{ id: string }>()

	const group = useQuery('group', {
		queryFn: async () => GroupService.getGroup(id)
	})

	const students = useQuery('students', {
		queryFn: async () => GroupService.getGroupStudets(id)
	})

	const teacher = useQuery('teacher', {
		queryFn: async () => GroupService.getGroupTeacher(id)
	})

	return (
		<Card loading={group.isFetching || students.isFetching || teacher.isFetching}>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Title level={3}>Name: {group.data?.group.name}</Title>
				<Button
					type='primary'
					size='small'
					danger>
					Delete Group
				</Button>
			</div>
			<Space.Compact
				direction='vertical'
				size='small'>
				<Paragraph>Months: {group.data?.group.months}</Paragraph>
				<Paragraph>Direction: {group.data?.group.directionId}</Paragraph>
				<Paragraph>
					Teacher:{' '}
					{teacher.data?.teacher ? (
						<CustomLink to={'teachers/' + teacher.data.teacher.id}>
							{teacher.data.teacher.name} {teacher.data.teacher.surname}
						</CustomLink>
					) : (
						'No Teacher'
					)}
				</Paragraph>
			</Space.Compact>
			<Divider />
			<Title level={4}>Students</Title>
			<Table
				pagination={false}
				loading={students.isLoading}
				dataSource={students.data?.students}
				rowKey={data => data.id}
				columns={[
					{
						key: '#',
						title: '#',
						render(_, render, index) {
							return index + 1
						}
					},
					{
						key: 'name',
						title: 'Name',
						render(_, record) {
							return (
								<>
									{record.name} {record.surname}
								</>
							)
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
						key: 'status',
						title: 'Status',
						render(_, record) {
							return record.status
						}
					}
				]}
			/>
			<Divider />
			<Title level={4}>Lessons</Title>
		</Card>
	)
}

export default Group
