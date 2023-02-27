import React from 'react'
import { Table, TableContainer, Thead, Tr, Th, Tbody, Td, TableCaption, Button, HStack } from '@chakra-ui/react'
import useAdmins from '../model/useAdmins'
import useAdminsModal from '../model/useAdminsModal'
import adminActions from '../model/adminActions'

const TableHead = () => {
	return (
		<Thead bg='chakra-subtle-bg'>
			<Tr>
				<Th>#</Th>
				<Th
					borderLeftWidth='1px'
					borderLeftColor='chakra-border-color'>
					Name
				</Th>
				<Th
					borderLeftWidth='1px'
					borderLeftColor='chakra-border-color'
					borderRightWidth='1px'
					borderRightColor='chakra-border-color'>
					Username
				</Th>
				<Th></Th>
			</Tr>
		</Thead>
	)
}

const AdminTable = () => {
	const { admins } = useAdmins()
	const { openWithData } = useAdminsModal()
	const { deleteAdmin } = adminActions()
	const del = deleteAdmin()
	return (
		<TableContainer
			maxW='container.xl'
			mx='auto'
			borderWidth='1px'
			borderColor='chakra-border-color'
			shadow='md'>
			<Table>
				<TableCaption>Admins List</TableCaption>
				<TableHead />
				<Tbody>
					{admins.map((item, index) => {
						return (
							<Tr
								_hover={{
									bg: 'blackAlpha.100'
								}}
								key={item.id}>
								<Td>{index + 1}</Td>
								<Td
									borderLeftWidth='1px'
									borderLeftColor='chakra-border-color'>
									{item.name}
								</Td>
								<Td
									borderLeftWidth='1px'
									borderLeftColor='chakra-border-color'
									borderRightWidth='1px'
									borderRightColor='chakra-border-color'>
									{item.username}
								</Td>
								<HStack as={Td}>
									<Button
										size='xs'
										colorScheme='green'
										onClick={() => openWithData({ ...item, permissions: item.permissions as string[] })}>
										Edit
									</Button>
									<Button
										size='xs'
										colorScheme='red'
										onClick={() => del.mutate(item.id)}>
										Delete
									</Button>
								</HStack>
							</Tr>
						)
					})}
				</Tbody>
			</Table>
		</TableContainer>
	)
}

export default AdminTable
