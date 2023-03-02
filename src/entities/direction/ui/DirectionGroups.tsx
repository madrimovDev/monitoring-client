import { Table } from '@/shared'
import React, { FC } from 'react'

interface Props {
	data: Direction.Group[] | undefined
}

const DirectionGroups: FC<Props> = ({ data }) => {
	return (
		<Table
			dataSource={data}
			caption='Groups'
			columns={[
				{
					key: '#',
					title: '#',
					render(_, r, i) {
						return i + 1
					}
				},
				{
					key: 'name',
					title: 'name',
					render(_, r) {
						return r.name
					}
				},
				{
					key: 'months',
					title: 'months',
					render(_, r) {
						return r.months
					}
				},
				{
					key: 'teacher',
					title: 'teacher',
					render(_, r) {
						return `${r.teacher.name} ${r.teacher.surname}`
					}
				}
			]}
		/>
	)
}

export default DirectionGroups
