import React from 'react'
import { AdminHeader, AdminModal, AdminTable } from '@/entities'
import useGetAdmins from '../model/useGetAdmins'
import { Container } from '@chakra-ui/react'

const Admins = () => {
	useGetAdmins()
	return (
		<Container maxW='container.xl'>
			<AdminHeader />
			<AdminTable />
			<AdminModal />
		</Container>
	)
}

export default Admins
