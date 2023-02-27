import React from 'react'
import { AdminModal, AdminTable } from '@/entities'
import useGetAdmins from '../model/useGetAdmins'
import { useAdminsModal } from '@/entities'
import { Button } from '@chakra-ui/react'

const Admins = () => {
	const { openModal } = useAdminsModal()
	useGetAdmins()
	return (
		<>
			<Button onClick={openModal}>open</Button>
			<AdminTable />
			<AdminModal />
		</>
	)
}

export default Admins
