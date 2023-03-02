import React, { FC } from 'react'
import { Table } from '@/shared'
import { Button, HStack } from '@chakra-ui/react'

interface Props {
	data: Direction.Teacher[] | undefined
}

const DirectionTeachers: FC<Props> = ({ data }) => {
	return (
		<Table
			dataSource={data}
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
					key: 'surname',
					title: 'surname',
					render(_, r) {
						return r.surname
					}
				},

				{
					key: 'status',
					title: 'Status',
					render(_, r) {
						return r.status
					}
				},
				{
					key: 'phone',
					title: 'phone',
					render(_, r) {
						return r.phone
					}
				},
				{
					key: 'actions',
					render() {
						return (
							<HStack>
								<Button
									size='xs'
									colorScheme='green'>
									Edit
								</Button>
								<Button
									size='xs'
									colorScheme='red'>
									Delete
								</Button>
							</HStack>
						)
					}
				}
			]}
			caption='Teachers'
		/>
	)
}

export default DirectionTeachers
