import React from 'react'
import { AdminsTable } from '@/widgets'
import { useModalWithData } from '@/shared'
import { Button } from '@chakra-ui/react'
import { AdminModal } from '@/entities'

const Admins = () => {
	const { openModal, open, closeModal, openWithData, data } = useModalWithData<Admins.Admin>()
	return (
		<>
			<Button onClick={openModal}>Open</Button>
			<AdminsTable edit={openWithData} />
			<AdminModal
				open={open}
				data={data}
				closeModal={closeModal}
			/>
		</>
	)
}

export default Admins
