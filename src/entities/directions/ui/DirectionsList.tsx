import React from 'react'
import { Button, Stack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import useDirectionsStore from '../model/useDirectionStore'

const DirectionsList = () => {
	const directions = useDirectionsStore(state => state.directions)
	return (
		<TableContainer>
			<Table>
				<TableCaption>Directions List</TableCaption>
				<Thead>
					<Tr>
						<Th>#</Th>
						<Th>Name</Th>
						<Th>Status</Th>
						<Th></Th>
					</Tr>
				</Thead>
				<Tbody>
					{directions.map((dir, index) => {
						return (
							<Tr key={dir.id}>
								<Td>{index + 1}</Td>
								<Td>{dir.name}</Td>
								<Td>{dir.status}</Td>
								<Stack as={Td}>
									<Button>Edit</Button>
									<Button>Delete</Button>
								</Stack>
							</Tr>
						)
					})}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default DirectionsList
