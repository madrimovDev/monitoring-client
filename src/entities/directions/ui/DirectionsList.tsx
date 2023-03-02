import React from 'react'
import { Button, HStack, TableContainer } from '@chakra-ui/react'
import useDirectionsStore from '../model/useDirectionStore'
import { Table } from '@/shared'

const DirectionsList = () => {
	const directions = useDirectionsStore(state => state.directions)
	return (
		<TableContainer>
			<Table
				caption='Directions List'
				dataSource={directions.slice()}
				columns={[
					{
						key: '#',
						title: '#',
						render(_, d, i) {
							return i + 1
						}
					},
					{
						key: 'name',
						title: 'Name',
						render(_, r) {
							return r.name
						}
					},
					{
						key: 'status',
						title: 'Status',
						render: (_, r) => {
							return r.status
						}
					},
					{
						key: 'actions',
						render: () => {
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
			/>
		</TableContainer>
	)
}

export default DirectionsList
