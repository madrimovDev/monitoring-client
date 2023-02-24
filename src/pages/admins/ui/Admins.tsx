import React, { useEffect } from 'react'
import { AdminsTable } from '@/widgets'
import { useModalWithData } from '@/shared'
import { Button } from '@chakra-ui/react'
import { AdminModal } from '@/entities'
import useGetAdmins from '../module/useGetAdmins'

const Admins = () => {
	const { openModal, open, closeModal, openWithData, data } = useModalWithData<Admins.Admin>()
	const adminResult = useGetAdmins()

	useEffect(() => {
		if (!open) {
			adminResult.refetch()
		}
	}, [open])

	return (
		<>
			<Button onClick={openModal}>Open</Button>
			<AdminsTable
				data={adminResult.data}
				edit={openWithData}
			/>
			<AdminModal
				open={open}
				data={data}
				closeModal={closeModal}
			/>
		</>
	)
}

export default Admins
