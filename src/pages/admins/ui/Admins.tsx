import React from 'react'
import { AdminModal, AdminTable } from '@/entities'
import useGetAdmins from '../model/useGetAdmins'

const Admins = () => {
	useGetAdmins()
	return (
		<>
			<AdminTable />
			<AdminModal />
		</>
	)
}

export default Admins
