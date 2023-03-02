import React from 'react'
import { Button, HStack, TableContainer, Link } from '@chakra-ui/react'
import { Link as RLink } from 'react-router-dom'
import { Table } from '@/shared'
import useDirectionsStore from '../model/useDirectionStore'
import useDirectionsModal from '../model/useDirectionsModal'
import directionsActions from '../model/directionsActions'

const DirectionsList = () => {
	const directions = useDirectionsStore(state => state.directions)
	const openWithData = useDirectionsModal(state => state.openWithData)
	const { deleteDirection } = directionsActions()
	const del = deleteDirection()
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
							return (
								<Link
									as={RLink}
									color='blue.500'
									to={String(r.id)}>
									{r.name}
								</Link>
							)
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
						render: (_, r) => {
							return (
								<HStack>
									<Button
										size='xs'
										colorScheme='green'
										onClick={() => openWithData(r)}>
										Edit
									</Button>
									<Button
										size='xs'
										colorScheme='red'
										onClick={() => del.mutate(r.id)}>
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
