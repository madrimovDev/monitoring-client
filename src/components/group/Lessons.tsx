import { GroupService } from '@services'
import { useAppSelector } from '@store'
import { formatDate } from '@utils'
import { Button, Divider, Space, Table, Typography } from 'antd'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

interface Props {
	id: string | undefined
}

const { Title } = Typography

const Lessons: FC<Props> = ({ id }) => {
	const { data, isFetching } = useQuery('group/lessons', async () => await GroupService.getGroupLessons(id))
	const permission = useAppSelector(state => state.user.data?.permissions[0])
	if (!data) return null

	return (
		<>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<Title level={4}>Lessons</Title>
				{permission === 'teacher' && <Button type='primary'>Create</Button>}
			</div>
			<Table
				dataSource={data.lessons}
				rowKey={d => d.id}
				pagination={false}
				loading={isFetching}
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
							return <Link to={'lesson/' + record.id + '/?title=' + record.title}>{record.title}</Link>
						}
					},
					{
						key: 'date',
						title: 'Date',
						render(_, record) {
							return formatDate(record.date)
						}
					},
					{
						key: 'type',
						title: 'Type',
						render(_, record) {
							return record.type
						}
					},
					{
						key: 'criteria',
						title: 'Criteria ball',
						render(_, record) {
							return record.criteria.maximum
						}
					}
				]}
			/>
		</>
	)
}

export default Lessons
