import React from 'react'
import { TableContainer, Button, HStack } from '@chakra-ui/react'
import useAdminsStore from '../model/useAdminsStore'
import useAdminsModal from '../model/useAdminsModal'
import adminActions from '../model/adminActions'
import { Table } from '@/shared'

const AdminTable = () => {
	const { admins } = useAdminsStore()
	const { openWithData } = useAdminsModal()
	const { deleteAdmin } = adminActions()
	const del = deleteAdmin()
	return (
		<TableContainer>
			<Table
				dataSource={admins.slice()}
				caption='Admins List'
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
						title: 'Name',
						render(_, r) {
							return r.name
						}
					},
					{
						key: 'surname',
						title: 'Surname',
						render(_, r) {
							return r.username
						}
					},
					{
						key: 'action',
						render(_, r) {
							return (
								<HStack>
									<Button
										size='xs'
										colorScheme='green'
										onClick={() => openWithData(r as Admins.Admin)}>
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

export default AdminTable
