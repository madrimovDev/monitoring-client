import React from 'react'
import { useAppSelector } from '@store'
import { Table, Tag } from 'antd'
import { Link } from 'react-router-dom'

const TeachersTable = () => {
	const teachers = useAppSelector(state => state.teachers.data)

	if (!teachers) return null

	return (
		<Table
			dataSource={teachers}
			rowKey={item => item.id}
			expandable={{
				expandedRowRender(record) {
					return (
						<Table
							dataSource={record.groups}
							pagination={false}
							showHeader
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
				}
			]}
		/>
	)
}

export default TeachersTable
