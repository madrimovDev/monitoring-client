import { GroupService } from '@services'
import { formatDate } from '@utils'
import { Table } from 'antd'
import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'

interface Props {
	id: string | undefined
}

const Lessons: FC<Props> = ({ id }) => {
	const { data, isFetching } = useQuery('group/lessons', async () => await GroupService.getGroupLessons(id))
	
	if (!data) return null

	return (
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
						return <Link to={'lesson/' + record.id}>{record.title}</Link>
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
	)
}

export default Lessons
