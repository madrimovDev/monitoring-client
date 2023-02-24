import React, { FC } from 'react'
import { Table, TableCaption, TableContainer, Tbody, Th, Thead, Tr, useColorModeValue } from '@chakra-ui/react'
import TableRow from './TableRow'

interface Props {
	data: Admins.AdminsResponse | undefined
	edit: (data: Admins.Admin) => void
}

const AdminsTable: FC<Props> = ({ edit, data }) => {
	const bg = useColorModeValue('blackAlpha.50', 'whiteAlpha.50')
	
	return (
		<TableContainer
			p={4}
			rounded='base'
			borderWidth={1}
			borderStyle='solid'
			borderColor='chakra-border-color'
			bg={bg}
			maxW='container.lg'
			mx='auto'>
			<Table>
				<TableCaption>Admins List</TableCaption>
				<Thead>
					<Tr>
						<Th>#</Th>
						<Th>Name</Th>
						<Th>Username</Th>
						<Th>Action</Th>
					</Tr>
				</Thead>
				<Tbody>
					{data?.admins.map((admin, index) => {
						return (
							<TableRow
								key={admin.id}
								admin={admin}
								index={index}
								edit={edit}
							/>
						)
					})}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default AdminsTable
