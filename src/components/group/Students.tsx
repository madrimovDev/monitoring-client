import { GroupService } from '@services'
import { formatDate } from '@utils'
import { Table } from 'antd'
import React, { FC } from 'react'
import { useQuery } from 'react-query'

interface Props {
	id: string
}

const Students: FC<Props> = ({ id }) => {
	const students = useQuery('students', {
		queryFn: async () => GroupService.getGroupStudets(id)
	})
	return (
		<Table
			pagination={false}
			loading={students.isFetching}
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
	)
}

export default Students
